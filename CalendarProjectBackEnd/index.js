const express = require("express"); 
const app = express(); 


// Allows the front end to access backEnd, not exactly sure why this is necessary, 
// but found it on stackoverflow
const cors = require('cors');

app.use(cors()); 

app.use(express.json()); 

app.listen(8080, () => {
});
