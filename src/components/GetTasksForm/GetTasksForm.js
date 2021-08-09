import { useState,useContext } from 'react';
import {posdarUrlInstance} from "../../axios";
import {BannerContext} from "../../BannerContext";
import './GetTasksForm.css';

function GetTasksForm(props) {
    const [formData, setFormData] = useState([]);
    const [formEnd, setFormEnd] = useState(false);
    const {message, setMessage} = useContext(BannerContext);
    
    const handleInputs = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const getTasks = async (e) => {
        e.preventDefault();
        const response = await posdarUrlInstance.post('/list', formData).catch((err) => {
            console.log(err)
            setMessage(["#ff5e5e","Something went wrong"]);
        });
        
        if(response){
           props.setFatherTasks(response.data.tasks);
           setFormEnd(true);
        }
    }

    if(formEnd){
        return null;
    }

    return (
        <form id="getTasksForm" onSubmit={getTasks}>
            <h4>*You must be connected to see the your tasks</h4>
            <input name="userName" placeholder="User name" onChange={handleInputs}></input>

            <input name="token" placeholder="Api key" onChange={handleInputs}></input>

            <br></br>
            <button type="submit" id="getButton">Get</button>
        </form>

    );
}

export default GetTasksForm;