const express= require('express')
const app = express()

//setting ejs to be our view engine
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

var messages=[
    {
        text:"hello there my name is Matteo. What is your name",
        user:"Matteo",
        added:Date()
    },
    {
        
        text:"my name is Roberto nice to meet you",
        user:"roberto",
        added:Date()
    }]

//request handle for the / route
app.get('/',(req,res)=>{
    
    var message = 'hello world'
    res.render('pages/index',
    {
        message: message,
        messages:messages
    })
    

})

//request handler for the /new route
  app.get('/new',(req,res)=>{
    res.render('pages/form')
    ///code to be executed
  })

  //handling the post method
 app.post('/new',(req,res)=>{
    const userName=req.body.userName
    const textMessage=req.body.textMessage
    const added = new Date();
    messages.push({text:textMessage,user:userName,added: added})
    res.redirect('/')
    console.log(userName)
 })
//starting the server.
app.listen(8000,()=>{
    console.log("server started at port 8000")
})
console.log()