import { useState } from 'react';

import  {Modal}  from '../context/Modal';
import SignupForm from './SignUpForm';

const SignupFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='navbar__button' onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </>
    );
};

export default SignupFormModal;