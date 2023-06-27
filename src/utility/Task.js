export default class Task {

    // Data refers to hashcoded date, not actual date object

    constructor(date, todo, ...additional) {

        this.date = date; 
        this.todo = todo; 
        this.additional = additional; 

    }
    
}