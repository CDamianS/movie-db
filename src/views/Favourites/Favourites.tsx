import React, { useEffect, useState } from "react";
import { IMovieDetail } from "./types";
import { MovieCard } from "../../components/MovieCard";
import { getDetails } from "../../services";

const Favourites: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [movies, setMovies] = useState<IMovieDetail[]>([]);
    const favourites: string = localStorage.getItem("favourites") || "";

    const runGetFavourites = async () => {
        if (favourites.length) {
            const favouritesArray = JSON.parse(favourites);
            const newShows = await Promise.all(
                favouritesArray.map(async (favorite: string) => {
                    return getDetails(String(favorite))
                        .then((res) => {
                            if (res && res.data) {
                                return res.data;
                            }
                        })
                        .catch((err) => {
                            err = err.response;
                        });
                }),
            );

            setMovies(newShows);
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        runGetFavourites();
        setLoading(false);
    }, []);

    return (
        <div className="relative bg-ctp-crust min-h-screen">
            {loading && <div>Loading...</div>}
            <div className="flex p-6 px-4 font-sans- text-2xl font-semibold text-ctp-text">
                Favourites
            </div>
            {favourites && favourites.length > 2 ? (
                <div className="grid gap-4 grid-cols-5 grid-flow-row">
                    {movies &&
                        movies.map((show: IMovieDetail) => (
                            <MovieCard
                                key={show.id}
                                movieId={show.id}
                                title={show.title}
                                genreId={show.genres[0].id}
                                voteAverage={show.vote_average}
                                posterPath={show.poster_path}
                            />
                        ))}
                </div>
            ) : (
                <div className="flex p-6 px-4 font-sans- text-2xl font-semibold text-ctp-text">
                    No favourites
                </div>
            )}
        </div>
    );
};

export default Favourites;
