/*
Command Line Cyber Pet Project
Theme: Mythical Creatures
By: Shaun Billows & Cryshae Tucker
*/

//Imports subclasses
const inquirer = require("inquirer");
const {Werewolf} = require("./Werewolf.js");
const {Siren} = require("./Siren.js");
const {Pegasus} = require("./Pegasus.js");
const {Centaur} = require("./Centaur");
const {Phoenix} = require("./Phoenix");
const {Dragon} = require("./Dragon");

let myCreature;

async function startGame() {

    //Ask the user to pick from a list of creatures
    const { typeCreature } = await inquirer.prompt({
        message:"Pick a creature",
        name: "typeCreature",
        type: "list",
        choices:[
            {
                key:"1",
                name:"Werewolf",
                value:"Werewolf"
            },
            {
                key:"2",
                name:"Siren",
                value:"Siren"
            },
            {
                key:"3",
                name:"Pegasus",
                value:"Pegasus"
            },
            {
                key:"4",
                name:"Centaur",
                value:"Centaur"
            },
            {
                key:"5",
                name:"Phoenix",
                value:"Phoenix"
            },
            {
                key:"6",
                name:"Dragon",
                value:"Dragon"
            },
        ],
    });

    //Ask the user to create a name
    const { nameCreature } = await inquirer.prompt({
        message:"Give your mythical creature a name",
        name: "nameCreature",
        type: "input",
    });

    //It will refer to the creature subclass chosen
    if(typeCreature == "Werewolf") myCreature = new Werewolf(nameCreature);
    else if(typeCreature == "Siren") myCreature = new Siren(nameCreature);
    else if(typeCreature == "Pegasus") myCreature = new Pegasus(nameCreature);
    else if(typeCreature == "Centaur") myCreature = new Centaur(nameCreature);
    else if(typeCreature == "Phoenix") myCreature = new Phoenix(nameCreature);
    else if(typeCreature == "Dragon") myCreature = new Dragon(nameCreature);

    userChoice();
};

async function userChoice() {

    // Check if cyberpet is alive
    if (myCreature.health <= 0 || myCreature.hunger <= 0) {
        console.log(`${myCreature.name} has gone to a better place.`)
        playAgain()
        return 0
    }
    //Ask the user what they want to do with their creature
    const { choose } = await inquirer.prompt({
        message:"What would you like your creature to do?",
        name:"choose",
        type:"list",
        choices: getMethodsOf(myCreature).concat(["eat", "status","quit"]),
    })

    // All 
    if (choose == "eat") {
        myCreature.eat()
    }
    if (choose == "status") {
        myCreature.status()
    }
    // Werewolf
    if (choose == "howl") {
        myCreature.howl()
    }
    if (choose == "transform") {
        myCreature.transform()
    }
    // Siren
    if (choose == "sing") {
        myCreature.sing()
    }
    if (choose == "swim") {
        myCreature.swim()
    }
    // Pegasus
    if (choose == "flight") {
        myCreature.flight()
    }
    if (choose == "immortality") {
        myCreature.immortality()
    }
    // Centaur
    if (choose == "gallop") {
        myCreature.gallop()
    }
    if (choose == "targetPractice") {
        myCreature.targetPractice()
    }
    // Phoenix
    if (choose == "fly") {
        myCreature.fly()
    }
    if (choose == "reincarnate") {
        myCreature.reincarnate()
    }
    // Dragon
    if (choose == "hunt") {
        myCreature.hunt()
    }
    if (choose == "breathFire") {
        myCreature.breathFire()
    }
    // quit
    if (choose =="quit") {
        quit()
        return 0
    }
    userChoice()
}

//Ask the user if they want to play again
const playAgain = async () => {
    const replay = await inquirer.prompt([
        {
            type: "confirm",
            name: "confirmation",
            message: "Would you like to play again? (Y/N) : "
        }
    ])
    if (replay.confirmation) {
        startGame()
    } else {
        quit()
    }
}

const quit = () => {
    console.log("Thank you for playing our game.")
}


const getMethodsOf = (obj) => {
    const methods = {}
    Object.getOwnPropertyNames( Object.getPrototypeOf(obj) ).forEach(methodName => {
      methods[methodName] = obj[methodName]
    })
    return Object.keys(methods).slice(1)
}

startGame();

module.exports = {startGame, userChoice, playAgain, quit, getMethodsOf};