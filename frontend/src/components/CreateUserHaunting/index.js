import React, { useState } from 'react';
import { Modal } from '../context/Modal'

import CreateUserHaunting from './CreateUserHauntingModal';

const CreateUserHauntingModal = () =>{
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);

    return (
        <>
            <button 
            className='book__now' 
            onClick={() => {setShowModal(true)}}>Book
                <i className="fas fa-book-dead"></i>Now
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateUserHaunting handleClose={handleClose}/>
                </Modal>
            )}
        </>
    )
}

export default CreateUserHauntingModal;