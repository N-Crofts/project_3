const router = require('express').Router({ mergeParams: true })
const { Pioneer, Phenomenon } = require('../db/model')

////////////////////  C R E A T E  ////////////////////////

router.post('/', (req, res) => {
    const newPhenomenon = new Phenomenon()
    Pioneer.findById(req.params.pioneerId)
        .then((pioneer) => {
            pioneer.phenomena.push(newPhenomenon)
            return pioneer.save()
        })
        .then((pioneer) => {
            res.send(pioneer)
        })
})

////////////////////  U P D A T E  ////////////////////////

router.put('/:id', (req,res) => {
    Pioneer.findById(req.params.pioneerId)
    .then(pioneer => {
        const phenomenon = pioneer.phenomena.id(req.params.id)
        const updatedPhenomenon = req.body

        if (updatedPhenomenon.title) {
            phenomenon.title = updatedPhenomenon.title
        }

        if (updatedPhenomenon.description) {
            phenomenon.description = updatedPhenomenon.description
        }
        return pioneer.save()
    })
    .then(pioneer => {
        res.send(pioneer)
    })
})

////////////////////  D E L E T E  ////////////////////////

router.delete('/:id', (req, res) => {
    Pioneer.findById(req.params.pioneerId)
        .then((pioneer) => {
            return pioneer.update({ $pull: { phenomena: { _id: req.params.id } } })
        })
        .then(pioneer => {
            res.send(pioneer)
        })
})

module.exports = router