import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal'; 
import SignUpFormModal from '../SignupFormModal';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    
    if (sessionUser) {
        sessionLinks = (
            <div>
                <ProfileButton user={sessionUser} />
            </div>
        );
    } else {
            <li>
                <NavLink className='.nav-bar__home' exact to='/'>
                   <i class="fas fa-house-damage" />
                </NavLink>
            </li>

        sessionLinks = (
            <div>
                <ul className='nav-bar__links'>
                    <LoginFormModal /> 
                    <SignUpFormModal />
                </ul>
            </div>    
        );
    }

    return (
        <nav className='nav__container'>
            <ul className='nav__links'>
                <div className='nav__container'>
                    
                    {isLoaded && sessionLinks}
                        
                </div>
            </ul>        
        </nav>
    );    
}

export default Navigation;