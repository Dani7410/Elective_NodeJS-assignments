const express = require("express");
const app = express();
// -- Node JS time application


app.get('/', (req,res) => {
    res.send('Welcome to this Node.js API');
});

app.get('/time', (req,res) => {
    //Write method for time
    let dateObj = new Date();
    let second = dateObj.getSeconds();
    let = minute = dateObj.getMinutes();
    let hour = dateObj.getHours();
    res.send("Hour: " + hour + " " + "minute: " + minute + " " + "Second: "  + second );
   
});

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
app.get('/day', (req,res) => {
    //write method for day
    const todaysweekday = new Date().getDay(); 
    res.send({day : weekdays[todaysweekday]});
});

const Months = ["Januar", "Februar", "Marts", "April", "May", "juni", "Juli", "August", "september", "oktober", "november", "december"];
app.get('/month', (req,res) => {
    //Write method for month
    const thismonth = new Date().getMonth();
    res.send({month : Months[thismonth]}); 
});


app.listen(3000, (error) => {
    if(error){
        console.log(error)
    }
    console.log('server running on 3000'); 
});