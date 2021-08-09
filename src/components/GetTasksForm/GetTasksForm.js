import { useState,useContext } from 'react';
import {posdarUrlInstance} from "../../axios";
import {BannerContext} from "../../BannerContext";
import './GetTasksForm.css';

function GetTasksForm() {
    const [formData, setFormData] = useState([]);
    const {message, setMessage} = useContext(BannerContext);
    //todo use here the "tasks" context

    const handleInputs = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const getTasks = async (e) => {
        e.preventDefault();
        const response = await posdarUrlInstance.post('/register', formData).catch((err) => {
            console.log(err)
            setMessage(["#ff5e5e","Something went wrong"]);
        });
        
        if(response){
            if (response.status === 200) {
                setMessage(["#e48ff1",response.data.message]);
            }else{
                setMessage(["darkgray",response.data.message]);
            }
        }
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