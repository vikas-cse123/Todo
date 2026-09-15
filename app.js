import express from "express"
const app = express()
const PORT = 4000


app.get("/",(req,res) => {
    res.end("Hello, How are you?")
})



//Continue
//THE ERR CAME FROM THE LINE 18, BUT IN RESPONSE I DID NOT SEND ANY ERR RESPONSE. HOW DOES THAT WORK?
//WHAT DOES CODE CRASH MEAN

app.post("/note",(req,res) =>{
    console.log("Running this code....");
    const {title,description} = req.body
    console.log({title,description});
    console.log("here");
})

app.listen(PORT,() => {
    console.log("Server started");
})