import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

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
