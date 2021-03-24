const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/startPage/startPage.html");
})

app.get("/welcome", (req, res) =>{
    res.sendFile(__dirname + "/public/welcome/welcome.html");
});

app.get("/siteInfo1", (req,res)=>{
    res.sendFile(__dirname + "/public/siteInfo1/siteInfo1.html")
});

app.get("/siteInfo2", (req,res)=>{
    res.sendFile(__dirname + "/public/siteInfo2/siteInfo2.html")
});

app.get("/siteInfo3", (req,res)=>{
    res.sendFile(__dirname + "/public/siteInfo3/siteInfo3.html")
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(PORT));
});