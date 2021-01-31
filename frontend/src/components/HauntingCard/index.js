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
    const hauntingCards = landingPageCards.slice(0, 4);
    // console.log(hauntingCards)

    useEffect(() => {
        dispatch(getMultipleHauntings())
    }, [dispatch])

    if (!hauntingCards) return null;
    return (
        <>    
            { hauntingCards.map(hauntingCard => {
                const { id, imgPath, locationName, price } = hauntingCard;
                return (
                    <div className='card__container'>
                        <Link to={`/hauntings/${id}`}>
                            <div className='card'>
                                <img src={imgPath} alt="" />
                                <div className="card__info">
                                    <h2>{locationName}</h2>
                                    <h3>{price}</h3>
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