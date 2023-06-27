import "./Day.css"; 
import Notification from "../Notification/Notification";
import Calendar from "../Calendar/Calendar"; 
import TaskDictionary from "../../utility/TaskDictionary";

import {useState} from 'react'; 

function Day(props) {


    //TODO: Fix this

    if(props.date == null) return; 


    // Need this to display num notifs 
    let dateConv = TaskDictionary.convertDate(props.date); 

    //let [dayClass, setDayClass] = useState(getDayClass()); 

    let isToday = (Math.abs(props.date.getTime() - Date.now()) < 10**6); 

    function getDayClass() {
        if(props.date.getMonth() != Calendar.currMonth ) return "hidden"; 
        else if(isToday===true) return "today"; 
        return "current"; 
    }
  
    function dateClicked() {
        const dateChange = new CustomEvent("focusDateChange", {
            detail: {date: props.date},
            bubbles: true,
            cancelable: true,
            composed: true,
          });

        document.dispatchEvent(dateChange); 


    }  
    // boolean to check if certain Date object represents current day

    return (
        <div id="date_box" className={getDayClass()} onClick={dateClicked}>

            <Notification notifs = {TaskDictionary.getTasks(dateConv)} taskComp={props.taskComp}> </Notification>
            <p id="month">{props.month}</p>
            <p id="day">{props.date.getDate()}</p>
        </div>
        //Add JSX Code
    );
}


export default Day; 

 