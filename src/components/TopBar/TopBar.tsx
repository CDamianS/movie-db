import React from 'react'
import { Link } from 'react-router-dom'
/* import cuevana from '../../constants/cuevana.png' */
import { ROUTES } from '../../routes/constants'

const TopBar = () => {
  return (
    <div className='flex bg-ctp-base p-6 font-sans text-2xl font-semibold text-ctp-blue'>

      <Link to={ROUTES.HOME} >
        {/* <img src={cuevana} alt="" /> */}
        MovieDB
      </Link>

      <div className='px-80'></div>
      <Link to={ROUTES.HOME} className='px-3'>Home</Link>
      <Link to={ROUTES.POPULAR} className='px-3'>Popular</Link>
      <Link to={ROUTES.NOW_PLAYING} className='px-3'>Now Playing</Link>
      <Link to={ROUTES.TOP_RATED} className='px-3'>Top Rated</Link>

    </div>
  )
}

export default TopBar
