import { useState, useContext } from 'react';
import { posdarUrlInstance } from "../../axios";
import { BannerContext } from "../../context/BannerContext";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './SaveTaskForm.css';
import { IoIosSave } from 'react-icons/io';

function SaveTaskForm() {
    const [formData, setFormData] = useState([]);
    const [wordsList, setWordsList] = useState([' ']);
    const [loaderOpen, setLoaderOpen] = useState(false);
    const [disab, setDisab] = useState(false);
    const { message, setMessage } = useContext(BannerContext);

    const addInput = () => {
        setWordsList([...wordsList, " "]);
    };

    const handleInputs = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleWordsList = (del, e, i) => {
        const newList = wordsList;
        if (del) {
            newList.splice(i, 1);
        } else {
            newList[i] = e.target.value;
        }

        setWordsList(newList);
        setFormData({ ...formData, text: wordsList });
    }

    const saveTask = async (e) => {
        e.preventDefault();
        setDisab(true);
        setLoaderOpen(true);
        const response = await posdarUrlInstance.post('/register', formData, {
            headers: {
                "x-api-key": formData.apiKey,
                "user-name": formData.userName
            }
        }).catch((err) => {
            setMessage(["#F8D7DA", "Something went wrong"]);
        });

        if (response) {
            handleReset();
            if (response.status === 200) {
                setMessage(["#172B4D", response.data.message]);
            } else {
                setMessage(["darkgray", response.data.message]);
            }
        }
        setLoaderOpen(false);
        setDisab(false);
    }

    const handleReset = () => {
        Array.from(document.querySelectorAll("#saveTasksForm input")).forEach(
            input => (input.value = "")
        );
        setWordsList([' ']);
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

            <h4 className='txt-headers'>What to look for?</h4>
            <p id="must" className='txt-headers'>* accepts letters or numbers</p>

            {wordsList.map((x, i) => {
                return (
                    <div className="txt-inputs">
                        <input className="inp-txt" id={"text" + (i + 1)} name={"text" + (i + 1)} onChange={e => handleWordsList(null, e, i)} value={x}>
                        </input>
                        {i > 0 && <input type="button" className="inp-remove" value="-" onClick={e => handleWordsList(true, e, i)}></input>}
                    </div>
                );
            })}

            <br></br>
            <button id="add-text-btn" type="button" onClick={addInput}>
                <pre>+  Add another text </pre>
            </button>

            <br></br>
            <button type="submit" id="submitButton" disabled={disab}>
                <Loader
                    visible={loaderOpen}
                    type="TailSpin"
                    color="#000000"
                    height={20}
                    width={20}
                    timeout={3000}
                    style={{ display: "inline", marginRight: "12px" }}
                />
                <IoIosSave />
            </button>
        </form>

    );
}

export default SaveTaskForm;