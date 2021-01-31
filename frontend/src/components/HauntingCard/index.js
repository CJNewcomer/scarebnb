import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { getMultipleHauntings } from '../../store/hauntings';
import './HauntingCard.css';

function HauntingCard() {
    const dispatch = useDispatch();
    // const {id} = useParams();
    const hauntingCard = useSelector((state) => Object.values(state.hauntings));
    console.log(hauntingCard)

    useEffect(() => {
        dispatch(getMultipleHauntings())
    }, [dispatch])

    if (!hauntingCard) return null;
    const { imgPath, locationName, price } = hauntingCard;
    return (
        <div className='card'>
            <img src={imgPath} alt="" />
            <div className="card__info">
                <h2>{locationName}</h2>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default HauntingCard;