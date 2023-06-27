const express = require("express"); 
const app = express(); 

// Allows the front end to access backEnd, basically gives perms
const cors = require('cors');

app.use(cors());

app.use(express.json()); 

// For interacting with mongoDB
const mongoose = require("mongoose"); 
mongoose.connect('mongodb://127.0.0.1:27017/calendarProject')
    .then(() => {console.log("Connection!")})
    .catch(() => {console.log("Wrong mongo port")}); 


// Creates task schema for data retrieval from mongoose
const taskSchema = mongoose.Schema({
    task:String, 
    date:Number, 
    time:String
}); 

// Create task model
const Task = mongoose.model('Task', taskSchema); 


//Listen on port 8080
app.listen(8080, () => {
});

app.post("/", (req, res) => {
    let date = req.body.date; 
    let todo = req.body.todo;

    //For when you implement scheduling
    let time = "placeholder"
    
    const task = new Task({task: todo, date: date, time: time}); 

    task.save()
        .then()
        .catch(res.send("Connection failed!")); 
});

app.get("/", (req, res) => {

    // Gets all tasks from database, sends to front-end

    Task.find({}).then((data) => res.send(data)); 
}); 

app.delete("/", (req, res) => {

    let date = parseInt(req.body.date); 
    let todo = req.body.todo;

    //For when you implement scheduling
    let time = "placeholder"; 

    //Task.find({date:date, task:todo}).then((data) => console.log(data)); 

    // Include time as a paremeter when implemented
    Task.deleteOne({date: date, task: todo})
        .then(() => console.log("Deletion Successful!"))
        .catch((error) => console.log(error)); 
})


