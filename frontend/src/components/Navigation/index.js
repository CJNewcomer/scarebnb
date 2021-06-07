import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import CreateUserHauntingModal from '../UserHaunting/CreateUserHauntingModal'
import LoginFormModal from '../LoginFormModal'; 
import SignUpFormModal from '../SignupFormModal';
import SearchBar from '../SearchBar';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    
    if (sessionUser) {
        sessionLinks = (
            <>
                <CreateUserHauntingModal />
                <ProfileButton user={sessionUser} />
            </>
        );
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
                    {/* <SearchBar /> */}
                </div>
            </li>
        );
    }

    return (
        <>
            <nav className='navbar__left-container'>
                <div className='navbar__wrapper'>
                        <li className='navbar__home'>
                            <NavLink exact to='/'>
                                <h1 style={{ marginLeft: '1.5rem'}}>scarebnb</h1>
                            </NavLink>
                        </li>
                </div>
                <SearchBar />
                {isLoaded && sessionLinks}
            </nav>
        </>        
    );    
}

export default Navigation;