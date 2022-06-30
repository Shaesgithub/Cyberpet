/*
Command Line Cyber Pet Project
Theme: Mythical Creatures
By: Shaun Billows & Cryshae Tucker
*/

//Imports subclasses from Creature List folder
const inquirer = require("inquirer");
const {Werewolf} = require("./Werewolf.js");
const {Siren} = require("./Siren.js");
const {Pegasus} = require("./Pegasus.js");
// const {} = require("./");
// const {} = require("./");
// const {} = require("./");

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
                name:"",
                value:""
            },
            {
                key:"5",
                name:"",
                value:""
            },
            {
                key:"6",
                name:"",
                value:""
            },
        ],
    });

    //Ask the user to create a name
    const { nameCreature } = await inquirer.prompt({
        message:"Give your Mythical creature a name",
        name: "nameCreature",
        type: "input",
    });

    //It will refer to the creature subclass chosen
    if(typeCreature == "Werewolf") myCreature = new Werewolf(nameCreature);
    else if(typeCreature == "Siren") myCreature = new Siren(nameCreature);
    else if(typeCreature == "") myCreature = new (nameCreature);

    userChoice();
};


// async function userChoice() {

//     const getMethodsOf = (obj) => {
//         const methods = {}
//         Object.getOwnPropertyNames( Object.getPrototypeOf(obj) ).forEach(methodName => {
//             methods[methodName] = obj[methodName]
//         })
//         return Object.keys(methods).slice(1)
//         }

//     const { choose } = await inquirer.prompt({
//         message:"What would you like your creature to do?",
//         name:"choose",
//         type:"list",
//         choices: getMethodsOf(myCreature).concat(["eats", "status"])
//         [  {
//             key:"1",
//             name:"Quit Game?",
//             value:"quit"
//         },
//     ],
//     });

    // if (choose == "status") {myCreature.status()}
    // if (choose == "eats") {myCreature.eats()}  

    // const { choose } = await inquirer.prompt({
    //     message:"What would you like your creature to do?",
    //     name:"choose",
    //     type:"list",
    //     choices:[
    //         {
    //             key:"1",
    //             name:"See your creatures status",
    //             value:"status"
    //         },
    //         {
    //             key:"2",
    //             name:"Feed your creature",
    //             value:"eat"
    //         },
    //         {
    //             key:"3",
    //             name:"Let them howl",
    //             value:"howl"
    //         },
    //         {
    //             key:"4",
    //             name:"There's a full moon?",
    //             value:"transform"
    //         },
    //         {
    //             key:"5",
    //             name:"Quit Game?",
    //             value:"quit"
    //         },
    //     ],
    // });



//     if (choose == "status") await myCreature.status();
//     if (choose == "eat") await myCreature.eat();
//     if (choose == "howl") await myCreature.howl();
//     if (choose == "transform") await myCreature.transform();
//     if (choose == "quit") { const yesNo = await quitConfirm();
//         if (yesNo) 
//         return;
//     }
//     myCreature.status();
//     userChoice()

// };

// async function quitConfirm() {

//     const { yesNo } = await inquirer.prompt({
//         message:" Do you want to quit the game?",
//         name: "yesNo",
//         type: "confirm"
//     });

    
//     if (yesNo == true) return true;
//     else return false;
// };









async function userChoice() {

    const getMethodsOf = (obj) => {
        const methods = {}
        Object.getOwnPropertyNames( Object.getPrototypeOf(obj) ).forEach(methodName => {
          methods[methodName] = obj[methodName]
        })
        return Object.keys(methods).slice(1)
      }

    const { choose } = await inquirer.prompt({
        message:"What would you like your creature to do?",
        name:"choose",
        type:"list",
        choices: getMethodsOf(myCreature).concat(["eats", "status"]),
    })

    // All 
    if (choose == "status") {
        myCreature.status()
    }
    if (choose == "eats") {
        myCreature.eats()
    }  
    // Warewolf
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
    // Phoenix
    // if (choose == "fly") {
    //     myCreature.fly()
    // }  
    // if (choose == "explode") {
    //     myCreature.explode()
    // }
    userChoice()
}
startGame();