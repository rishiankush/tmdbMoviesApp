import axios from "axios";
import { Movie } from "../types/types";

const API_KEY = "2d93ba4ca203c006811ee2872faffc0e";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async (
  pageNumber: number
): Promise<Movie[]> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${pageNumber}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};

export const fetchLatestMovies = async (
  pageNumber: number
): Promise<Movie[]> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/latest?api_key=${API_KEY}&page=${pageNumber}`
    );
    console.log("response ****** latest ****** ", response);
    const latestMovies = Array.isArray(response.data)
      ? response.data
      : [response.data];
    return latestMovies;
  } catch (error) {
    console.error("Error fetching latest movies:", error);
    throw error;
  }
};
