import { useState, useContext } from 'react';
import { posdarUrlInstance } from "../../axios";
import { BannerContext } from "../../BannerContext";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './SaveTaskForm.css';

function SaveTaskForm() {
    const [formData, setFormData] = useState([]);
    const [wordsList, setWordsList] = useState([]);
    const [inputList, setInputList] = useState([""]);
    const [loaderOpen, setLoaderOpen] = useState(false);
    const { message, setMessage } = useContext(BannerContext);

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
        setLoaderOpen(true);
        const response = await posdarUrlInstance.post('/register', formData, {
            headers: {
                "x-api-key": formData.apiKey,
                "user-name": formData.userName
            }
        }).catch((err) => {
            setMessage(["#ff5e5e", "Something went wrong"]);
        });

        if (response) {
            handleReset();
            if (response.status === 200) {
                setMessage(["#e48ff1", response.data.message]);
            } else {
                setMessage(["darkgray", response.data.message]);
            }
        }
        setLoaderOpen(false);
    }

    const handleReset = () => {
        Array.from(document.querySelectorAll("#saveTasksForm input")).forEach(
          input => (input.value = "")
        );
        setFormData([]);
      };

    return (
        <form id="saveTasksForm" onSubmit={saveTask}>
            <h2>Add task</h2>
            <input name="userName" placeholder="User name" onChange={handleInputs} required></input>

            <input name="group" placeholder="Group ID" onChange={handleInputs} required></input>

            <input name="apiKey" placeholder="Api key" onChange={handleInputs} required></input>

            <input name="email" placeholder="Email" onChange={handleInputs} required></input>

            <input name="time" placeholder="Time between requests" onChange={handleInputs} disabled></input>

            <h4>What to look for?</h4>

            <div id="add-text-div">
                <p> Add another text </p>
                <button type="button" onClick={addInput}>+</button>
            </div>
            <p id="must">* accepts letters or numbers</p>
            {inputList.map((x, i) => {
                return (
                    <input name={"text" + (i + 1)} placeholder={"Text " + (i + 1)} key={i} onChange={e => handleWordsList(e, i)}></input>
                );
            })}

            <br></br>
            <button type="submit" id="submitButton"> 
                     <Loader 
                        visible={loaderOpen}
                        type="TailSpin"
                        color="#000000"
                        height={20}
                        width={20}
                        timeout={3000}
                        style={{display: "inline", marginRight: "12px"}}
                     />  
                     Save
            </button>
        </form>

    );
}

export default SaveTaskForm;