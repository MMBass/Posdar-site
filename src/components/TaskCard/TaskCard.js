import React, { useState, useContext } from 'react';
import { posdarUrlInstance } from "../../axios";
import { BannerContext } from "../../BannerContext";
import { ModalContext } from "../../ModalContext";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './TaskCard.css';

function TaskCard(props) {
    const [taskEnd, setTaskEnd] = useState(false);
    const [loaderOpen, setLoaderOpen] = useState(false);
    const { message, setMessage } = useContext(BannerContext);
    const { modal, setModal } = useContext(ModalContext);

    const delTask = async () => {
        props.setOpenModal(true);
        if(modal){
            let at = window.localStorage.getItem("at");
            if (at) {
                    setLoaderOpen(true);
                    const response = await posdarUrlInstance.delete('/register',
                        {
                            headers: {
                                "t-id": props._id,
                                "x-access-token": at
                            }
                        }).catch((err) => {
                            setMessage(["#ff5e5e", "Something went wrong"]);
                        });
        
                    if (response) {
                        if (response.status == 200) {
                            setMessage(["#ff5e5e", "Deleted"]);
                            setTaskEnd(true);
                        }
                    }
            }
            if (!at) console.log("ls item missing. please login again");
            setLoaderOpen(true);
        }
    }

    if (taskEnd === true) {
        return null;
    }

    return (
        <div className="TaskCard">

            {props.group
                ? <>
                    <p>Group: {props.group}</p>
                    <p>Text:</p>
                    {props.text.map(t => {
                        return <small className="txt">{t}</small>
                    })}
                    <small>Email: {props.email}</small>
                    <small>Task-id: {props._id}</small>
                    <button className="dl-btn" onClick={() => delTask()}>
                        <Loader 
                        visible={loaderOpen}
                        type="TailSpin"
                        color="#000000"
                        height={20}
                        width={20}
                        timeout={3000}
                        style={{display: "inline", marginRight: "12px"}}
                        />  DELETE</button>
                </>
                : <>
                    <div className="emptyCard">
                        <p></p>
                        <p></p>
                        <p></p>
                        <small></small>
                        <small></small>
                    </div>
                </>
            }
        </div>
    );
};

export default TaskCard;