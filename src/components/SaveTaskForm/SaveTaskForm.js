import { useState,useContext } from 'react';
import {posdarUrlInstance} from "../../axios";
import {BannerContext} from "../../BannerContext";
import './SaveTaskForm.css';

function SaveTaskForm() {
    const [formData, setFormData] = useState([]);
    const [wordsList, setWordsList] = useState([]);
    const [inputList, setInputList] = useState([""]);
    const {message, setMessage} = useContext(BannerContext);

    const addInput = () => {
        setInputList([...inputList, ""]);
    };

    const handleInputs = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleWordsList = (e, i) => {
        const newList = wordsList;
        newList[i] = e.target.value;
        setWordsList(newList);
        setFormData({ ...formData, text: wordsList });
    }

    const saveTask = async (e) => {
        e.preventDefault();
        const response = await posdarUrlInstance.post('/register',{
            headers:{
                "token":formData.token
            }},
            formData)
            .catch((err) => {
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
        <form id="saveTasksForm" onSubmit={saveTask}>
            <h2>Add task</h2>
            <input name="userName" placeholder="User name" onChange={handleInputs}></input>

            <input name="email" placeholder="Email" onChange={handleInputs}></input>

            <input name="group" placeholder="Group ID" onChange={handleInputs}></input>

            <input name="token" placeholder="Api key" onChange={handleInputs}></input>

            <input name="time" placeholder="Time between requests" onChange={handleInputs} disabled></input>

            <h4>Word/s to search:</h4>

            <div id="add-text-div">
                <p> Add another text </p>
                <button type="button" onClick={addInput}>+</button>
            </div>
            <p id="must">*must contain only letters or numbers</p>
            {inputList.map((x, i) => {
                return (
                    <input name={"text" + (i + 1)} placeholder={"Text " + (i + 1)} key={i} onChange={e => handleWordsList(e, i)}></input>
                );
            })}

            <br></br>
            <button type="submit" id="submitButton">Save</button>
        </form>

    );
}

export default SaveTaskForm;