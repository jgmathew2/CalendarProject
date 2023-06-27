import Task from "./Task"; 

export default class TaskDictionary {

    // Key should be date in the form of a int, day/month/year

    static dict = {}; 

    static array = []; 

    contructor() {}

    static addTask(date, Task) {
        //date refers to hashcoded date, not date object 

        if(date == null) date = 0; 

        var dict = TaskDictionary.dict; 

        if(dict[date] == null) {
            dict[date] = [Task]; 
            
            this.sortArr(); 
        }
        else {
            dict[date].push(Task); 
        } 

        this.array.push(Task); 

        this.sortArr(); 

        this.updateTasks(); 
    }

    static updateTasks() {
        const addTaskEvent = new CustomEvent("updatedTasks", {
            detail: {},
            bubbles: true,
            cancelable: true,
            composed: true,
        });
        // Mechanism to update TaskBars

        document.dispatchEvent(addTaskEvent); 

    }

    static removeTask(Task) {
        let date = Task.date; 

        if(date == undefined) date = 0; 

        let taskIndex = this.findIndex(Task, this.dict[date]); 
        let arrayIndex = this.findIndex(Task, this.array); 

        if(taskIndex !== -1) {
            this.dict[date].splice(taskIndex, 1); 
        }
        if(arrayIndex !== -1) {
            this.array.splice(arrayIndex, 1); 
        }

        this.updateTasks();

    }

    static findIndex(object, array) {
        for(let i = 0; i < array.length; i++) {
            if(array[i] == object) return i; 
        }

        return -1; 
    }

    // Sorting mechanism doesn't work for sm reason
    static sortArr() {
    
        this.array.sort((c, d) => {

            let a = c.date; 
            let b = d.date; 

            if(a == null) a = 0; 
            if(b == null) b = 0; 

            while(a % 100 === b % 100) {
                a /= 100; 
                b /= 100; 

                if(a === 0) break; 
            }

            return a % 100 - b % 100; 
        }); 
    }

    static getTasks(day) {
        var dict = TaskDictionary.dict; 
        return dict[day]; 
    }

    static convertDate(date) {
        //if(date == null) return 0;  

        let value = ""; 

        value += date.getDate(); 

        if(date.getMonth() < 10) value += "0" + (date.getMonth() + 1); 

        value += date.getYear() % 100; 

        // Returns key to get data from dict 
        return parseInt(value); 

    }

    // Returns date given number input 
    static revertDate(number) {

        if(number == 0 || number == undefined) return null; 

        let year = number % 100 + 2000; 

        number /= 100; 
        let month = number % 100 - 1; 
        number /= 100; 
        let day = number % 100; 

        let date = new Date(year, month, day); 

        return date; 

    }


}