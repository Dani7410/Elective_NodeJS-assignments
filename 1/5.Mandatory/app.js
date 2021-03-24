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

app.get("/siteInfo4", (req,res)=>{
    res.sendFile(__dirname + "/public/siteInfo4/siteInfo4.html")
});

app.get("/siteInfo5", (req,res)=>{
    res.sendFile(__dirname + "/public/siteInfo5/siteInfo5.html")
});

app.get("/siteInfo6", (req,res)=>{
    res.sendFile(__dirname + "/public/siteInfo6/siteInfo6.html")
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(PORT));
});


