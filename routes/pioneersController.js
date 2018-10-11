const router = require('express').Router()
const { Pioneer } = require('../db/model')

////////////////////  S H O W   A L L  //////////////////////

router.get('/', async (req, res) => {
    const pioneers = await Pioneer.find()
    res.send(pioneers)
})

////////////////////  S H O W  O N E  ///////////////////////

router.get('/:id', async (req, res) => {
    const pioneer = await Pioneer.findById(req.params.id)
    res.send(pioneer)
})


/////////////////////  C R E A T E  /////////////////////////

router.post('/', async (req, res) => {
    const pioneer = await Pioneer.create(req.body)
    res.send(pioneer)
})

/////////////////////  U P D A T E  /////////////////////////

router.put('/:id', async (req, res) => {
    const pioneer = await Pioneer.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send(pioneer)
})

/////////////////////  D E L E T E  /////////////////////////

router.delete('/:id', async (req, res) => {
    const pioneer = await Pioneer.findByIdAndRemove(req.params.id)
    res.sendStatus(200)
})

module.exports = router
