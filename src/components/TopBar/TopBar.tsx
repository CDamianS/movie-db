import React from "react";
import { Link } from "react-router-dom";
// import cuevana from "../../constants/cuevana.png";
import { ROUTES } from "../../routes/constants";

const TopBar = () => {
    return (
        <div className="bg-ctp-base flex font-sans font-semibold items-center justify-between mx-auto p-4 text-ctp-blue">
            <Link to={ROUTES.HOME} className="text-2xl">
                MovieDB
            </Link>

            <div className="text-xl">
                <Link to={ROUTES.HOME} className="px-3">
                    Home
                </Link>
                <Link to={ROUTES.POPULAR} className="px-3">
                    Popular
                </Link>
                <Link to={ROUTES.NOW_PLAYING} className="px-3">
                    Now Playing
                </Link>
                <Link to={ROUTES.TOP_RATED} className="px-3">
                    Top Rated
                </Link>
                <Link to={ROUTES.FAVOURITES} className="px-3">
                    Favourites
                </Link>
            </div>
        </div>
    );
};

export default TopBar;
