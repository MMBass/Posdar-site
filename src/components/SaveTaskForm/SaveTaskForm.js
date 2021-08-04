import { useState } from 'react';
import {localhostInstance} from "../../axios";
import './SaveTaskForm.css';

function SaveTaskForm() {
    const [formData, setFormData] = useState([]);
    const [wordsList, setWordsList] = useState([]);
    const [inputList, setInputList] = useState([""]);

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
        const response = await localhostInstance.post('/register', formData).catch((err) => {
            console.log(err)
            // setAlert("Something went wrong");
        });

        if (response) {
            // setAlert(response.data);
            // "Task Added sucsseccfully"// TODO add message to server response;
        }
    }

    return (
        <form onSubmit={saveTask}>
            <h3>Add task</h3>
            <input name="userName" placeholder="User name" onChange={handleInputs}></input>

            <input name="email" placeholder="Email" onChange={handleInputs}></input>

            <input name="group" placeholder="Group ID" onChange={handleInputs}></input>

            <input name="token" placeholder="Api key" onChange={handleInputs}></input>

            <input name="time" placeholder="Time between requests" onChange={handleInputs} disabled></input>

            <h4>Word/s to search:</h4>

            <div id="add-text-div">
                <p> add another text </p>
                <button type="button" onClick={addInput}>+</button>
            </div>
            {inputList.map((x, i) => {
                return (
                    <input name={"text" + (i + 1)} placeholder={"Text " + (i + 1)} key={i} onChange={e => handleWordsList(e, i)}></input>
                );
            })}

            <br></br>
            <br></br>
            <br></br>
            <button type="submit">Save</button>
        </form>

    );
}

export default SaveTaskForm;