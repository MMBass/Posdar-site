import React, { useContext } from 'react';
import "./Modal.css";
import { ModalContext } from "../../ModalContext";

function Modal(props) {
    const { modal, setModal } = useContext(ModalContext);
    
    const conModal = () =>{
        setModal(true);
        props.setOpenModal(false);
    }
    
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            props.setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="modalTitle">
                    <p>{props.title}</p>
                </div>
                <div className="modalFooter">
                    <button
                        onClick={() => {
                            props.setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                           conModal();
                        }}>
                        Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;