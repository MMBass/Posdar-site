import React, { useEffect, useState } from 'react';
import './TaskCard.css';

function TaskCard(props) {
    
    return (
        <div className="TaskCard">

            {props.group
                ? <>
                    <p>Group: {props.group}</p>
                    <p>Text:</p>
                    {props.text.map(t => {
                        return <p> {t}</p>
                    })}
                    <p>User: {props.user}</p>
                    <small>Email: {props.email}</small>
                    <small>Task-id: {props._id}</small>
                    <button className="dl-btn">DELETE</button>
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