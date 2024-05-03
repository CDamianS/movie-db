import React from 'react';
import { IGenre } from './types';

class MovieGenres extends React.Component<{ genres: IGenre[] }> {
    render() {
        const { genres } = this.props;

        return (
            <div>
                <h2 className="p-6 px-4 font-sans text-3xl font-bold text-ctp-text">Genres</h2>
                <ul>
                    {genres.map(genre => (
                        <li className="mx-2 p-2 rounded-lg inline-block bg-ctp-green text-ctp-base font-sans text-xl font-bold mr-2" key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default MovieGenres;
