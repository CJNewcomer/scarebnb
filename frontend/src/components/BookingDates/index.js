import { useState } from 'react'
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import "./BookingDates.css"

function BookingDates() {
    const [ bookingStartDate, setBookingStartDate ] = useState(new Date());
    const [ bookingEndDate, setBookingEndDate ] = useState(new Date());
    // const history = useHistory();
    
    const selectionRange = {
        bookingStartDate: bookingStartDate,
        bookingEndDate: bookingEndDate,
        key: 'selection',
    };

    function handleSelect(ranges) {
        setBookingStartDate(ranges.selection.bookingStartDate);
        setBookingEndDate(ranges.selection.bookingEndDate);
    }

    return (
        <div className="date__container">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} /> 
                <h2>
                    Number of victims <PeopleIcon />
                </h2>
                <input min={0} defaultValue={2} type="number" />
                <Button>Search scarebnb</Button>
        </div>
    )
}
export default BookingDates;

// onClick={() => history.push('/search')}