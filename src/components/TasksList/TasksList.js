import React, {  useEffect, useState } from 'react';
import GetTasksForm from "../GetTasksForm/GetTasksForm";
import TaskCard from '../TaskCard/TaskCard';
import './TasksList.css';

function TasksList() {
  
  useEffect(()=>{

  });

  return (
    <div id="TasksList">
        <h2>Your Saved Tasks</h2>
         <GetTasksForm></GetTasksForm>
         <TaskCard></TaskCard>
    </div>
  );// todo context for auth tohide the form after auth;
};

export default TasksList;