import React, {useContext} from 'react';
import "./Modal.css";
import { LoaderContext } from "../../context/LoaderContext";


function Modal(props) {
    const { setLoaderC } = useContext(LoaderContext);

    const conModal = () =>{
        props.delEnd();
        props.setOpenModal(false);
    }
    
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            props.setOpenModal(false);
                            setLoaderC(false);
                        }}
                    >
                       
                    </button>
                </div>
                <div className="modalTitle">
                    <p>{props.title}</p>
                </div>
                <div className="modalFooter">
                    <button
                        onClick={() => {
                            props.setOpenModal(false);
                            setLoaderC(false);
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