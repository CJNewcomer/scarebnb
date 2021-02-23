import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateRangePicker } from 'react-date-range'
import {userHauntingCreate} from '../../store/userHauntings'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const UserHaunting = ({handleClose}) => {
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
        return dispatch(userHauntingCreate({sessionUser, bookingStartDate, bookingEndDate})).then(handleClose()).catch(
            (res) => {
                if (res.data && res.data.errors) setErrors(res.data.errors);
            }
        );
    }


    return (
        <form className='form__container'>
            <div className='form__content'>
                <h3 className='form__title'>Dare to Book?</h3>
                <ul className='error-list'>
                    {errors.map((error) => <li key={error}>{error}</li>)}
                </ul>
                <div className='form__input'>
                    <DateRangePicker 
                    className='form__calendar'
                    ranges={[selectionRange]}
                    editableDateInputs={true}
                    scroll={{ enabled: true }}
                    onChange={onSelection}
                    minDate={new Date()}
                    />
                </div>
                <div className='form__button-container'>
                    <button data-dismiss="modal" onClick={handleClose} className='form__button'>Too Scared?</button>
                    <button className='form__button' onClick={onSubmit} type="submit">Ready For A Fright!</button>
                </div>
            </div>
        </form>
    )
}

export default UserHaunting;