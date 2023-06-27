import TaskDictionary from "./../../utility/TaskDictionary"; 
import Task from "./../TaskComp/TaskComp"; 
import {useState} from 'react'; 
import "./RightTaskBar.css"; 

import AddTaskForm from "../AddTaskForm/AddTaskForm";


export default function RightTaskBar() {

    let [date, setDate] = useState(TaskDictionary.convertDate(new Date(Date.now()))); 

    // Placeholder, need function to force re-render when tasklist is updated 
    let [placeholder, updateTasks] = useState(1);

    //Sets date based on when date clicked using custom event fired in day.js

    document.addEventListener("focusDateChange", (event) =>
    setDate(TaskDictionary.convertDate(event.detail.date))); 

    document.addEventListener("updatedTasks", (event) => {
        // Inputted 0 irrelevant, just needed to force re-render
        updateTasks(Math.random()); 
    }); 

    // date is in the form of int key for dictionary, NOT date object 

    let taskList = TaskDictionary.getTasks(date); 

    
    if(taskList == null) return ( 
        <div id="right-tb-position">
            
            <p id="taskbar-title"> 
                {TaskDictionary.revertDate(date).toString().substring(0, 15)} 
            </p>
            

            <AddTaskForm trigger={
                <button id="rtb-add-button">
                    <i className="fa fa-plus"></i>
                </button>
            }           
            date={date}></AddTaskForm>

        </div>
   ); 


    return (
        // Task Refers to TaskComp, not utility class. Utility class not directly needed 
        // in this context

        <div id="right-tb-position">
            <table>
                <thead id="taskbar-title">
                     {TaskDictionary.revertDate(date).toString().substring(0, 15)}
                </thead>

                <tbody>

                    <Task task = {taskList[0]} rtb = {true}></Task>
                    <Task task = {taskList[1]} rtb = {true}></Task>
                    <Task task = {taskList[2]} rtb = {true}></Task>
                    <Task task = {taskList[3]} rtb = {true}></Task>
                    <Task task = {taskList[4]} rtb = {true}></Task>
                    <Task task = {taskList[5]} rtb = {true}></Task>
                    <Task task = {taskList[6]} rtb = {true}></Task>
                    <Task task = {taskList[7]} rtb = {true}></Task>
                    <Task task = {taskList[8]} rtb = {true}></Task>
                    <Task task = {taskList[9]} rtb = {true}></Task>

                </tbody>
             
            </table>

            <AddTaskForm trigger={
                <button id="rtb-add-button">
                    <i className="fa fa-plus"></i>
                </button>
            }           
            date={date}></AddTaskForm>
            
        </div>
    );
}