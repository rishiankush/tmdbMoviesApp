import React from "react";
import { View } from "react-native";
import MovieDetail from "../components/MovieDetail";
import { Movie } from "../types/types";

interface MovieDetailScreenProps {
  route: { params: { movie: Movie } };
  navigation: any;
}

const MovieDetailScreen: React.FC<MovieDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const { movie } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <MovieDetail movie={movie} navigation={navigation} />
    </View>
  );
};

export default MovieDetailScreen;
