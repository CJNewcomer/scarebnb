import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { getMultipleHauntings } from '../../store/hauntings';
import './HauntingCard.css';

function HauntingCard() {
    const dispatch = useDispatch();
    // const {id} = useParams();
    const landingPageCards = useSelector((state) => Object.values(state.hauntings));
    const randomNumber = Math.floor(Math.random()*32)
    const hauntingCards = landingPageCards.slice(randomNumber, (randomNumber + 8));
    // console.log(hauntingCards)

    useEffect(() => {
        dispatch(getMultipleHauntings())
    }, [dispatch])

    if (!hauntingCards) return null;
    return (
        <>    
            { hauntingCards.map(hauntingCard => {
                const { id, imgPath, locationName, city, state, price } = hauntingCard;
                return (
                    <div className='card__container' key={id}>
                        <Link to={`/hauntings/${id}`}>
                            <div className='card'>
                                <img src={imgPath} alt="" />
                                <div className="card__info">
                                    <h2>{locationName}</h2>
                                    <h3>{city}, {state}</h3>
                                    <h3>{price} / Night </h3>
                                </div>
                            </div>
                        </Link>
                    </div>        
                )
            })}
        </>
    )
}

export default HauntingCard;