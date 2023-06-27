import TaskDictionary from "./../../utility/TaskDictionary"; 
import Task from "./../TaskComp/TaskComp"; 
import "./LeftTaskBar.css"; 
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import {useState} from 'react'; 

export default function LeftTaskBar() {



    
   // Placeholder, need function to force re-render when tasklist is updated 
   let [placeholder, updateTasks] = useState(1);

   //Sets date based on when date clicked using custom event fired in day.js
   document.addEventListener("updatedTasks", (event) => {
    // Inputted 0 irrelevant, just needed to force re-render
    updateTasks(Math.random()); 
}); 

    let taskList = []; 

    //Should get you nearest dates in chronological order

    
    for(let task of TaskDictionary.array) {
        if(taskList.length < 10) taskList.push(task);
        else break;  
    }

    
    if(taskList == null) return ( 
        <div>
            <p id="taskbar-title"> 
                TODO:
            </p>
        </div>
   ); 


    return (
        // Task Refers to TaskComp, not utility class. Utility class not directly needed 
        // in this context

        <div id="left-tb-position">
            <table>
                <thead id="taskbar-title">
                     TODO: 
                </thead>

                <tbody id="ltb-body">

                    <Task task = {taskList[0]} ></Task>
                    <Task task = {taskList[1]} ></Task>
                    <Task task = {taskList[2]} ></Task>
                    <Task task = {taskList[3]} ></Task>
                    <Task task = {taskList[4]} ></Task>
                    <Task task = {taskList[5]} ></Task>
                    <Task task = {taskList[6]} ></Task>
                    <Task task = {taskList[7]} ></Task>
                    <Task task = {taskList[8]} ></Task>
                    <Task task = {taskList[9]} ></Task>

                </tbody>
             
            </table>

            <AddTaskForm trigger={
                <button id="ltb-add-button">
                    <i className="fa fa-plus"></i>
                </button>
            }           
            ></AddTaskForm>
        </div>
    );
}