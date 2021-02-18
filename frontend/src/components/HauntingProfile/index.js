import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import { getHauntingsProfile } from '../../store/hauntings';
import BookingDates from '../BookingDates';
import './HauntingProfile.css';

function HauntingProfile() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [showCalendar, setShowCalendar] = useState(false);

    const openCalendar = () => {
        if (showCalendar) return;
        setShowCalendar(true) 
    };

    useEffect(() => {
        if (!showCalendar) return;

        const closeMenu = () => {
            setShowCalendar(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showCalendar]);

    const haunting = useSelector(state => state.hauntings[id])
   
    
    useEffect(() => {
        dispatch(getHauntingsProfile(id))
    }, [dispatch, id])
    
    if (!haunting) return null;
    const {imgPath, locationName, address, city, state, country, price, description} = haunting;

    return (
        <>
            <div className='spot'>
                <img src={imgPath} alt="Haunting"/>
                <div className='spot__info'>
                    <h2>{locationName}</h2>
                    <h3>{address}</h3>
                    <h3>{city}, {state} {country}</h3>
                    <h4 className='price'>{price} / Night </h4>
                    <h4 className='description'>{description}</h4>
                    <div className="book__now">
                        <button onClick={openCalendar}>Book
                            <i className="fas fa-book-dead"></i>Now
                        </button>
                    {showCalendar && <BookingDates /> } 
                    </div>  
                </div>    
            </div>   
        </>    
    )
}

export default HauntingProfile;