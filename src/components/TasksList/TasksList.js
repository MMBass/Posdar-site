import React, { useEffect, useState, useContext } from 'react';
import GetTasksForm from "../GetTasksForm/GetTasksForm";
import TaskCard from '../TaskCard/TaskCard';
import { BannerContext } from "../../BannerContext";
import './TasksList.css';

function TasksList() {
    const [tasks, setTasks] = useState([]);
    const { message, setMessage } = useContext(BannerContext);

    const ifTasksEmpty = () => {
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
                        user={task.user}
                        date={task.date}
                        group={task.group}
                        email={task.email}
                        text={task.text}
                    ></TaskCard>
                ))}
            </div>)
        }
    }

    return (ifTasksEmpty());
};

export default TasksList;