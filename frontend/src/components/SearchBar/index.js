import { useHistory } from 'react-router-dom';

import { useSearchContext } from '../context/SearchContext';

import './SearchBar.css';

const SearchBar = () => {
    const history = useHistory();

    const {input, setInput} = useSearchContext();

    const onSearch = (e) => {
        e.preventDefault();
        history.push(`/search?result1=${input}`)
    };

    return (
        <div className='search__container'>
            <form onSubmit={onSearch}>
                <input type='search' value={input} onChange={e => setInput(e.target.value)} placeholder='Search...if you dare' className='search__text'/>
            </form>
        </div>
    )
}

export default SearchBar;