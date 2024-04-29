import React, { useEffect } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

const Show: React.FC = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {

    }, []);

  return (

    <div>
        <div> Show: {id} </div>
        <div> Título desde el state: {location.state.movieName}</div>
        <div onClick={goBack}> Volver </div>
        
    </div>
  )
}

export default Show
