const express=require('express')
const cors=require('cors')
const { MongoClient }=require('mongodb')


const fs=require("fs")

const app=new express()
app.use(express.json())
app.use(cors())


const client=new MongoClient('mongodb+srv://waseem:waseem@cluster0.gpiurgo.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db=client.db('sdp')
const col=db.collection('register')

app.post('/insert',async (req,res) => {
    console.log(req.body)
    var reg={...req.body}
    col.insertOne(reg)
    res.send("Recieved Data !")
})


app.get('/home',(req,res) => {
    res.send("Home Page")
})

app.post('/check',async (req,res)=>{
    console.log(req.body)
    var result=await col.findOne({"name":req.body.un})
    if(result==null){
        res.send("Username not Matched !")
    }else if(req.body.pw==result.password){
        res.send("Correct Password")
    }else{
        res.send("Incorrect Password !")
    }
})

app.delete('/delete',async(req,res)=>{
    console.log(req.query.name)
    await col.deleteOne({name:req.query.name})
    res.send("Deleted Sucessfully!")
})

app.put('/update',async (req,res)=>{
    console.log(req.body)
    var doc={
        $set:{
            password:req.body.password,
            email:req.body.email,
            role:req.body.role,
        }
    }
    await col.updateOne({name:req.body.name},doc)
    res.send("Updated Sucessfully!")
})

app.listen(8081)
console.log("Server Running !")