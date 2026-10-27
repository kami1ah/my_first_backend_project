//anything that relates to req and res SO it controls what is been sent
const Fruit = require('../models/FruitModel')


//  CREATING ROUTES '/'  = paths
const index = async (req, res) => {
    try {
    const fruits = await Fruit.showAll()  //showAll =
    res.status(200).send(fruits)        
    } catch(err) {
        res.status(500).send({ error: 'Server error'})
    }
}


// app.get('/fruits/:name', (req, res) => { 
//     const name = req.params.name.toLowerCase()  //toLowerCase converts any input into a lower case which allows uniformty so it can also always give a responce
//     const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name)  // .find finds the first match item and checks against the input the user passed
    
//     if (fruit == undefined) {
//         res.status(404).send('The fruit does not exist')
//     }
//     else {
//         res.status(200).send(fruit)
//     }
// })  
//ABOVE IS REFACTORED AS A CONTROLLER TO BELOW 
const show = async (req, res) => { 
    const name = req.params.name.toLowerCase()  //toLowerCase converts any input into a lower case which allows uniformty so it can also always give a responce


    try {
        const fruit = await Fruit.show(name)
        res.status(200).send(fruit)
    } catch(err) {
        res.status(404).send({error: err})
    }
}

const create = async (req, res) => {
    console.log(req.body)
    try {
        const newFruit = await Fruit.create(req.body)   //req.body inputting information into the json file, the body of the json sSO the requesting is expecting something
        res.status(201).send(newFruit)
    } catch(err) {
        res.status(409).send({error: err })
    }
}

const update = async (req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const fruit = await Fruit.show(name)
        const result = await fruit.update(req.body)

        res.status(200).send(result)

    } catch(err) {
        res.status(404).send({error: err})
    }
}

const destroy = async (req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const fruit = await Fruit.show(name)
        await fruit.destroy()

        res.sendStatus(204)
    } catch(err) {
        res.status(404).send({ error: err })
    }
}


module.exports = {index, show, create, update, destroy }


