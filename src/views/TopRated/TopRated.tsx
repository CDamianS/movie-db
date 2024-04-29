import React, { useEffect, useState } from "react";

import { getTopRated } from "../../services";
import { IMovieResponse } from "./types";
import { MovieCard } from "../../components/MovieCard";

const TopRated: React.FC = () => {
  const [movies, setMovies] = React.useState<IMovieResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPopularMovies = async () => {
    await getTopRated()
      .then((data) => {
        if (data && data.data) {
          setMovies(data.data.results);

        }
      })
      .catch((err) => {
        console.log(err);
      });

  };

  useEffect(() => {
    setIsLoading(true);
    getPopularMovies();
    setIsLoading(false);
  }, []);

  return (
    <div className='relative bg-ctp-crust overflow-x-auto'>
      {isLoading && <div>Loading...</div>}
      <div className='grid gap-4 grid-cols-4 grid-flow-row'>
        {movies?.length > 0 &&
          movies.map((movie) => (
            <MovieCard
              movieId={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              voteAverage={movie.vote_average}
              genreId={movie.genre_ids[0]}
            />

          ))}
      </div>

    </div>
  )
};

export default TopRated;
