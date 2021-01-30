import React from 'react';
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
            <div className='.navbar__home'>
                <a className='home' href='/'>
                    <i class="fas fa-house-damage"></i>
                </a>
            </div>

        sessionLinks = (
            <>
                <div className='navbar__login'>
                        <LoginFormModal /> 
                </div>
                <div className='navbar__signup'>
                        <SignUpFormModal />
                </div> 
            </>  
        );
    }

    return (
    
        <div className='nav__container'>
            
            {isLoaded && sessionLinks}
                
        </div>       
        
    );    
}

export default Navigation;