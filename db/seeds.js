require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
)

const { User, Pioneer, Phenomenon } = require('./model')

//////////////////  P H E N O M E N O N   /////////////////////

const filler = new Phenomenon({
  title: 'FillerTitle',
  description: "Lorem ipsum dolor amet lo-fi post-ironic brunch, plaid keytar ethical quinoa crucifix iceland 8-bit hell of jianbing four loko. Prism listicle waistcoat kickstarter tbh air plant cloud bread squid whatever live-edge mixtape salvia chicharrones. Aesthetic vinyl quinoa flexitarian chartreuse messenger bag hell of four loko snackwave 3 wolf moon gluten-free chillwave plaid. Chicharrones fashion axe selfies small batch hot chicken air plant blue bottle roof party YOLO artisan swag mixtape lyft hexagon. Humblebrag hoodie glossier poutine chartreuse DIY, stumptown normcore quinoa woke street art. Normcore iPhone DIY crucifix master cleanse, aesthetic brunch ugh vape gochujang. Twee salvia polaroid, thundercats pickled farm-to-table pok pok snackwave flannel neutra 90's kale chips hot chicken.",
})

const arnold = new Phenomenon({
  title: 'The Kenneth Arnold Sighting',
  description: "Looking at the famous crescentic flying wing illustrated in his 1950 pamphlet and the 1952 book (an artist’s rendering of a wooden model Arnold said he made for the AAF) many have assumed that this explains an early use of the phrase “somewhat bat-shaped”, but this is a misunderstanding based on a failure to carefully examine date order. The flying wing model represents only one of the objects, and Arnold’s own first realisation of its unique shape postdates by at least five weeks his use of that phrase, which he used only in the context of his earliest “disc” and “saucer” descriptions.",
})

const antigrav = new Phenomenon({
  title: 'Antigravity',
  description: "Lorem ipsum dolor amet lo-fi post-ironic brunch, plaid keytar ethical quinoa crucifix iceland 8-bit hell of jianbing four loko. Prism listicle waistcoat kickstarter tbh air plant cloud bread squid whatever live-edge mixtape salvia chicharrones. Aesthetic vinyl quinoa flexitarian chartreuse messenger bag hell of four loko snackwave 3 wolf moon gluten-free chillwave plaid. Chicharrones fashion axe selfies small batch hot chicken air plant blue bottle roof party YOLO artisan swag mixtape lyft hexagon. Humblebrag hoodie glossier poutine chartreuse DIY, stumptown normcore quinoa woke street art. Normcore iPhone DIY crucifix master cleanse, aesthetic brunch ugh vape gochujang. Twee salvia polaroid, thundercats pickled farm-to-table pok pok snackwave flannel neutra 90's kale chips hot chicken.",
})

const repulsine = new Phenomenon({
  title: 'Repulsine',
  description: "Lorem ipsum dolor amet lo-fi post-ironic brunch, plaid keytar ethical quinoa crucifix iceland 8-bit hell of jianbing four loko. Prism listicle waistcoat kickstarter tbh air plant cloud bread squid whatever live-edge mixtape salvia chicharrones. Aesthetic vinyl quinoa flexitarian chartreuse messenger bag hell of four loko snackwave 3 wolf moon gluten-free chillwave plaid. Chicharrones fashion axe selfies small batch hot chicken air plant blue bottle roof party YOLO artisan swag mixtape lyft hexagon. Humblebrag hoodie glossier poutine chartreuse DIY, stumptown normcore quinoa woke street art. Normcore iPhone DIY crucifix master cleanse, aesthetic brunch ugh vape gochujang. Twee salvia polaroid, thundercats pickled farm-to-table pok pok snackwave flannel neutra 90's kale chips hot chicken.",
})

/////////////////////  P I O N E E R   ////////////////////////

const horton = new Pioneer({
  pioneerName: 'The Horton Brothers',
  description: "Walter Horten (born 13 November 1913; died 9 December 1998 in Baden-Baden, Germany) and Reimar Horten (born 12 March 1915; died 14 March 1994 in Villa General Belgrano, Argentina), sometimes credited as the Horten Brothers, were German aircraft pilots and enthusiasts. Although they had little, if any, formal training in aeronautics or related fields, the Hortens designed some of the most revolutionary aircraft of the 1940s, including the world's first jet-powered flying wing, the Horten Ho 229.",
  phenomena: [arnold, filler],
})

const tesla = new Pioneer({
  pioneerName: 'Nikola Tesla',
  description: "Lorem ipsum dolor amet lo-fi post-ironic brunch, plaid keytar ethical quinoa crucifix iceland 8-bit hell of jianbing four loko. Prism listicle waistcoat kickstarter tbh air plant cloud bread squid whatever live-edge mixtape salvia chicharrones. Aesthetic vinyl quinoa flexitarian chartreuse messenger bag hell of four loko snackwave 3 wolf moon gluten-free chillwave plaid. Chicharrones fashion axe selfies small batch hot chicken air plant blue bottle roof party YOLO artisan swag mixtape lyft hexagon. Humblebrag hoodie glossier poutine chartreuse DIY, stumptown normcore quinoa woke street art. Normcore iPhone DIY crucifix master cleanse, aesthetic brunch ugh vape gochujang. Twee salvia polaroid, thundercats pickled farm-to-table pok pok snackwave flannel neutra 90's kale chips hot chicken.",
  phenomena: [antigrav, filler],
})

const viktor = new Pioneer({
  pioneerName: 'Viktor Schauberger',
  description: "Viktor Schauberger (30 June 1885 in Holzschlag, Upper Austria[1] – 25 September 1958 in Linz, Austria[1]) was an Austrian forest caretaker, naturalist, parascientist[2], philosopher, inventor and biomimicry experimenter. Schauberger developed his own ideas based on what he observed in nature. In Implosion magazine, a magazine released by Schauberger's family, he said that aeronautical and marine engineers had incorrectly designed the propeller. He stated: As best demonstrated by Nature in the case of the aerofoil maple-seed, today’s propeller is a pressure-screw and therefore a braking screw, whose purpose is to allow the heavy maple-seed to fall parachute-like slowly towards the ground and to be carried away sideways by the wind in the process. No bird has such a whirling thing on its head, nor a fish on its tail. Only man made use of this natural brake-screw for forward propulsion. As the propeller rotates, so does the resistance rise by the square of the rotational velocity. This is also a sign that this supposed propulsive device is unnaturally constructed and therefore out of place.",
  phenomena: [repulsine, filler],
})

const richard = new Pioneer({
  pioneerName: 'Richard Miethe',
  description: "Lorem ipsum dolor amet lo-fi post-ironic brunch, plaid keytar ethical quinoa crucifix iceland 8-bit hell of jianbing four loko. Prism listicle waistcoat kickstarter tbh air plant cloud bread squid whatever live-edge mixtape salvia chicharrones. Aesthetic vinyl quinoa flexitarian chartreuse messenger bag hell of four loko snackwave 3 wolf moon gluten-free chillwave plaid. Chicharrones fashion axe selfies small batch hot chicken air plant blue bottle roof party YOLO artisan swag mixtape lyft hexagon. Humblebrag hoodie glossier poutine chartreuse DIY, stumptown normcore quinoa woke street art. Normcore iPhone DIY crucifix master cleanse, aesthetic brunch ugh vape gochujang. Twee salvia polaroid, thundercats pickled farm-to-table pok pok snackwave flannel neutra 90's kale chips hot chicken.",
  phenomena: [filler],
})

////////////////////////  U S E R  ///////////////////////////

const nicholas = new User({
  userName: 'Nicholas Crofts',
  password: 'BallinOuttaControl',
})

const ellen = new User({
  userName: 'Ellen Drew',
  password: 'BallinOuttaControl',
})

const john = new User({
  userName: 'John Harmon',
  password: 'BallinOuttaControl',
})

const debbie = new User({
  userName: 'Debbie Alton',
  password: 'BallinOuttaControl',
})

//////////////////////////////////////////////////////////////


User.deleteMany()
  .then(() => {
      return User.insertMany([nicholas, ellen, john, debbie])
  })
  .then(() => {
      console.log('Done Seeding!')
      mongoose.connection.close()
    })

Pioneer.deleteMany()
  .then(() => {
      return Pioneer.insertMany([viktor, richard, tesla, horton])
  })
  .then(() => {
      console.log('Done Seeding!')
      mongoose.connection.close()
    })