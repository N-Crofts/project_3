const mongoose = require('mongoose')
const { UserSchema, PioneerSchema, PhenomenonSchema } = require('./schema')

const UserModel = mongoose.model('User', UserSchema)
const PioneerModel = mongoose.model('Pioneer', PioneerSchema)
const PhenomenonModel = mongoose.model('Phenomenon', PhenomenonSchema)

module.exports = { User: UserModel, Pioneer: PioneerModel, Phenomenon: PhenomenonModel }