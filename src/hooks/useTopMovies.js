import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopMovies } from "../utils/moviesSlice";

const useTopMovies = () => {
  const dispatch = useDispatch();
  const topMovies = useSelector((store) => store.movies.topMovies);

  useEffect(() => {
    !topMovies && getTopMovies();
  }, []);

  const getTopMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);
    dispatch(addTopMovies(json.results));
  };
};

export default useTopMovies;
