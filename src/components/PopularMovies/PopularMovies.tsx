import React from 'react'
import { MovieCard } from '../MovieCard'
import { movies } from '../../constants/moviesMock'
import { IPopularMovies } from './types'

const PopularMovies: React.FC<IPopularMovies> = () => {

    const getMovies = () => {
        let movieCards: any = []
        for (let index = 0; index < 20; index++) {
            movieCards.push(
                <MovieCard
                    movieId={movies[index].id}
                    posterPath={movies[index].poster_path}
                    title={movies[index].title}
                    voteAverage={movies[index].vote_average}
                    genreId={movies[index].genre_ids[0]}
                />
            )
        }
        return movieCards;


    }

    return (
        <div className='relative bg-slate-100 overflow-x-auto'>
            <div className='flex p-6 px-4 font-sans text-2xl font-semibold'>
                Popular
            </div>
            <div className='flex'>
                {getMovies()}
            </div>

        </div>
    )
}

export default PopularMovies
