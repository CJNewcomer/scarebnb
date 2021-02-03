import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { userHauntingCreate } from '../../store/userHauntings';
import PeopleIcon from "@material-ui/icons/People";
import "./BookingDates.css"

function BookingDates() {
    const [ bookingStartDate, setBookingStartDate ] = useState(new Date());
    const [ bookingEndDate, setBookingEndDate ] = useState(new Date());
    const [ errors, setErrors ] = useState([]);

    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    
    const selectionRange = {
        bookingStartDate: bookingStartDate,
        bookingEndDate: bookingEndDate,
        key: 'selection',
    };

    function handleSelect(ranges) {
        setBookingStartDate(ranges.selection.bookingStartDate);
        setBookingEndDate(ranges.selection.bookingEndDate);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(userHauntingCreate({ sessionUser, bookingStartDate, bookingEndDate }))
    }

    return (
        <form className='book__user-haunting'>
            <ul className='error-list'>
                {errors.map((error) => <li key={error}>{error}</li>)}
            </ul>
            <div className="date__container">
                <DateRangePicker 
                ranges={[selectionRange]} 
                editableDateInputs={true}
                scroll={{enabled:true}}
                onChange={handleSelect}
                minDate={new Date()} 
                /> 
                    <h2>
                        Number of victims <PeopleIcon />
                    </h2>
                    <input min={0} defaultValue={2} type="number" />
                    <button className='form__button-submit' onClick={onSubmit} type='submit' >Book...if you dare</button>
            </div>
        </form>
    )
}
export default BookingDates;
