const express = require('express')

const server = express()



const hanleAllTypesOfRequests = (req, res) => {
    res.send("Response from server.use");
}

const hanleAllCreatePutOfRequests = (req, res) => {
    res.send("Response to porofile request with method of the value put");
}
const handelGetloningOfReq =(req,res)=> {
    res.send("Get the login requests")
}
const middlewarefunction = (req, res, next) => {
    // console.log("hello this is the middleware")
    //make some checks
    //  res.send('hi this is a middeware response')
    next();
}

const loginRouteSpecifiMiddeware =(req, res, next) =>{
    console.log("login route middleware executed");
    next()
}
  
server.use(middlewarefunction);
server.post("/profile", hanleAllTypesOfRequests);
server.get('/login',loginRouteSpecifiMiddeware,handelGetloningOfReq)
server.put('/profile', hanleAllCreatePutOfRequests)
server.listen(3000, () => console.log("server is ready"))