const Schema = require('mongoose').Schema

const PhenomenonSchema = new Schema({
    title: {
        type: String,
        default: 'New Phenomenon'
    },
    description: {
        type: String,
        default: 'New Description'
    }
})

const PioneerSchema = new Schema({
    pioneerName: String,
    description: String,
    phenomena: [PhenomenonSchema],
})

const UserSchema = new Schema({
    userName: String,
    password: String,
})

module.exports = { UserSchema, PioneerSchema, PhenomenonSchema }