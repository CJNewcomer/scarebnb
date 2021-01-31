import React from 'react';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal'; 
import SignUpFormModal from '../SignupFormModal';
import SearchBar from '../SearchBar';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    
    if (sessionUser) {
        sessionLinks = <ProfileButton user={sessionUser} />;
    } else {
        sessionLinks = (
            <li className='navbar__right-container'>
                <ul className='navbar__links'>
                    <div>
                         <LoginFormModal /> 
                    </div>
                    <div>
                        <SignUpFormModal />
                    </div>
                </ul>
                <div className='navbar__middle-container'>
                    <SearchBar />
                </div>
            </li>
        );
    }

    return (
        <>
            <nav className='navbar__left-container'>
                <ul className='navbar__right'>
                    <div className='navbar__wrapper'>
                        <li className='navbar__home'>
                            <a href='/'>Home</a>
                        </li>
                    </div>
                        {isLoaded && sessionLinks}
                </ul>
            </nav>
        </>        
    );    
}

export default Navigation;