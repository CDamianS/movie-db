import React from "react";
import { IGenre } from "./types";

class MovieGenres extends React.Component<{ genres: IGenre[] }> {
    render() {
        const { genres } = this.props;

        return (
            <div>
                <ul className="flex p-4 px-2">
                    {genres.map((genre) => (
                        <li
                            className="ml-1 rounded-lg p-1 inline-block bg-ctp-green text-ctp-base font-sans text-base font-bold mr-2"
                            key={genre.id}
                        >
                            {genre.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default MovieGenres;
