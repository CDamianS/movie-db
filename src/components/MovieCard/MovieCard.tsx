import React from 'react'
import { IMovieCard } from './types'
import { IMAGE_SOURCE } from '../../constants/moviesMock'
import genres from "../../constants/genres.json"
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/constants'

const MovieCard: React.FC<IMovieCard> = ({
    title,
    genreId,
    movieId,
    voteAverage,
    posterPath
}) => {
    const navigate = useNavigate();
    const poster = IMAGE_SOURCE + posterPath;

    const getGenre = (genreId: number) => {
        for (let index: number = 0; index < genres.genres.length; index++) {
            let key = genres.genres[index].id;
            if (key === genreId) {
                return genres.genres[index].name
            }

        }
    }

    const navigateMovies = (id: number, movieName: string, genre: string | undefined, voteAverage: number) => {
        navigate(`${ROUTES.SHOW}${id}`, { state: { movieName, genre, voteAverage } });
    }

    return (
        <div className='grid'
            onClick={() => {
                navigateMovies(movieId, title, getGenre(genreId), voteAverage);
            }}>
            <div className='relative mx-4 mb-4 h-96 w-64 border-black rounded-lg shadow-sm hover:scale-110 transition duration-150' style={{ backgroundImage: `url(${poster})`, backgroundSize: 'cover' }}>
                <div className='absolute bottom-5 left-3 font-sans text-cyan-50'>
                    <div className='flex items-center'>
                        <p className='bg-ctp-red px-2 rounded-md font-semibold text-ctp-base'>
                            {getGenre(genreId)}
                        </p>
                    </div>

                    <p className='font-bold'>{title}</p>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>


                </div>
                <p className='absolute bottom-4 left-7 font-sans text-ctp-text'>: {Math.round(voteAverage * 100) / 100}/10</p>
            </div>



        </div>
    )
}

export default MovieCard;
