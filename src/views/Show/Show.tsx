import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { IMAGE_SOURCE } from "../../constants/moviesMock";
import { MovieGenres } from "../../components/MovieGenres";
import { MovieCard } from "../../components/MovieCard";
import { MovieFacts } from "../../components/MovieFacts";
import { HeartIcon } from "@heroicons/react/24/solid";
import { getDetails } from "../../services";
import { IMovieDetail } from "../Favourites/types";
import { IMovieResponse } from "../Home/types";
import { getSimilar } from "../../services/movies/getSimilarMovies";

const Show: React.FC = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [movie, setMovie] = useState<IMovieDetail | undefined>();
    const [loading, setIsLoading] = useState(true);
    const [isFavourite, setIsFavourite] = useState<boolean>(false);
    const [favourites, setFavourites] = useState<string>("");
    const [similar, setSimilar] = React.useState<IMovieResponse[]>([]);

    const getMovieDetails = async (id: string | undefined) => {
        await getDetails(id)
            .then((data) => {
                if (data && data.data) {
                    setMovie(data.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getSimilarMovies = async (id: string | undefined) => {
        await getSimilar(id)
            .then((data) => {
                if (data && data.data) {
                    setSimilar(data.data.results);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const goBack = () => {
        navigate(-1);
    };

    const addFavourite = () => {
        const favs = favourites.length > 0 ? JSON.parse(favourites) : [];
        const newFavourites = [...favs, id];
        setFavourites(JSON.stringify(newFavourites));
        setIsFavourite(true);
        localStorage.setItem("favourites", JSON.stringify(newFavourites));
    };

    const removeFavourite = () => {
        const favs = favourites.length > 0 ? JSON.parse(favourites) : [];
        let newFavourites = [...favs];
        newFavourites = newFavourites.filter((e) => e !== id);
        setFavourites(JSON.stringify(newFavourites));
        setIsFavourite(false);
        localStorage.setItem("favourites", JSON.stringify(newFavourites));
    };

    useEffect(() => {
        setIsLoading(true);
        const favs = localStorage.getItem("favourites") || "";
        setFavourites(favs);
        if (favs.includes(String(id))) {
            setIsFavourite(true);
        }
        getMovieDetails(id);
        getSimilarMovies(id);
        setIsLoading(false);
    }, [id]);

    function isApeVsMechaApe(movieName: string): boolean {
        return movieName === "Ape vs. Mecha Ape";
    }
    const poster = IMAGE_SOURCE + movie?.poster_path;

    return (
        <div className="relative bg-ctp-crust min-h-screen">
            {loading && <div>Loading...</div>}
            <div className="flex p-4">
                <img className="rounded-lg" src={poster} alt={movie?.title} />
                <div className="items-center justify-between mx-auto">
                    <div className="p-6 px-4 font-sans text-6xl font-bold text-ctp-text">
                        {movie?.title}
                    </div>
                    <MovieFacts
                        adult={movie?.adult}
                        runtime={movie?.runtime}
                        release_date={movie?.release_date}
                        rating={movie?.vote_average}
                        votes={movie?.vote_count}
                    />
                    {movie?.genres ? (
                        <MovieGenres genres={movie?.genres} />
                    ) : (
                        <div>No genres found!</div>
                    )}
                    <div className="p-6 px-4 font-sans text-3xl font-bold text-ctp-text">
                        {movie?.tagline}
                    </div>
                    <div className="p-6 px-4 font-sans text-2xl font-bold text-ctp-text">
                        {movie?.overview}
                    </div>
                    <div className="flex">
                        <button
                            className="hover:bg-ctp-sapphire p-2 mx-2 rounded-lg inline-block bg-ctp-blue text-ctp-base font sans text-xl font-bold mr-2 my-8"
                            onClick={goBack}
                        >
                            {" "}
                            Go Back{" "}
                        </button>
                        {isFavourite ? (
                            <div>
                                <button
                                    className="hover:bg-ctp-maroon flex p-2 mx-2 rounded-lg items-center bg-ctp-red text-ctp-base font sans text-xl font-bold mr-2 my-8"
                                    onClick={removeFavourite}
                                >
                                    Remove from Favourites
                                </button>
                            </div>
                        ) : (
                            <div>
                                <button
                                    className="hover:bg-ctp-pink flex p-2 mx-2 rounded-lg items-center bg-ctp-red text-ctp-base font sans text-xl font-bold mr-2 my-8"
                                    onClick={addFavourite}
                                >
                                    <HeartIcon className="size-6 text-ctp-base" />
                                    Add to Favourites
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {
                // Profe si ve esto no me repruebe
                isApeVsMechaApe(location.state.movieName) && (
                    <div>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.dailymotion.com/embed/video/x8pelpe"
                            title="Ape vs. Mecha Ape"
                            allowFullScreen
                        ></iframe>
                    </div>
                )
            }
            <div className="p-6 px-4 font-sans text-3xl font-bold text-ctp-text">
                Similar Movies
            </div>
            <div className="flex space-x-2 overflow-x-auto">
                {similar?.length > 0 &&
                    similar.map((movie) => (
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
    );
};

export default Show;
