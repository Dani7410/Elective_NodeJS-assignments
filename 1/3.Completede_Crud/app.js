const { json } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Welcome to this Node.js API');
});

let users = [
    {id:1, firstName: 'Daniel', occupation: 'Computer scientist' },
    {id:2, firstName: 'thomas', occupation: 'Soldier' },
    {id:3, firstName: 'Anna', occupation: 'Baker' },
    {id:4, firstName: 'Jens', occupation: 'Machine Engineer' },
    {id:5, firstName: 'Caroline', occupation: 'Candidate'},
    {id:6, firstName: 'Diana', occupation: 'Woodchopper' }
]

let id = users.length;

app.get('/users',(req, res) =>{
    res.send({data: users});
});

app.get("/users/:id",(req, res) =>{
    const userId = Number(req.params.id);
    const foundUsers = users.find(user => user.id === userId);
    res.send({foundUsers: foundUsers})

});

app.post("/users", (req, res) =>{
    const newUser = req.body;
    console.log(newUser);
    newUser.id = ++id;
    users.push(newUser)
    console.log(newUser);
    //res.send er det som jeg forventer at få tilbage som svar fra API (i postman)
    res.send({msg: `ny bruger med id ${newUser.id} and name is ${newUser.firstName}`})
});

app.patch("/users/:id", (req, res) => {
    let userUpdated = false;
    const userId = req.body;
    users = users.map(user => {
        if(user.id === Number(req.params.id)){
            userUpdated = true;
            return{...user, ...req.body, id: user.id};
        }
        return user;
    });
    res.send({data : userUpdated, msg:`user with the user id: ${userId.id} has been changed`});
});

app.delete("/users/:id",(req, res) =>{
    const userId = req.body;
    users = users.filter(user => user.id !== Number(req.params.id));
    res.send({ msg:`user with the id: ${userId.id} has been deleted.`})
})


app.listen(3030, (error) =>{

    if(error){
        console.log(error)
    }
    console.log("Server is running on 3030")
});