import React, { useEffect, useState } from "react";

import { getNowPlaying } from "../../services";
import { IMovieResponse } from "./types";
import { MovieCard } from "../../components/MovieCard";

const NowPlaying: React.FC = () => {
    const [movies, setMovies] = React.useState<IMovieResponse[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getNowPlayingMovies = async () => {
        await getNowPlaying()
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
        getNowPlayingMovies();
        setIsLoading(false);
    }, []);

    return (
        <div className='relative bg-ctp-crust overflow-x-auto'>
            {isLoading && <div>Loading...</div>}
            <div className='grid gap-4 grid-cols-5 grid-flow-row'>
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

export default NowPlaying;
