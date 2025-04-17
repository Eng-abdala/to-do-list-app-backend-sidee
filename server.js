const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app =express()
app.use(cors())

app.use(express.json())

// connecting to the database
mongoose.connect('mongodb+srv://ciilanesalaad482561:nt0yxzgxaiKB9g9S@todolist.djkffz5.mongodb.net/?retryWrites=true&w=majority&appName=ToDoList/task').then(()=>{
    console.log("the server is connected to the database successfully!")
}).catch((error)=>{
console.log(error)
})


// importing schema
const scheamData = require('./model/notemodel')

// post API
app.post('/create',async(req,res)=>{
const postNote = scheamData(req.body)
const saveNote = await postNote.save()
if (saveNote){
    res.send(saveNote)
}
else{
    res.send("Error occurred!")
}
})

// get API
app.get('/get',async(req,res)=>{
    const getNote = await scheamData.find()
    if (getNote){
        res.send(getNote)
    }
    else{
        res.send("Data is not found!")
    }

})

// delet API
app.delete('/delete/:id',async(req,res)=>{
const deletData = await scheamData.deleteOne({_id:req.params.id})
if (deletData){
    res.send("data is deleted!")
}
else{
    res.send("data is deleted!")
}
})





app.listen(5000,()=>{
    console.log("the server is working on port 5000!")
})