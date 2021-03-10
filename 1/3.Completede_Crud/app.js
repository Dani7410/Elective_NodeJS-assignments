const express = require("express");
const app = express();

app.get('/', (req,res) => {
    res.send('Welcome to this Node.js API');
});

const users = [
    {id:1, firstName: 'Daniel', lastName: 'Joketovic' },
    {id:2, firstName: 'thomas', lastName: 'Jesperne' },
    {id:3, firstName: 'Anna', lastName: 'Frydendal' },
    {id:4, firstName: 'Jens', lastName: 'Jakobsen' },
    {id:5, firstName: 'Caroline', lastName: 'Petersen'},
    {id:6, firstName: 'Diana', lastName: 'Lækkersen' }
]


app.get('/users',(req, res) =>{
    res.send(users);
})


app.listen(3030, (error) =>{

    if(error){
        console.log(error)
    }
    console.log("Server is running on 3030")
});