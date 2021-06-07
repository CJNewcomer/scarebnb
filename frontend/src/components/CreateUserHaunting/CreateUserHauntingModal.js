import { useState } from 'react';
import { DateRangePicker } from 'react-date-range'
import { useDispatch, useSelector } from 'react-redux';

import './CreateUserHaunting.css'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import {userHauntingCreate} from '../../store/userHauntings';


const CreateUserHaunting = ({handleClose}) => {
    const [bookingStartDate, setBookingStartDate] = useState(new Date());
    const [bookingEndDate, setBookingEndDate] = useState(new Date());
    const [errors, setErrors] = useState([]);

    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const selectionRange = {
        bookingStartDate,
        bookingEndDate,
        key: 'selection'
    }
 

    const onSelection = (dates) => {
        setBookingStartDate(dates.selection.bookingStartDate)
        setBookingEndDate(dates.selection.bookingEndDate)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setErrors([])
        return dispatch(userHauntingCreate({ sessionUser, bookingStartDate, bookingEndDate })).then(handleClose()).catch(
            (res) => {
                if (res.data && res.data.errors) setErrors(res.data.errors);
            }
        );
    }

    return (
       <form className='form__login'>
            <div className='form__content-container'>
                <h3 className='form__title'>Ready For a Fright?</h3>
                <ul className="error-list">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>     
                <div className="form__input-container">
                    <DateRangePicker
                    className='form__content-calendar'
                    ranges={[selectionRange]}
                    editableDateInputs={true}
                    scroll={{ enabled: true }}
                    onChange={onSelection}
                    minDate={new Date()}
                    />
                </div>   
                <div className="form__button">
                    <button id='cancel' data-dismiss="modal" onClick={handleClose} className="form__button-button">Too Scared?</button>
                    <button className="form__button-button" onClick={onSubmit} type="submit">Get Scared!</button>
                </div>
           </div>
       </form>
    )
}

export default CreateUserHaunting;