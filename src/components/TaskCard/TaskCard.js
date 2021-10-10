import React, { useContext } from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './TaskCard.css';
import { LoaderContext } from "../../context/LoaderContext";

function TaskCard(props) {
    const { LoaderC, setLoaderC } = useContext(LoaderContext);

    const delTask = () => {
            let at = window.localStorage.getItem("at");
            if (at) {
                setLoaderC(true);
                props.delTask(props._id);
            }       
            if (!at) console.error("ls item missing. please login again");
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
                        visible={LoaderC}
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