import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import './LoginForm.css';

const LoginForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch((res) => {
            if (res.data && res.data.errors) setErrors(res.data.errors);
            });
    }

    return (
        <form className='form__login' onSubmit={handleSubmit}>
            <div className='form__content'>
                <ul className='error-list'>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className='form__input'>
                    <label>
                    Username or Email
                    <input
                        className='form__input-text'
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    /> <br></br>
                    </label>
                </div>
                <div className='form__input'>
                    <label>
                    Password
                    <input
                        className='form__input-text'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </label>
                </div>
                <div className='form__button'>
                    <button className='form__button-submit' type="submit">Log In</button>
                </div>
            </div>
        </form>
    );
}

export default LoginForm;