import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

const ProfileButton = ({user}) => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <button onClick={openMenu} style={{marginRight: '30px'}}>
                <i className="fas fa-bars" />
            </button>
            {showMenu && (
                <ul className="profile-dropdown" style={{marginRight: '10px'}}>
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <button onClick={logout}>Log Out</button>
                </ul>
            )}
        </>
    );
}

export default ProfileButton;