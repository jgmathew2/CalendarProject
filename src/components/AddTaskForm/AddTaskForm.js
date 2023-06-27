import Popup from 'reactjs-popup'; 
import TaskDictionary from '../../utility/TaskDictionary';
import Task from '../../utility/Task';

import {useState} from 'react'; 

export default function AddTaskForm(props) {


    const [taskData, setData] = useState({date: props.date, todo: "", time: ""});

    return (
        
        <Popup trigger={props.trigger}>

            <form>
                <label for="task_input">Description:</label>
                <input type="text" id="task_input"
                    onChange={
                        (e) => {
                            setData({...taskData, todo: e.target.value}); 
                        }
                    }></input>

                <br></br>

                <label for="date_input" hidden={props.date != null} >Due Date (D/M/Yr):</label>
                <input type="text" id="date_input" hidden={props.date != null} 
                    onChange={
                        (e) => {
                            setData({...taskData, date: e.target.value}); 
                        }
                    }
                ></input>

                <br></br>

                <label for="time_input" >Schedule:</label>
                <input type="text" id="time_input" 
                    onChange={
                        (e) => {
                            
                            setData({...taskData, time: e.target.value}); 
                        }
                    }></input>

            </form>

            <button onClick={getFormData}> Submit: </button>

        </Popup>

    ); 

    function getFormData() {

        if(taskData.todo.trim() == "") return; 

        if(props.date != null) taskData.date = props.date; 

        let task = new Task(taskData.date, taskData.todo, taskData.time); 

        TaskDictionary.addTask(taskData.date, task); 
    }
}