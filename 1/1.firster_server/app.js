const express = require("express");
const app = express();



const users = [
    {id:1, firstName: 'Daniel', lastName: 'Joketovic' },
    {id:2, firstName: 'thomas', lastName: 'Jesperne' },
    {id:3, firstName: 'Anna', lastName: 'Frydendal' },
    {id:4, firstName: 'Jens', lastName: 'Jakobsen' },
    {id:5, firstName: 'Caroline', lastName: 'Petersen'},
    {id:6, firstName: 'Diana', lastName: 'Lækkersen' }
]
    

// GET shows the string in the method 
app.get('/', (req,res) => {
    res.send('Welcome to this Node.js API');
});


//GET shows all the data in json format 
app.get('/allUsers', (req,res) => {
    res.send(users);
});

// GET user by id method
app.get('/user/:id', (req,res) => {
    //const id = parseInt(req.params.id)
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) res.status(404).send ('the user with the given id was not found.');
    res.send(user);
});




// Concludes what port number the server is running on
app.listen(8080, () => {
    console.log('server running on 8080'); 
});
