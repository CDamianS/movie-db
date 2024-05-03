import React, { useEffect, useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { getDetails } from "../../services";

const Show: React.FC = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [show, setShow] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [isFavourite, setIsFavourite] = useState<boolean>(false);
    const [favourites, setFavourites] = useState<string>('');

    const goBack = () => {
        navigate(-1);
    };

    const addFavourite = () => {
        const favs = favourites.length > 0 ? JSON.parse(favourites) : [];
        const newFavourites = [...favs, id];
        setFavourites(JSON.stringify(newFavourites))
        setIsFavourite(true);
        localStorage.setItem('favourites', JSON.stringify(newFavourites))
    }

    const removeFavourite = () => {
        const favs = favourites.length > 0 ? JSON.parse(favourites) : [];
        let newFavourites = [...favs];
        newFavourites = newFavourites.filter((e) => e !== id);
        setFavourites(JSON.stringify(newFavourites));
        localStorage.setItem('favourites', JSON.stringify(newFavourites))
    }

    useEffect(() => {
        const favs = localStorage.getItem('favourites') || '';
        setFavourites(favs);
        if (favs.includes(String(id))) {
            setIsFavourite(true);
        }
        setLoading(true);
        // getDetails();
    }, []);
    function isApeVsMechaApe(movieName: string): boolean {
        return movieName === "Ape vs. Mecha Ape";
    }

    return (

        <div>
            <div> Show: {id} </div>
            <div> Título desde el state: {location.state.movieName}</div>
            <div onClick={goBack}> Volver </div>
            {isFavourite ? (
                <div>
                    <button onClick={removeFavourite}>Remove from Favourites</button>
                </div>
            ) : (
                <button onClick={addFavourite}>Add to Favourites</button>
            )
            }
            {
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
        </div>
    )
}

export default Show


