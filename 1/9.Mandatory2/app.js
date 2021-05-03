const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const fs = require("fs");

const footer = fs.readFileSync(__dirname + "/public/Footer/footer.html", "utf-8");
const header = fs.readFileSync(__dirname + "/public/Header/header.html", "utf-8");

app.get("/", (req,res) =>{
    res.send(header + footer);
});

app.get("/skærm", (res, req) =>{
    res.send()
})
"pleasure in the job puts perfection in the work"
"-Aristotle"

const PORT = process.env.PORT || 8080;
app.listen(PORT, error => {
    if(error){
        console.log(error);
    }
    console.log("Server is running on port:", Number(PORT));
});
