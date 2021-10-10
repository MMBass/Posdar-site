import React, { useEffect, useState, useContext } from 'react';
import { posdarUrlInstance } from "../../axios";
import GetTasksForm from "../../components/GetTasksForm/GetTasksForm";
import TaskCard from '../../components/TaskCard/TaskCard';
import Modal from '../../components/Modal/Modal';
import './TasksList.css';
import { BannerContext } from "../../context/BannerContext";
import { LoaderContext } from "../../context/LoaderContext";

function TasksList(props) {
    const [tasks, setTasks] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [del_id, setDel_id] = useState('');
    const [deleted, setDeleted] = useState(false);
    const { message, setMessage } = useContext(BannerContext);
    const { LoaderC, setLoaderC } = useContext(LoaderContext);

    useEffect(async () => {
        let at = window.localStorage.getItem("at");
        if (at) {
            setTasks([" "]);
            const response = await posdarUrlInstance.get('/register', { headers: { "x-access-token": at } }).catch((err) => {
                console.log(err);
                setTasks([]);
                setMessage(["#ff5e5e", "Something went wrong"]);
                window.localStorage.removeItem("at");
            });

            if (response) {
                setTasks(response.data.tasks);
            }
        }
    }, [deleted]);

    const delStart = async (_id) => {
       setModalOpen(true);
       setDel_id(_id);
    }

    const delEnd = async ()=>{
        let at = window.localStorage.getItem("at");
        const response = await posdarUrlInstance.delete('/register',
            {
                headers: {
                    "t-id": del_id,
                    "x-access-token": at
                }
            }).catch((err) => {
                setMessage(["#ff5e5e", "Something went wrong"]);
            });

        if (response) {
            if (response.status == 200) {
                setMessage(["#ff5e5e", "Deleted"]);
                setTasks([]);
                setDel_id('');
                setDeleted(true);
                setLoaderC(false);
            }
        }
    }


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
                        delTask={delStart}
                        setOpenModal={setModalOpen}
                    ></TaskCard>
                ))}
                {modalOpen && <Modal setOpenModal={setModalOpen} delEnd={delEnd} title={"Are You Sure?"} />}
            </div>)
        }
    }

    return (ifTasks());
};

export default TasksList;