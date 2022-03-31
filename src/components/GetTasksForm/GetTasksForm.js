import { useState, useContext } from 'react';
import { posdarUrlInstance } from "../../axios";
import { BannerContext } from "../../context/BannerContext";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './GetTasksForm.css';

function GetTasksForm(props) {
    const [formData, setFormData] = useState([]);
    const [formEnd, setFormEnd] = useState(false);
    const [loaderOpen, setLoaderOpen] = useState(false);
    const { message, setMessage } = useContext(BannerContext);

    const handleInputs = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const getTasks = async (e) => {
        setLoaderOpen(true);
        e.preventDefault();
        const response = await posdarUrlInstance.get('/register', { headers: formData }).catch((err) => {
            setMessage(["#ff5e5e", err.message || "Something went wrong"]);
            setLoaderOpen(false);
        });

        if (response) {
            props.setFatherTasks(response.data.tasks);
            if (response.headers["access-token"]) {
                window.localStorage.setItem("at", response.headers["access-token"]);
            }
            setFormEnd(true);
            setLoaderOpen(false);
        }
        setLoaderOpen(false);
    }

    if (formEnd) {
        return null;
    }

    return (
        <form id="getTasksForm" onSubmit={getTasks}>
            <h4>*You must be connected to see your tasks</h4>
            <input name="user-name" placeholder="User name" onChange={handleInputs}></input>

            <input name="x-api-key" placeholder="Api key" onChange={handleInputs}></input>

            <br></br>
            <button type="submit" id="getButton">
                <Loader
                    visible={loaderOpen}
                    type="TailSpin"
                    color="#000000"
                    height={20}
                    width={20}
                    timeout={3000}
                    style={{ display: "inline", marginRight: "12px" }}
                />
                Get
            </button>
        </form>

    );
}

export default GetTasksForm;