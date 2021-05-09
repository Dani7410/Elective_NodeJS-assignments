const router = require("express").Router();

const projects = [   
    {
        title: "Nodefolio",
        description: "Development of a portofolio with a contact feature",
        gitURL: "https://github.com/Dani7410/Elective_NodeJS-assignments/tree/main/1/9.Mandatory2",
        images: [],
        tecknologiesInvolved: ["Node.js", "HTML", "CSS"]
    },
    {
        title: "Node.js informationsite",
        description: "Node.js and theory about what i have learned ",
        gitURL: "https://github.com/Dani7410/Elective_NodeJS-assignments/tree/main/1/5.Mandatory",
        images: [],
        tecknologiesInvolved: ["Node.js", "HTML", "CSS"]
    }
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

module.exports = {
    router
}