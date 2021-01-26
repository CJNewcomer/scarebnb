

function HauntingProfile({ imgPath, locationName, city, state, country, description, price}) {
    return (
        <div className='card'>
            <img src={imgPath} alt=""/>
            <div className='card-info'>
                <h2>{locationName}</h2>
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