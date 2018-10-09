const Schema = require('mongoose').Schema

const PhenomenonSchema = new Schema({
    title: {
        type: String,
        default: 'New Phenomena'
    },
    description: {
        type: String,
        default: 'New Description'
    }
})

const PioneerSchema = new Schema({
    title: {
        type: String,
        default: 'New Pioneer'
    },
    description: {
        type: String,
        default: 'New Description'
    }
})

const UserSchema = new Schema({
    userName: String,
    password: String,
})

module.exports = { UserSchema, PioneerSchema, PhenomenonSchema }