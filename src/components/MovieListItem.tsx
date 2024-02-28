import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Movie } from "../types/types";
import BaseFontStyle from "../constants/BaseFontStyle";

interface MovieListItemProps {
  movie: Movie;
  navigation: any;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie, navigation }) => {
  return (
    <Pressable
      testID="movieItemPressable"
      onPress={() => navigation.navigate("MovieDetailScreen", { movie })}
      style={styles.container}
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.poster}
      />
      <View style={{ flex: 1 }}>
        <Text style={[BaseFontStyle.bold.large, styles.title]}>
          {movie.title}
        </Text>
        <Text numberOfLines={3} style={[BaseFontStyle.regular.x_small]}>
          {movie.overview}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  poster: {
    width: 80,
    height: 120,
    marginRight: 10,
    borderRadius: 8,
  },
  title: {
    marginBottom: 5,
  },
});

export default MovieListItem;
