import React, { useState, useContext } from 'react';
import { posdarUrlInstance } from "../../axios";
import { BannerContext } from "../../BannerContext";
import './TaskCard.css';

function TaskCard(props) {
    const [taskEnd, setTaskEnd] = useState(false);
    const { message, setMessage } = useContext(BannerContext);

    const delTask = async () => {
        let at = window.localStorage.getItem("at");
        if (at.length > 1) {
            const response = await posdarUrlInstance.delete('/register',
                {
                    headers: {
                        "t_id": props._id,
                        "at": at
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
                    <button className="dl-btn" onClick={() => delTask()}>DELETE</button>
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