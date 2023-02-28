const express = require('express')
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()

require("dotenv").config({ path: "./config.env" })
const port = 3000
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

// get driver connection
const dbo = require("./db/conn");

app.get('/', (req, res) => {
    res.send('Hello, world!');
});


const userRouter = require('./routes/user')
app.use('/user', userRouter)



app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if (err) console.error(err)
    })
    console.log(`Server is running on port: ${port}`)
})