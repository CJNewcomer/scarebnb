import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import HauntingProfile from '../HauntingProfile';

import { grabHauntings } from '../../store/hauntings';

const SearchResults = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const query = location.search.split('='[1]);

    const hauntings = useSelector((state) => state.hauntings);
    const similarMatch = Object.values(hauntings).filter(haunting => haunting.name.toLowerCase().includes(query.toLowerCase()));

    if (!similarMatch) {
        dispatch(grabHauntings(query));
    }

   
    return (
        <div className='search__wrapper'>
            <div className='search__results'>
                <h2>Search Results</h2>
                {similarMatch.map(haunting => (
                    <div key={haunting.id}>
                        <HauntingProfile haunting={haunting} />
                    </div>
                ))}
            </div>    
        </div>
    )
}

export default SearchResults;