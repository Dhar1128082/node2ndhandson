const express = require('express');


const app = express();

// Create a server using express and create route /api/main and send the response explaining what is express
//Express is a fast, assertive, essential and moderate web framework of Node.js. 
//You can assume express as a layer built on the top of the Node.js that helps manage a server and routes. 
//It provides a robust set of features to develop web and mobile applications.

app.get("/main", (req, res) => {
    console.log("Hello welcome to the first page");
    res.send("hello node")
})

app.get("/api", (req, res) => {
    console.log("this is second handson");
    res.send("feel free to use api");
})


app.listen(3000, () => {
    console.log("New Sever Started");
})