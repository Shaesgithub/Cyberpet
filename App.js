/*
Command Line Cyber Pet Project
Theme: Mythical Creatures
By: Shaun Billows & Cryshae Tucker
*/

const { funkyLog, getMethodsOf, logAsciiArt } = require('./helpers')


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
        
        message:"Pick a mythical creature :",
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
        message:"Give your mythical creature a name :",
        name: "nameCreature",
        type: "input",
    });

    //Ask the user what noise their pet makes
    const { noise } = await inquirer.prompt({
        message:"What noise does your creature make? :",
        name: "noise",
        type: "input",
    });

    //It will refer to the creature subclass chosen
    if(typeCreature == "Werewolf") myCreature = new Werewolf(nameCreature, noise);
    else if(typeCreature == "Siren") myCreature = new Siren(nameCreature, noise);
    else if(typeCreature == "Pegasus") myCreature = new Pegasus(nameCreature, noise);
    else if(typeCreature == "Centaur") myCreature = new Centaur(nameCreature, noise);
    else if(typeCreature == "Phoenix") myCreature = new Phoenix(nameCreature, noise);
    else if(typeCreature == "Dragon") myCreature = new Dragon(nameCreature, noise);

    
    // display creature ascii art
    logAsciiArt(typeCreature)
    
    // Display delayed text
    funkyLog('\nThis is your mythical creature! Click the up or down arrows to continue!\n');

    userChoice();

};


async function userChoice() {

    // Check if cyberpet is alive
    if (myCreature.health <= 0 || myCreature.hunger <= 0) {
        let stat;
        if (myCreature.health < 0) {stat = 'health'}
        if (myCreature.hunger < 0) {stat = 'hunger'}
        console.log(`Oh no, your ${stat} level has reached 0.  ${myCreature.name} has gone to a better place.\n`)
        playAgain()
        return 0
    }
    //Ask the user what they want to do with their creature
    const { choose } = await inquirer.prompt({
        message:"What would you like your creature to do?",
        name:"choose",
        type:"list",
        choices: getMethodsOf(myCreature).concat(["eat", "status", "pet", "quit"]),
    })

    // All 
    if (choose == "pet") {myCreature.pet()}
    if (choose == "eat") {myCreature.eat()}
    if (choose == "status") { myCreature.status()}
    // Werewolf
    if (choose == "howl") {myCreature.howl()}
    if (choose == "transform") {myCreature.transform()}
    // Siren
    if (choose == "sing") {myCreature.sing()}
    if (choose == "swim") {myCreature.swim()}
    // Pegasus
    if (choose == "flight") {myCreature.flight()}
    if (choose == "immortality") {myCreature.immortality()}
    // Centaur
    if (choose == "gallop") {myCreature.gallop()}
    if (choose == "targetPractice") {myCreature.targetPractice()}
    // Phoenix
    if (choose == "fly") {myCreature.fly()}
    if (choose == "reincarnate") {myCreature.reincarnate()}
    // Dragon
    if (choose == "hunt") {myCreature.hunt()}
    if (choose == "breathFire") {myCreature.breathFire()}
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
            message: "Would you like to play again? : "
        }
    ])
    if (replay.confirmation) {
        startGame()
    } else {
        quit()
    }
}

const quit = () => {
    console.log("\nThank you for playing our game.")

    // play credits
    logAsciiArt('credits')
}

startGame()
