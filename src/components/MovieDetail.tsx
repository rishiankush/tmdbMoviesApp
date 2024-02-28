import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { Movie } from "../types/types";
import BaseFontStyle from "../constants/BaseFontStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../constants/Colors";

interface MovieDetailProps {
  movie: Movie;
  navigation: any;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.poster}
      >
        <Ionicons
          name="chevron-back-outline"
          size={32}
          color={Colors.WHITE}
          onPress={() => navigation.goBack()}
        />
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <Text style={[BaseFontStyle.bold.xx_large, styles.title]}>
          {movie.title}
        </Text>
        <Text style={[BaseFontStyle.regular.small, styles.overview]}>
          {movie.overview}
        </Text>
        <Text style={[BaseFontStyle.regular.small, styles.releaseDate]}>
          Release Date: {movie.release_date}
        </Text>
        <Text style={BaseFontStyle.regular.small}>
          Rating: {movie.vote_average}/10
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  poster: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    marginBottom: 20,
  },
  detailsContainer: {
    flex: 1,
    margin: 20,
  },
  title: {
    marginBottom: 10,
  },
  overview: {
    marginBottom: 10,
  },
  releaseDate: {
    marginBottom: 5,
  },
});

export default MovieDetail;
