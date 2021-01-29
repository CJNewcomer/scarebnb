import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    // if a valid session, allow user to access /login and /signup
    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div>
                <ProfileButton user={sessionUser} />
            </div>
        );
    } else {
        sessionLinks = (
            <>
                <nav className='nav-bar__log'>
                    <NavLink to="/login">Log In</NavLink>
                </nav>
                <nav className='nav-bar__sign'>
                    <NavLink to="/signup">Sign Up</NavLink>
                </nav>
            </>
        );
    }

    return (
        <>
            <div className='nav__container'>
                <nav className='nav-bar__home'>
                    <NavLink exact to="/">Home</NavLink>
                    {isLoaded && sessionLinks}
                </nav>
            </div>
        </>
        
    );    
}

export default Navigation;