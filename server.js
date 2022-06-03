const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");

app.use(cors());

// ! This is the API OBJECT
const rappers = {
    "21 savage": {
        birthName: "Sheyaa Bin Abraham-Joseph",
        birthLocation: "London, England",
        age: 29,
    },
    "chance the rapper": {
        birthName: "Chancelor Bennett",
        birthLocation: "Chicago, Illinois",
        age: 29,
    },
    unknown: {
        birthName: "unknown",
        birthLocation: "unknown",
        age: 0,
    },
};

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
    const rapperName = req.params.name.toLowerCase();
    if (rappers[rapperName]) {
        res.json(rappers[rapperName]);
    } else {
        res.json(rappers["unknown"]);
    }
});
