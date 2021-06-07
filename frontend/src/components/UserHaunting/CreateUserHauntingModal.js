import { useState } from 'react';
import { Modal } from '../context/Modal';

import UserHaunting from './index'


const CreateUserHauntingModal = () => {
    const [ showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);

    return (
        <>
            <button
            onClick={() => {setShowModal(true)}}>
                Ready For a Fright!
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <UserHaunting handleClose={handleClose} />
                </Modal>
            )}
        </>
    )
}


export default CreateUserHauntingModal;