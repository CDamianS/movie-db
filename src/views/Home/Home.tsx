import React, { useEffect, useState } from "react";
import { MovieCard } from '../../components/MovieCard';

import { getNowPlaying, getPopular, getTopRated } from "../../services";

import { IMovieResponse } from './types';

const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [popular, setPopular] = React.useState<IMovieResponse[]>([]);
    const [now_playing, setNowPlaying] = React.useState<IMovieResponse[]>([]);
    const [top_rated, setTopRated] = React.useState<IMovieResponse[]>([]);


    const getPopularMovies = async () => {
        await getPopular()
            .then((data) => {
                if (data && data.data) {
                    setPopular(data.data.results);

                }
            })
            .catch((err) => {
                console.log(err);
            });

    }

    const getNowPlayingMovies = async () => {
        await getNowPlaying()
            .then((data) => {
                if (data && data.data) {
                    setNowPlaying(data.data.results);
                }
            })
            .catch((err) => {
                console.log(err);
            });

    }

    const getTopRatedMovies = async () => {
        await getTopRated()
            .then((data) => {
                if (data && data.data) {
                    setTopRated(data.data.results);

                }
            })
            .catch((err) => {
                console.log(err);
            });

    }

    useEffect(() => {
        setIsLoading(true);
        getPopularMovies();
        getNowPlayingMovies();
        getTopRatedMovies();
        setIsLoading(false);
    }, []);

    return (
        <div className='relative bg-ctp-crust'>
            {isLoading && <div>Loading...</div>}
            <div className='flex p-6 px-4 font-sans- text-2xl font-semibold text-ctp-text'>
                Popular
            </div>
            <div className='flex space-x-2 overflow-x-auto'>
                {popular?.length > 0 &&
                    popular.map((movie) => (
                        <MovieCard
                            movieId={movie.id}
                            posterPath={movie.poster_path}
                            title={movie.title}
                            voteAverage={movie.vote_average}
                            genreId={movie.genre_ids[0]}
                        />

                    ))}
            </div>

            <div className='flex p-6 px-4 font-sans- text-2xl font-semibold text-ctp-text'>
                Now Playing
            </div>
            <div className='flex space-x-2 overflow-x-auto'>
                {now_playing?.length > 0 &&
                    now_playing.map((movie) => (
                        <MovieCard
                            movieId={movie.id}
                            posterPath={movie.poster_path}
                            title={movie.title}
                            voteAverage={movie.vote_average}
                            genreId={movie.genre_ids[0]}
                        />

                    ))}
            </div>

            <div className='flex p-6 px-4 font-sans- text-2xl font-semibold text-ctp-text'>
                Top Rated
            </div>
            <div className='flex space-x-2 overflow-x-auto'>
                {top_rated?.length > 0 &&
                    top_rated.map((movie) => (
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
}

export default Home
