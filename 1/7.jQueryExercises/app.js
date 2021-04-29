const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/welcome", (req, res) => {
    res.send("<h1>Welcome</h1>");
});

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/public/jQueryPage/jQueryPage.html");
})



const server = app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});
