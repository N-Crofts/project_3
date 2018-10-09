const router = require('express').Router({ mergeParams: true })
const { Pioneer, Phenomena } = require('../db/model')

////////////////////  C R E A T E  ////////////////////////

router.post('/', (req, res) => {
    const newPhenomena = new Phenomena()
    Pioneer.findById(req.params.pioneerId)
        .then((pioneer) => {
            pioneer.phenomena.push(newPhenomena)
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
        const phenomena = pioneer.phenomena.id(req.params.id)
        const updatedPhenomena = req.body

        if (updatedPhenomena.title) {
            phenomena.title = updatedPhenomena.title
        }

        if (updatedPhenomena.description) {
            phenomena.description = updatedPhenomena.description
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