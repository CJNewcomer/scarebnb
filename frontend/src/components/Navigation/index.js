import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal'; 

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
                    <LoginFormModal />
                    <NavLink to="/signup">Sign Up</NavLink>
                </nav>
            </>
        );
    }

    return (
        <div className='nav__container'>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                        <nav className='nav-bar__home'>
                            {isLoaded && sessionLinks}
                    </nav>
                </li>    
            </ul>        
        </div>
        
    );    
}

export default Navigation;