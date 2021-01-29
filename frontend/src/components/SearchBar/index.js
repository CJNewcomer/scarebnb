const SearchBar = (props) => {
    return (
        <input type='search'
        className='search'
        placeholder={props.placeholder}
        onChange = {props.handleChange} />
    )
}

export default SearchBar;