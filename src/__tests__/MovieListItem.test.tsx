import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import MovieListItem from "../components/MovieListItem";

const mockMovie = {
  id: 1,
  title: "Mock Movie",
  overview: "Mock Overview",
  poster_path: "/mockPoster.jpg",
  release_date: "2022-01-01",
  vote_average: 8.5,
};

const mockNavigation = {
  navigate: jest.fn(),
};

test("renders movie item with correct title and overview", () => {
  const { getByText } = render(
    <MovieListItem movie={mockMovie} navigation={mockNavigation} />
  );
  expect(getByText(mockMovie.title)).toBeTruthy();
  expect(getByText(mockMovie.overview)).toBeTruthy();
});

test("navigates to movie detail screen when pressed", () => {
  const { getByTestId } = render(
    <MovieListItem movie={mockMovie} navigation={mockNavigation} />
  );
  fireEvent.press(getByTestId("movieItemPressable"));
  expect(mockNavigation.navigate).toHaveBeenCalledWith("MovieDetailScreen", {
    movie: mockMovie,
  });
});
