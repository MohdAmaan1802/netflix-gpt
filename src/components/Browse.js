import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopMovies from "../hooks/useTopMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {/* MainConatiner
       - VideoBackground
       - VideoTitle
      SecondaryConatiner
       - MovieList * n
        - cards * n */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
