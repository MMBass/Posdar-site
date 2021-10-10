import React, { useEffect, useState, useContext } from 'react';
import { posdarUrlInstance } from "../../axios";
import GetTasksForm from "../../components/GetTasksForm/GetTasksForm";
import TaskCard from '../../components/TaskCard/TaskCard';
import Modal from '../../components/Modal/Modal';
import {BannerContext} from "../../BannerContext";
import './TasksList.css';

function TasksList(props) {
    const [tasks, setTasks] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const {message, setMessage} = useContext(BannerContext);

    useEffect(async () => {
        let at = window.localStorage.getItem("at");
        if (at) {
            setTasks([" "]);
            const response = await posdarUrlInstance.get('/register', { headers: {"x-access-token":at} }).catch((err) => {
                console.log(err);
                setTasks([]);
                setMessage(["#ff5e5e", "Something went wrong"]);
                window.localStorage.removeItem("at");
            });

            if (response) {
                setTasks(response.data.tasks);
            }
        }
    },[]);

    const ifTasks = () => {
        if (!tasks[0]) {
            return (
                <div id="TasksList">
                    <h2>Your Saved Tasks</h2>
                    <GetTasksForm setFatherTasks={setTasks}></GetTasksForm> 
                    <TaskCard></TaskCard>
                </div>)
        }
        if (tasks[0]) {
            return (<div id="TasksList">
                <h2>Your Saved Tasks</h2>
                {tasks.map((task) => (
                    <TaskCard
                        key={task._id}
                        _id={task._id}
                        date={task.date}
                        group={task.group}
                        email={task.email}
                        text={task.text}
                        setOpenModal={setModalOpen}
                    ></TaskCard>
                ))}
                { modalOpen && <Modal setOpenModal={setModalOpen} title={"Are You Sure?"}/>}
            </div>)
        }
    }

    return (ifTasks());
};

export default TasksList;