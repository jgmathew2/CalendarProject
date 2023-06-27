import Day from "./../Day/Day"; 
import TaskDictionary from "./../../utility/TaskDictionary"; 
import "./TaskComp.css"; 

export default function TaskComp(prop) {

    if(prop.task == null) return; 

    let task = prop.task; 

    if(prop.rtb == null) {
    
        var date= TaskDictionary.revertDate(task.date); 
    }

    return (
        <div id="button-row">
            <div id="task-comp">
                <p id="description">{task.todo}</p>


                <div id="day_styling" >
                    <Day date={date} taskComp={true} ></Day>
                </div>
            </div>

            <button id = "remove-button" onClick={ () => {
                TaskDictionary.removeTask(prop.task);
            }
            }>
                <i className="fa fa-minus"></i>
            </button>
        </div>

    )
}