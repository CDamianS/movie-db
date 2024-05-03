import React from 'react';
import { IFacts } from './types';
import { ClockIcon } from '@heroicons/react/24/solid'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import { StarIcon } from '@heroicons/react/24/solid'
import { ChartBarIcon } from '@heroicons/react/24/solid'


const MovieFacts: React.FC<IFacts> = ({
    adult,
    runtime,
    release_date,
    rating,
    votes
}) => {
    const isAdult = () => (adult ? "Adults Only" : "Everyone");
    const getRating = () => (rating ? rating / 2 : 0);
    return (
        <div className="flex p-4 px-2">
            <div className='font-sans text-xl font-bold text-ctp-base rounded-lg bg-ctp-mauve p-2 flex px-2 items-center mx-2'>
                <CheckBadgeIcon className="size-6 text-ctp-base" />
                {isAdult()}
            </div>
            <div className='font-sans text-xl font-bold text-ctp-base rounded-lg bg-ctp-peach p-2 flex px-2 items-center mx-2'>
                <ClockIcon className="size-6 text-ctp-base" />
                {runtime}
            </div>
            <div className='font-sans text-xl font-bold text-ctp-base rounded-lg bg-ctp-lavender p-2 flex px-2 items-center mx-2'>
                <CalendarDaysIcon className="size-6 text-ctp-base" />
                {release_date?.substring(0, 4)}
            </div>
            <div className='font-sans text-xl font-bold text-ctp-base rounded-lg bg-ctp-yellow p-2 flex px-2 items-center mx-2'>
                <StarIcon className="size-6 text-ctp-base" />
                {Math.round(getRating() * 100) / 100}/5
            </div>
            <div className='font-sans text-xl font-bold text-ctp-base rounded-lg bg-ctp-teal p-2 flex px-2 items-center mx-2'>
                <ChartBarIcon className="size-6 text-ctp-base" />
                {votes}
            </div>
        </div >
    );
}

export default MovieFacts;

                    // {movie?.adult ? (<div>No apta para niños</div>) : (<div>apta pal chamaco</div>)}
                    // <div>{movie?.runtime}</div>
                    // <div>{movie?.release_date}</div>
                    // <div>{movie?.vote_average ? (Math.round(movie?.vote_average * 100) / 100) : (<>No score</>)}/10</div>
                    // <div>{movie?.vote_count}</div>
