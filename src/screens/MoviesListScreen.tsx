import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
} from "react-native";
import { fetchPopularMovies, fetchLatestMovies } from "../services/tmdbService";
import MovieListItem from "../components/MovieListItem";
import { Movie } from "../types/types";
import SearchHeader from "../components/SearchHeader";
import BaseFontStyle from "../constants/BaseFontStyle";
import Colors from "../constants/Colors";

interface MoviesListScreenProps {
  navigation: any;
  route: any;
}

const MoviesListScreen: React.FC<MoviesListScreenProps> = ({
  navigation,
  route,
}) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const activeTab = route.name;

  const fetchData = async (pageNumber: number) => {
    try {
      setLoading(true);
      let moviesData: Movie[] = [];
      if (activeTab === "Popular") {
        moviesData = await fetchPopularMovies(pageNumber);
      } else if (activeTab === "Latest") {
        moviesData = await fetchLatestMovies(pageNumber);
      }
      setMovies((prevMovies) => [...prevMovies, ...moviesData]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [activeTab]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(page + 1);
      fetchData(page + 1);
    }
  };

  if (loading && movies.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderEmptyList = () => (
    <View style={styles.emptyListContainer}>
      <Text style={[BaseFontStyle.bold.xx_large, styles.emptyListText]}>
        No movies found
      </Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SearchHeader />
      {movies && movies.length > 0 ? (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MovieListItem movie={item} navigation={navigation} />
          )}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
        />
      ) : (
        renderEmptyList()
      )}
      {loading && movies.length > 0 && (
        <ActivityIndicator
          style={{ marginVertical: 10 }}
          size="large"
          color="#0000ff"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyListContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
  },
  emptyListText: {
    color: Colors.GRAY,
  },
});

export default MoviesListScreen;
