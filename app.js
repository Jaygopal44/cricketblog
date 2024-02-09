const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())
const port = process.env.PORT || 3000
//Connect Mongodb
const connectDB=require('./db/connectDb.js')
connectDB();

var flash = require('connect-flash');
var session = require('express-session')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))
app.use(flash())


//EJS SETUP 
app.set('view engine','ejs')
var bodyParser= require('body-parser')
// app.use(bodyparser.json());
app.use(bodyParser.urlencoded({ extended: true }))
//STATIC FILES CSS IMAGE JS LOAD
app.use(express.static('public'))
//ROUTE LOAD
const web= require('./routes/web')
app.use('/',web);

// app.get('/' , (req , res)=>{
//     res.render('index')
// })












app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


