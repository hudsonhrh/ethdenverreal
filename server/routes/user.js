const express = require('express')
const router = express.Router()
module.exports = router

router.get('/', (req, res) => {
    res.send({hello : "world" })
})

router.post('/', (req, res) => {
    console.log(req.body);
    let data = req.body
    console.log(data)
    res.setHeader('Content-Type', 'application/json')
    const sendData = {Sanitycheck : "OK" }
    res.end(JSON.stringify(sendData))
})