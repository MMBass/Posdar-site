import React, { useContext } from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './TaskCard.css';
import { LoaderContext } from "../../context/LoaderContext";
import { RiDeleteBin5Fill } from 'react-icons/ri';

function TaskCard(props) {
    const { LoaderC, setLoaderC } = useContext(LoaderContext);

    const delTask = () => {
            let at = window.localStorage.getItem("at");
            if (at) {
                setLoaderC(props._id);
                props.delTask(props._id);
            }       
            if (!at) console.error("ls item missing. please login again");
    }

    return (
        <div className="TaskCard">

            {props.group
                ? <>
                    <p>Group:</p>
                    <small>   {props.group}</small>
                    <p>Text:</p>
                    {props.text.map(t => {
                        return <small className="txt">{t}</small>
                    })}
                    <p>Email:</p> 
                    <small>  {props.email}</small>
                    <p>Task-id:</p>
                    <small>   {props._id}</small>
                    <button className="dl-btn" onClick={() => delTask()} >
                        <Loader 
                        visible={LoaderC === props._id}
                        type="TailSpin"
                        color="#000"
                        height={20}
                        width={20}
                        timeout={3000}
                        style={{display: "inline", marginRight: "12px"}}
                        /> <RiDeleteBin5Fill></RiDeleteBin5Fill> </button>
                </>
                : 
                <>
                    <div className="emptyCard">
                        <small></small>
                        <small></small>
                        <small></small>
                        <small></small>
                        <small></small>
                      
                    </div>
                </>
            }
        </div>
    );
};

export default TaskCard;