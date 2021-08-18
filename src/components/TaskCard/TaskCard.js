import React, { useState, useContext } from 'react';
import { posdarUrlInstance } from "../../axios";
import { BannerContext } from "../../BannerContext";
import './TaskCard.css';

function TaskCard(props) {
    const [taskEnd, setTaskEnd] = useState(false);
    const { message, setMessage } = useContext(BannerContext);

    const delTask = async () => {
        const response = await posdarUrlInstance.delete('/register',
            {
                headers: {
                    "t_id": props._id,
                    // "token":"token"
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
                        return <p>{t}</p>
                    })}
                    <p>User: {props.user}</p>
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
                        <button className="dis-btn" disabled>DELETE</button>
                    </div>
                </>
            }
        </div>
    );
};

export default TaskCard;