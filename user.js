const { urlencoded } = require('body-parser')
const express = require('express')
const router = express.Router()
router.use(express.json()) //for parsing aplication json
router.use(urlencoded({extended : true}))


const user = [
    {id : 1, name : "kadek"},
    {id : 2, name : "riyan"},
    {id : 3, name : "kusuma"}
]
router.route('/user')
    .get((req, res)=>{
        res.send(user)
    })
    .post((req, res)=>{
        res.json({
            name : req.body.name
        })
    })
router.route('/user/:id')
    .put((req, res)=>{
        const id = req.params.id
        const message = `update user with id ${id}`
        res.json({
            message: message,
            data : req.body
        })
    })
    .delete((req, res)=>{
        res.send('delete a user')
    })

module.exports = router