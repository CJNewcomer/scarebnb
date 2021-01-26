

function HauntingProfile({ imgPath, locationName, address, city, state, country, price, description}) {
    return (
        <div className='spot'>
            <img src={imgPath} alt=""/>
            <div className='spot__info'>
                <h2>{locationName}</h2>
                <h3>{address}</h3>
                <h3>{city}</h3>
                <h3>{state}</h3>
                <h3>{country}</h3>
                <h4>{price}</h4>
                <h4>{description}</h4>
            </div>
        </div>
    )
}

export default HauntingProfile;