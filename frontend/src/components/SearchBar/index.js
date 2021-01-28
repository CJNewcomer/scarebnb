import { useHistory, useState } from 'react-router-dom';
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import "./SearchBar.css"

function SearchBar() {
    const history = useHistory();
    const [ bookingStartDate, setBookingStartDate ] = useState(new Date());
    const [ bookingEndDate, setBookingEndDate ] = useState(new Date());
    
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
        <div className="search__container">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} /> 
                <h2>
                    Number of victims <PeopleIcon />
                </h2>
                <input min={0} defaultValue={2} type="number" />
                <Button onClick={() => history.push('/search')}>Search scarebnb</Button>
        </div>
    )
}
export default SearchBar;