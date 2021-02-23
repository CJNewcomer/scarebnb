import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import { getHauntingsProfile } from '../../store/hauntings';
import CreateUserHauntingModal from '../CreateUserHaunting/index';
import './HauntingProfile.css';

function HauntingProfile() {
    const dispatch = useDispatch();
    const {id} = useParams();

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
                    <div> 
                        <CreateUserHauntingModal />
                    </div>  
                </div>    
            </div>   
        </>    
    )
}

export default HauntingProfile;