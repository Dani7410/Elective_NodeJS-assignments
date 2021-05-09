const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





const fs = require("fs");

const projectsRouter = require("./routes/projects");
const contactRouter = require("./routes/contact");
app.use(projectsRouter.router);
app.use(contactRouter.router);


const footer = fs.readFileSync(__dirname + "/public/Footer/footer.html", "utf-8");
const header = fs.readFileSync(__dirname + "/public/Header/header.html", "utf-8");
const mainContent1 = fs.readFileSync(__dirname + "/public/MainContent/mainContent.html", "utf-8");
const progress = fs.readFileSync(__dirname + "/public/Progresspage/progresspage.html","utf-8")
const projects = fs.readFileSync(__dirname + "/public/Projects/projects.html", "utf-8");
const contact = fs.readFileSync(__dirname + "/public/Contact/contact.html", "utf-8");

app.get("/", (req,res) =>{
    res.send(header + mainContent1 + footer);
});

app.get("/projects", (req,res) =>{
    res.send(header + projects + footer);
});

app.get("/contact", (req,res) =>{
    res.send(header + contact + footer);
});

app.get("/progress", (req,res) =>{
    res.send(header + progress + footer);
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, error => {
    if(error){
        console.log(error);
    }
    console.log("Server is running on port:", Number(PORT));
});
