// connect to our database
 /*
    pseudocode 
        1. import mongoose
        2. assign it to a variable mongoose
        3. set "strictQuery " to false
        4. assign the connection url to a mongoDb variable
        5. a function main that should connect to the database and log a successful connection message
        6.  catch any errors on the main function and log  the error
 */

        //import the blog model
        const blog = require('./models/blog')
        //connect to the database
        const mongoose = require('mongoose')
        mongoose.set("strictQuery",false);
        const mongoDb = "mongodb+srv://NjiruNyaga:a8.@blogspot0.7jzoabx.mongodb.net/?retryWrites=true&w=majority"

        // handling error
        main().catch(()=>{
            console.log("database connection fail")
        })
        
        //function main() that  connects to the database
        async function main(){
           await  mongoose.connect(mongoDb,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            console.log("database connected successfully")
        }

        // crud operation (create)
          /**
           * create a function createBlog()
           * in the function 
           *     blog.create() method
           *            pass in a object {
           *                    title: ""
           *                    body: ""
           * }
           *           
           */

          function createBlog(){
            blog.create({
                title: "we are the lucky ones ",
                body: "Lay your head on me As I fall to sleep Put your arms around me Stay here by my side Were The Lucky Ones Only just begun Others leave too young But we're The Lucky Ones"
            })


            console.log("blog has been created");
          }
          createBlog();