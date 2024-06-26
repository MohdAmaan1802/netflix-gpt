import openai from "../utils/openai";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  //search movie in tmbd
  const searchMovieTMBD = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //make api call to gpt api and get movie results
    const gptQuery =
      "Act as a Movie Recommandation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholey, Don, Golmaal, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      <h1>Error</h1>;
    }
    console.log(gptResults.choices?.[0]?.message?.content);
    //Andaz Apna Apna, Chupke Chupke, Namak Halaal, Jaane Bhi Do Yaaro, Chhoti Si Baat

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    //["Andaz Apna Apna", "Chupke Chupke", "Namak Halaal", "Jaane Bhi Do Yaaro", "Chhoti Si Baat"]

    //for each movie will search in tmbd api

    const promsieArray = gptMovies.map((movie) => searchMovieTMBD(movie));
    //[Promsie,Promsie,Promsie,Promsie,Promsie]

    const tmbdResults = await Promise.all(promsieArray);
    console.log(tmbdResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmbdResults })
    );
  };
  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className=" w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 "
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg "
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
