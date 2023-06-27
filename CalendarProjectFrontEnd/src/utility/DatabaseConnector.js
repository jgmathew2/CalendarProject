import axios from 'axios'; 
import TaskDictionary from './TaskDictionary';

export default class DatabaseConnector {

    static dataRead = false; 

    static async addTask(task) {

        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:8080/',
            headers: { 
            'Content-Type': 'application/json'
            },
            data : JSON.stringify(task)
        };

        await axios(config).then().catch(err=>console.log(err)); 
    }

    static async removeTask(task) {

        var config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: 'http://localhost:8080/',
            headers: { 
            'Content-Type': 'application/json'
            },
            data : JSON.stringify(task)
        };

        await axios(config).then().catch(err=>console.log(err)); 
    }

    static async getData() {
        if(this.dataRead) return; 
        else this.dataRead = true; 
        await axios.get("http://localhost:8080/")
            .then((res) => {
                for(let task of res.data) {
                    let date = parseInt(task.date);
                    TaskDictionary.addTask(date, {date:date, todo: task.task}, true); 
                }
            }); 
    }

    //Implement later after u do front end 
    /*
    static updateTask()

    */

}