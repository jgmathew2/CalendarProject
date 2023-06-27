import Day from "../Day/Day"; 
import {useState} from 'react'; 
import "./Calendar.css"; 

export default function Calendar () {

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    let month = []; 

    let [input, setDate] = useState(new Date(Date.now())); 

    // Placeholder, need function to force re-render when tasklist is updated 
   let [placeholder, updateTasks] = useState(1);

   //Sets date based on when date clicked using custom event fired in day.js
   document.addEventListener("updatedTasks", (event) => {
       // Inputted 0 irrelevant, just needed to force re-render
       updateTasks(Math.random()); 
   }); 

    let curr = new Date(input.getTime()); 

    var currMonth = curr.getMonth();
    
    Calendar.currMonth = currMonth; 

    //month.push(curr); 

    while(curr.getMonth() === currMonth || curr.getDay() > 0) {
         month.unshift(new Date(curr)); 
         curr.setDate(curr.getDate() - 1); 
    }

    month.unshift(new Date(curr)); 

    curr = new Date(input.getTime()); 

    while(curr.getMonth() === currMonth || curr.getDay() < 6) {
        curr.setDate(curr.getDate() + 1); 
        month.push(new Date(curr)); 
    }

    while(month.length < 42) {
        curr.setDate(curr.getDate() + 1); 
        month.push(new Date(curr)); 
    }

    curr = new Date(input.getTime()); 

    let monthIndex = 0;
    
    // TODO: Have scheduling for specific times mechanism on the rtb 

    // TODO: Fix styling for popups

    // TODO: Transition monthNames var to a spot in the utility class

    // TODO: Transition date input to be Month/Day/Yr

    // TODO: Fix CSS styling for notifications on days, looks terrible even if it technically works 
    

    return (
        <div id="with-title">
            <p id="month-text"> {monthNames[currMonth]} {input.getFullYear()}</p>
            
            <div id="with-buttons">

                <button id = "left-arrow" onClick={() => {setDate(new Date(curr.setMonth(curr.getMonth() - 1)))}}>
                        <i className="fa fa-arrow-left"></i>
                </button>

                <table>
                    <thead>
                        <tr>
                            <th>S</th>
                            <th>M</th>
                            <th>T</th>
                            <th>W</th>
                            <th>Th</th>
                            <th>F</th>
                            <th>Sa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                        </tr>
                        <tr>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                        </tr><tr>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                        </tr>
                        <tr>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                        </tr>
                        <tr>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                        </tr>
                        <tr>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                            <td><Day date={month[monthIndex++]}></Day></td>
                        </tr>
                    </tbody>
                </table>

                <button id = "right-arrow" onClick={() => {setDate(new Date(curr.setMonth(curr.getMonth() + 1)))}}>
                    <i className="fa fa-arrow-right"></i>
                </button>

            </div>
            
        </div>

    ); 

}