import React from "react";

import MoviesListScreen from "../screens/MoviesListScreen";
import { fetchPopularMovies } from "../services/tmdbService";
import { render, waitFor } from "@testing-library/react-native";

const navigation = {
  navigate: jest.fn(),
};

jest.mock("../services/tmdbService");

const mockMovies = [
  {
    id: 1,
    title: "Movie 1",
    overview: "Overview 1",
    poster_path: "/poster1.jpg",
  },
  {
    id: 2,
    title: "Movie 2",
    overview: "Overview 2",
    poster_path: "/poster2.jpg",
  },
];

test("renders movie list", async () => {
  (fetchPopularMovies as jest.Mock).mockResolvedValueOnce(mockMovies);
  const { getByText } = render(<MoviesListScreen navigation={navigation} />);
  await waitFor(() => {
    expect(getByText(mockMovies[0].title)).toBeTruthy();
    expect(getByText(mockMovies[1].title)).toBeTruthy();
  });
});
