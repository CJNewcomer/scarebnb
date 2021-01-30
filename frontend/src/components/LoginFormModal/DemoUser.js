import { useDispatch } from 'react-redux';

import { demoLogin } from '../../store/session';
import './LoginForm.css';

const DemoUser = () => {
    const dispatch = useDispatch();

    const loginDemoUser = async () => {
        dispatch(demoLogin());
    };
    return (
        <div className='form__button'>
            <button className='form__button-submit' type="submit" onClick={loginDemoUser}>Demo User</button>
        </div>
    )
}

export default DemoUser;