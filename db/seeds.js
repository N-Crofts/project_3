require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
)

const { User, Pioneer, Phenomenon } = require('./model')

const antiGrav = new Phenomenon({
  title: 'Antigravity',
  description: "Lorem ipsum dolor amet lo-fi post-ironic brunch, plaid keytar ethical quinoa crucifix iceland 8-bit hell of jianbing four loko. Prism listicle waistcoat kickstarter tbh air plant cloud bread squid whatever live-edge mixtape salvia chicharrones. Aesthetic vinyl quinoa flexitarian chartreuse messenger bag hell of four loko snackwave 3 wolf moon gluten-free chillwave plaid. Chicharrones fashion axe selfies small batch hot chicken air plant blue bottle roof party YOLO artisan swag mixtape lyft hexagon. Humblebrag hoodie glossier poutine chartreuse DIY, stumptown normcore quinoa woke street art. Normcore iPhone DIY crucifix master cleanse, aesthetic brunch ugh vape gochujang. Twee salvia polaroid, thundercats pickled farm-to-table pok pok snackwave flannel neutra 90's kale chips hot chicken.",
})
const clones = new Phenomenon({
  title: 'Cloning',
  description: "Lorem ipsum dolor amet lo-fi post-ironic brunch, plaid keytar ethical quinoa crucifix iceland 8-bit hell of jianbing four loko. Prism listicle waistcoat kickstarter tbh air plant cloud bread squid whatever live-edge mixtape salvia chicharrones. Aesthetic vinyl quinoa flexitarian chartreuse messenger bag hell of four loko snackwave 3 wolf moon gluten-free chillwave plaid. Chicharrones fashion axe selfies small batch hot chicken air plant blue bottle roof party YOLO artisan swag mixtape lyft hexagon. Humblebrag hoodie glossier poutine chartreuse DIY, stumptown normcore quinoa woke street art. Normcore iPhone DIY crucifix master cleanse, aesthetic brunch ugh vape gochujang. Twee salvia polaroid, thundercats pickled farm-to-table pok pok snackwave flannel neutra 90's kale chips hot chicken.",
})

const zoidBerg = new Pioneer({
  pioneerName: 'Dr. Zoidberg',
  description: 'Lorem ipsum dolor amet lo-fi post-ironic brunch, plaid keytar ethical quinoa crucifix iceland 8-bit hell of jianbing four loko. ',
  phenomena: [antiGrav, clones],
})

const nicholas = new User({
  userName: 'Nicholas',
  password: 'BallinOuttaControl',
})

User.remove({})
  .then(() => nicholas.save())
  .then(() => console.log('Tasty Seeds!'))
  .then(() => mongoose.connection.close())

Pioneer.remove({})
  .then(() => zoidBerg.save())
  .then(() => console.log('Tasty Seeds!'))
  .then(() => mongoose.connection.close())