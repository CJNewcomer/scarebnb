import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './SignupForm.css';
import {signup} from '../../store/session';

function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (password === confirmPassword) {
      return dispatch(signup({ email, username, password }))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form className='form__signup' onSubmit={handleSubmit}>
        <div className='form__container'>
            <ul className='error-list'>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <div className='form__input'>
                <label>
                    Email
                    <input
                    className="form__input-text"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </label>
            <div className="form__input">
                <label>
                    Username
                    <input
                    className="form__input-text"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    />
                </label>
            </div>
            <div className="form__input">
                <label>
                    Password
                    <input
                    className="form__input-text"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </label>
            </div>
            <div className="form__input">
                <label>
                    Confirm Password
                    <input
                    className="form__input-text"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder='Confirm password'
                    />
                </label>
            </div>
            </div>
            <div className='form__button'>
                <button className='form__button-submit' type="submit">Sign Up</button>
            </div>    
        </div>    
    </form>
  );
}

export default SignupForm;