const express = require("express");
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.post('/waitlist', (req, res) => {
    console.log(
        req.body.name,
        req.body.email
    )
    res.send({
        "status": "waitlist added"
    })
})

app.post('/login', (req, res) => {
    if(req.body.username === "admin" && req.body.password === "admin") {
        res.send({
            "token": true
        })
    }
    else {
        res.send({
            "token": false
        })
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}`));