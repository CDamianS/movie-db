import React, { useEffect, useState } from 'react';
import { IMovieDetail } from "./types";
import { getDetails } from "../../services";

const Favourites: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [shows, setShows] = useState<IMovieDetail[]>([]);
    const favourites: string = localStorage.getItem('favourites') || '';


    const runGetFavourites = async () => {
        if (favourites.length) {
            const favouritesArray = JSON.parse(favourites);
            const newShows = await Promise.all(
                favouritesArray.map(async (favourite: string) => {
                    return getDetails(String(favourite))
                        .then((res) => {
                            if (res && res.data) {
                                return res.data;
                            }
                        })
                        .catch((err) => {
                            err = err.response;
                        });
                }))
        }
    }
    useEffect(() => {
        runGetFavourites();
    }, []);

    return <div>Hola</div>
    // {!loading ? (
    //     <div>
    //         <h2>Favourites</h2>
    //         {favourites && favourites.length > 0 ? (
    //             <div>Adios</div>
    //         ) :
    //             (
    //                 <div>Hola</div>
    //             )
    // 	  )
    //         };
}

export default Favourites

