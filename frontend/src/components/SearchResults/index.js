import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { getMultipleHauntings } from '../../store/hauntings';
import { useSearchContext } from '../context/SearchContext';
import './SearchResults.css';

const SearchResults = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const query = location.search.split('=')[1];

    const hauntings = useSelector((state) => state.hauntings);
    const similarMatch = Object.values(hauntings).filter(haunting => haunting.locationName.toLowerCase().includes(query.toLowerCase()));

    useEffect(() => {
        dispatch(getMultipleHauntings())
    }, [dispatch])
   
    const {setInput} = useSearchContext();

    useEffect(() => {
        setInput('');
    }, [setInput]);


    return (
        <div className='search__wrapper'>
            <p className='search__results'>Search Results</p>
            <div className='search'>
                {similarMatch.map(haunting => {
                    const { id, imgPath, locationName, price } = haunting;
                return (
                    <Link to={`/hauntings/${id}`}>
                        <div className='card' style={{marginBottom: '20px'}}>
                            <img src={imgPath} alt="" />
                            <div className="card__info">
                                <h2>{locationName}</h2>
                                <h3>{price} / Night</h3>
                            </div>
                        </div>
                    </Link>    
                )})}
            </div>    
        </div>
    )
}

export default SearchResults;