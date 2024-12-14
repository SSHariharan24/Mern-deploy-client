const express =  require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require('./models/Users')        // this is crud schema 
const RegisterModel = require('./models/Register') // this is signin and signup schema 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/sendEmail');
const cookieParser = require('cookie-parser')
import path from "path";
const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
dotenv.config()
const __dirname = path.resolve();
const app = express()
app.use(bodyParser.json());
app.use(cors(
    {
    origin:["http://localhost:5173"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true 
}
))

app.use(express.json())
app.use(cookieParser())

mongoose.connect("mongodb://localhost/crud")

app.use('/api', emailRoutes);
// this api is used for crud operation
const verifyUser = (req,res,next)=>{
    const token = req.cookies.token
    if(!token){
        return res.json("Token is missing")
    }else{
        jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
            if(err){
                return res.json("Error with token")
            }else{
                if(decoded.role === "admin"){ 
                    next()
                }else{
                    return res.json("not admin")
                }
            }
        })
    }
}
app.get('/get',verifyUser,(req,res)=>{
    userModel.find({})
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

app.get('/logout',(req,res)=>{
    return res.json({status:true})
})

app.get("/getUser/:id",(req,res)=>{
    const id = req.params.id
    userModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

app.put("/updateUser/:id",(req,res)=>{
    const id = req.params.id
    userModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age})
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

app.post("/createUser",(req,res)=>{
    userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.delete("/deleteUser/:id",(req,res)=>{
    const id = req.params.id
    userModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

//this below code of api is used for the sign,signup,forgetpassword and resetpassword using jwt authentication 
app.post('/login',(req,res)=>{
    const{email,password} = req.body;
    RegisterModel.findOne({email:email})
    .then(user =>{
        if(user){
            bcrypt.compare(password,user.password,(err,response)=>{
                if(response){
                    const token = jwt.sign({email:user.email,role:user.role},"jwt-secret-key",{expiresIn:"1h"})
                    res.cookie('token',token)
                    return res.json({Status:"Success",role:user.role})
                }else{
                    res.json('The password is incorrect')
                }
            })
            
        }else{
            res.json('No record existed')  
        }
    })
})

app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    bcrypt.hash(password,10)
    .then(hash => {
       RegisterModel.create({name, email, password: hash})
            .then(result => res.json("Success"))
            .catch(err => res.json(err))
        
    }).catch(err => res.json(err))
})

app.post("/forgot-password", async (req, res) => {
    const { email } = req.body;
    try {
      const user = await RegisterModel.findOne({ email });
      if (!user) {
        return res.json({ message: "user not registered" });
      }
      const token = jwt.sign({ id: user._id }, process.env.KEY, {
        expiresIn: "5m",
      });
  
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.USER,
          pass: process.env.PASS
        },
      });
      const encodedToken = encodeURIComponent(token).replace(/\./g, "%2E");
      var mailOptions = {
        from: process.env.MAIL,
        to: email,
        subject: "Reset Password",
        text: `http://localhost:5173/reset-password/${encodedToken}`,
      };
  
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return res.json({ message: "error sending email" });
        } else {
          return res.json({ status: true, message: "email sent" });
        }
      });
    } catch (err) {
      console.log(err);
    }
  });


  app.post("/reset-password/:token", async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    try {
      const decoded = jwt.verify(token, process.env.KEY);
      const id = decoded.id;
      const hashPassword = await bcrypt.hash(password, 10);
      await RegisterModel.findByIdAndUpdate({ _id: id }, { password: hashPassword });
      return res.json({ status: true, message: "updated password" });
    } catch (err) {
      return res.json("invalid token");
    }
  });    

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
    });
  }

app.listen(process.env.PORT, ()=>{
    console.log(`server is running ${process.env.PORT}` );
    
})