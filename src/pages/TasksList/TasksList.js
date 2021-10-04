import React, { useEffect, useState, useContext } from 'react';
import { posdarUrlInstance } from "../../axios";
import GetTasksForm from "../../components/GetTasksForm/GetTasksForm";
import TaskCard from '../../components/TaskCard/TaskCard';
import {BannerContext} from "../../BannerContext";
import './TasksList.css';

function TasksList() {
    const [tasks, setTasks] = useState([]);
    const {message, setMessage} = useContext(BannerContext);

    useEffect(async () => {
        let at = window.localStorage.getItem("at");
        if (at.length > 1) {
            const response = await posdarUrlInstance.get('/register', { headers: {"at":at} }).catch((err) => {
                console.log(err);
                setMessage(["#ff5e5e", "Something went wrong"]);
            });

            if (response.data.tasks) {
                setTasks(response.data.tasks);
            }
        }
    });

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
                    ></TaskCard>
                ))}
            </div>)
        }
    }

    return (ifTasks());
};

export default TasksList;