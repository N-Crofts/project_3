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

const tower = new Phenomenon({
  title: 'The Wardenclyffe Tower Project',
  description: "“Electric power is everywhere, present in unlimited quantities and can drive the world’s machinery without the need of coal, oil, gas or any other fuels.” – Nikola Tesla (1856-1943). Multi-talented Tesla cut across many disciplinary boundaries. His genius gave rise to a number of world-changing inventions. One of his most famous experiments /inventions was the Wardenclyffe Tower Project. It was Tesla’s attempt to provide everyone on the globe with free energy through harnessing electricity from the Earth’s ionosphere by means of the towers. Without wires the towers could transmit the harnessed electricity to ground-level areas requiring it… However, Tesla’s funding was stopped. His equipment and lab was burned down together with the related intellectual property because it posed a threat to undercutting the cost of the conventional electricity grid system. If Tesla’s Wardenclyffe Tower Project had been allowed to flourish and not be destroyed then today we could well be living in a utopia. Tesla died a poverty-stricken lonely and forgotten man in New York City.",
})

const arnold = new Phenomenon({
  title: 'The Kenneth Arnold Sighting',
  description: "Looking at the famous crescentic flying wing illustrated in his 1950 pamphlet and the 1952 book (an artist’s rendering of a wooden model Arnold said he made for the AAF) many have assumed that this explains an early use of the phrase “somewhat bat-shaped”, but this is a misunderstanding based on a failure to carefully examine date order. The flying wing model represents only one of the objects, and Arnold’s own first realisation of its unique shape postdates by at least five weeks his use of that phrase, which he used only in the context of his earliest “disc” and “saucer” descriptions.",
})

const antigrav = new Phenomenon({
  title: 'Antigravity',
  description: "In 1956, the aviation trade publication Interavia reported that Thomas Townsend Brown had made substantial progress in anti-gravity or electro-gravitic propulsion research. Top U.S. aerospace companies had also become involved in such research which may have become a classified subject by 1957. Though the effect he discovered has been proven to exist by many others, Brown’s work was controversial because others and even he himself believed that this effect could explain the existence and operation of unidentified flying objects (UFOs). Brown’s research has since become something of a popular pursuit around the world, with amateur experimenters replicating his early experiments in the form of “lifters” powered by high-voltage.",
})

const repulsine = new Phenomenon({
  title: 'Repulsine',
  description: "Lorem ipsum dolor amet lo-fi post-ironic brunch, plaid keytar ethical quinoa crucifix iceland 8-bit hell of jianbing four loko. Prism listicle waistcoat kickstarter tbh air plant cloud bread squid whatever live-edge mixtape salvia chicharrones. Aesthetic vinyl quinoa flexitarian chartreuse messenger bag hell of four loko snackwave 3 wolf moon gluten-free chillwave plaid. Chicharrones fashion axe selfies small batch hot chicken air plant blue bottle roof party YOLO artisan swag mixtape lyft hexagon. Humblebrag hoodie glossier poutine chartreuse DIY, stumptown normcore quinoa woke street art. Normcore iPhone DIY crucifix master cleanse, aesthetic brunch ugh vape gochujang. Twee salvia polaroid, thundercats pickled farm-to-table pok pok snackwave flannel neutra 90's kale chips hot chicken.",
})

const schriever = new Phenomenon({
  title: 'The Schriever-Habermohl Project(s)',
  description: "The best known of these projects is usually referred to as the Schriever-Habermohl project although it is by no means clear that these were the individuals in charge of the project. Rudolf Schriever was an engineer and test pilot. Less is known about Otto Habermohl but certainly he was an engineer. This project was centered in Prag, at the Prag-Gbell airport (l)(2). Actual construction work began somewhere between 1941 and 1943 (3)(4).This was originally a Luftwaffe project which received technical assistance from the Skoda Works at Prag and at a Skoda division at Letov (5) and perhaps elsewhere (6). Other firms participating in the project according to Epp were the Junkers firm at Oscheben and Bemburg, the Wilhelm Gustloff firm at Weimarand the Kieler Leichtbau at Neubrandenburg (7). This project started as a project of the Luftwaffe, sponsored by second-in-command, Ernst Udet. It then fell under the control of Speer's Armament Ministry at which time it was administered by engineer Georg Klein. Finally, probably sometime in 1944, this project came under the control of the SS, specifically under the purview of General Hans Kammler (8). According to his own words, Georg Klein saw this device fly on February 14, 1945 (9). This may have been the first official flight, but it was not the first flight made by this device. According to one witness, a saucer flight occurred as early as August or September of 1943 at this facility. The eyewitness was in flight-training at the Prag-Gbell facility when he saw a short test flight of such a device. He states that the saucer was 5 to6 meters in diameter (about 15 to 18 feet in diameter) and about as tall as a man, with an outer border of 30-40 centimeters. It was 'aluminum' in color and rested on four thin, long legs. The flight distance observed was about 300 meters at low level of one meter in altitude. The witness was 200 meters from the event and one of many students there at the time (10).",
})

const cold = new Phenomenon({
  title: 'Cold Fusion',
  description: "Eugene Mallove was a notable proponent and supporter of research into cold fusion. He authored the book Fire from Ice, which details the 1989 report of table-top cold fusion from Stanley Pons and Martin Fleischmann at the University of Utah. The book claims the team did produce “greater-than-unity” output energy in an experiment, which supposedly was successfully replicated on several occasions. Mallove claims that the results were suppressed through an organized campaign of ridicule from mainstream physicists. He was fatally beaten May 14, 2004 in Norwich, Connecticut by an unknown assailant. His violent death was suspected by some to be related to the nature of his work.",
})

const quake = new Phenomenon({
  title: 'The Earthquake Machine',
  description: "At one point while experimenting with mechanical oscillators, Nikola Tesla allegedly generated a resonance of several buildings causing complaints to the police. As the speed grew he hit the resonance frequency of his own building and belatedly realizing the danger he was forced to apply a sledge hammer to terminate the experiment, just as the astonished police arrived. The Discovery Channel’s popular MythBusters show examined Tesla’s claim that he had created an “Earthquake Machine” in their 60th episode. They tested the physical phenomenon known as mechanical resonance on a traffic bridge, which today are built to withstand such forces. While a single I-beam of steel was deflected several feet in each direction by their oscillator, and they reportedly felt the bridge shaking many yards away, there were no “earth shattering” effects. It is worth indicating that, in the time of the event undertaken by Tesla, buildings were not built to withstand such resonance.",
})

const chrono = new Phenomenon({
  title: 'Chronovision',
  description: "Father Ernetti is fascinating not just because of his work as an exorcist in the Venice region, but more especially because of his work on the “chronovision”. In the 1960s he is said to have claimed he constructed a time viewer of sorts in the 1950s, as part of a group that supposedly included Nobel Laureate Enrico Fermi and Wernher von Braun. The machine was called the Chronovisor, and could allegedly see and hear events of the past. According to an explanation by Ernetti, the luminous energy and sound that objects emanate are recorded in their environment, such that proper use of the chronovisor could reconstruct from said energy the images and sounds of a specific set of events from the past. Through the viewing screen of the chronovisor Father Ernetti claimed to have witnessed a performance in Rome in 169 BC of the now-lost tragedy, Thyestes, by the father of Latin poetry, Quintus Ennius. He also claimed to have witnessed Christ dying on the cross. On his death-bed in 1994, Father Ernetti said that he attended a meeting of all the people involved in the chronovision at the Vatican during which the only existing machine was destroyed.",
})

/////////////////////  P I O N E E R   ////////////////////////

const horton = new Pioneer({
  pioneerName: 'The Horton Brothers',
  description: "Walter Horten (born 13 November 1913; died 9 December 1998 in Baden-Baden, Germany) and Reimar Horten (born 12 March 1915; died 14 March 1994 in Villa General Belgrano, Argentina), sometimes credited as the Horten Brothers, were German aircraft pilots and enthusiasts. Although they had little, if any, formal training in aeronautics or related fields, the Hortens designed some of the most revolutionary aircraft of the 1940s, including the world's first jet-powered flying wing, the Horten Ho 229.",
  phenomena: [filler, arnold],
})

const tesla = new Pioneer({
  pioneerName: 'Nikola Tesla',
  description: "Lorem ipsum dolor amet lo-fi post-ironic brunch, plaid keytar ethical quinoa crucifix iceland 8-bit hell of jianbing four loko. Prism listicle waistcoat kickstarter tbh air plant cloud bread squid whatever live-edge mixtape salvia chicharrones. Aesthetic vinyl quinoa flexitarian chartreuse messenger bag hell of four loko snackwave 3 wolf moon gluten-free chillwave plaid. Chicharrones fashion axe selfies small batch hot chicken air plant blue bottle roof party YOLO artisan swag mixtape lyft hexagon. Humblebrag hoodie glossier poutine chartreuse DIY, stumptown normcore quinoa woke street art. Normcore iPhone DIY crucifix master cleanse, aesthetic brunch ugh vape gochujang. Twee salvia polaroid, thundercats pickled farm-to-table pok pok snackwave flannel neutra 90's kale chips hot chicken.",
  phenomena: [filler, tower, quake],
})

const viktor = new Pioneer({
  pioneerName: 'Viktor Schauberger',
  description: "Viktor Schauberger (30 June 1885 in Holzschlag, Upper Austria[1] – 25 September 1958 in Linz, Austria[1]) was an Austrian forest caretaker, naturalist, parascientist[2], philosopher, inventor and biomimicry experimenter. Schauberger developed his own ideas based on what he observed in nature. In Implosion magazine, a magazine released by Schauberger's family, he said that aeronautical and marine engineers had incorrectly designed the propeller. He stated: As best demonstrated by Nature in the case of the aerofoil maple-seed, today’s propeller is a pressure-screw and therefore a braking screw, whose purpose is to allow the heavy maple-seed to fall parachute-like slowly towards the ground and to be carried away sideways by the wind in the process. No bird has such a whirling thing on its head, nor a fish on its tail. Only man made use of this natural brake-screw for forward propulsion. As the propeller rotates, so does the resistance rise by the square of the rotational velocity. This is also a sign that this supposed propulsive device is unnaturally constructed and therefore out of place.",
  phenomena: [filler, repulsine],
})

const richard = new Pioneer({
  pioneerName: 'Richard Miethe',
  description: "Lorem ipsum dolor amet lo-fi post-ironic brunch, plaid keytar ethical quinoa crucifix iceland 8-bit hell of jianbing four loko. Prism listicle waistcoat kickstarter tbh air plant cloud bread squid whatever live-edge mixtape salvia chicharrones. Aesthetic vinyl quinoa flexitarian chartreuse messenger bag hell of four loko snackwave 3 wolf moon gluten-free chillwave plaid. Chicharrones fashion axe selfies small batch hot chicken air plant blue bottle roof party YOLO artisan swag mixtape lyft hexagon. Humblebrag hoodie glossier poutine chartreuse DIY, stumptown normcore quinoa woke street art. Normcore iPhone DIY crucifix master cleanse, aesthetic brunch ugh vape gochujang. Twee salvia polaroid, thundercats pickled farm-to-table pok pok snackwave flannel neutra 90's kale chips hot chicken.",
  phenomena: [filler],
})

const rudolf = new Pioneer({
  pioneerName: 'Rudolf Schriever',
  description: "Lorem ipsum dolor amet lo-fi post-ironic brunch, plaid keytar ethical quinoa crucifix iceland 8-bit hell of jianbing four loko. Prism listicle waistcoat kickstarter tbh air plant cloud bread squid whatever live-edge mixtape salvia chicharrones. Aesthetic vinyl quinoa flexitarian chartreuse messenger bag hell of four loko snackwave 3 wolf moon gluten-free chillwave plaid. Chicharrones fashion axe selfies small batch hot chicken air plant blue bottle roof party YOLO artisan swag mixtape lyft hexagon. Humblebrag hoodie glossier poutine chartreuse DIY, stumptown normcore quinoa woke street art. Normcore iPhone DIY crucifix master cleanse, aesthetic brunch ugh vape gochujang. Twee salvia polaroid, thundercats pickled farm-to-table pok pok snackwave flannel neutra 90's kale chips hot chicken.",
  phenomena: [filler, schriever],
})

const thomas = new Pioneer({
  pioneerName: 'Thomas Townsend Brown',
  description: "Lorem ipsum dolor amet lo-fi post-ironic brunch, plaid keytar ethical quinoa crucifix iceland 8-bit hell of jianbing four loko. Prism listicle waistcoat kickstarter tbh air plant cloud bread squid whatever live-edge mixtape salvia chicharrones. Aesthetic vinyl quinoa flexitarian chartreuse messenger bag hell of four loko snackwave 3 wolf moon gluten-free chillwave plaid. Chicharrones fashion axe selfies small batch hot chicken air plant blue bottle roof party YOLO artisan swag mixtape lyft hexagon. Humblebrag hoodie glossier poutine chartreuse DIY, stumptown normcore quinoa woke street art. Normcore iPhone DIY crucifix master cleanse, aesthetic brunch ugh vape gochujang. Twee salvia polaroid, thundercats pickled farm-to-table pok pok snackwave flannel neutra 90's kale chips hot chicken.",
  phenomena: [filler, antigrav],
})

const eugene = new Pioneer({
  pioneerName: 'Eugene Mallove',
  description: "Lorem ipsum dolor amet lo-fi post-ironic brunch, plaid keytar ethical quinoa crucifix iceland 8-bit hell of jianbing four loko. Prism listicle waistcoat kickstarter tbh air plant cloud bread squid whatever live-edge mixtape salvia chicharrones. Aesthetic vinyl quinoa flexitarian chartreuse messenger bag hell of four loko snackwave 3 wolf moon gluten-free chillwave plaid. Chicharrones fashion axe selfies small batch hot chicken air plant blue bottle roof party YOLO artisan swag mixtape lyft hexagon. Humblebrag hoodie glossier poutine chartreuse DIY, stumptown normcore quinoa woke street art. Normcore iPhone DIY crucifix master cleanse, aesthetic brunch ugh vape gochujang. Twee salvia polaroid, thundercats pickled farm-to-table pok pok snackwave flannel neutra 90's kale chips hot chicken.",
  phenomena: [filler, cold],
})

const father = new Pioneer({
  pioneerName: 'Marcello Pellegrino Ernetti',
  description: "Lorem ipsum dolor amet lo-fi post-ironic brunch, plaid keytar ethical quinoa crucifix iceland 8-bit hell of jianbing four loko. Prism listicle waistcoat kickstarter tbh air plant cloud bread squid whatever live-edge mixtape salvia chicharrones. Aesthetic vinyl quinoa flexitarian chartreuse messenger bag hell of four loko snackwave 3 wolf moon gluten-free chillwave plaid. Chicharrones fashion axe selfies small batch hot chicken air plant blue bottle roof party YOLO artisan swag mixtape lyft hexagon. Humblebrag hoodie glossier poutine chartreuse DIY, stumptown normcore quinoa woke street art. Normcore iPhone DIY crucifix master cleanse, aesthetic brunch ugh vape gochujang. Twee salvia polaroid, thundercats pickled farm-to-table pok pok snackwave flannel neutra 90's kale chips hot chicken.",
  phenomena: [filler, chrono],
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
      return Pioneer.insertMany([viktor, richard, tesla, horton, rudolf, thomas, eugene, father])
  })
  .then(() => {
      console.log('Done Seeding!')
      mongoose.connection.close()
    })