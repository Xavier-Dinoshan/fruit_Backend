const express = require("express")

const app = express()

const fruits = []

app.get("/fruits", function (req, res) {
    fruits.push(req.query.fruits)
    console.log(fruits);
    
    

    
    
})

app.listen(3000, function () {
    console.log("server started...");
    
})