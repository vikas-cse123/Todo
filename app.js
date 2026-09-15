import express from "express"
const app = express()
const PORT = 4000


app.get("/",(req,res) => {
    res.end("Hello, How are you?")
})


//create a todo
//title,description,category,

app.post("/note",(req,res) =>{
    console.log("Running this code....");
    const {title,description} = req.body
    console.log({title,description});
    console.log("here");
})

app.listen(PORT,() => {
    console.log("Server started");
})