
const {Creatures} = require("../Creatures.js");

class Werewolf extends Creatures {

    howl() {

        this.hunger -= 10;
        this.strength += 10;
        this.mood +=30;

        console.log(`\n~ ${this.name} is happy to howl at the full moon but howling makes them hungry ${this.noise}!\n`); 

        return this;
    }

    transform() {

        this.hunger -= 90;
        this.mood -=50;

        console.log(`\n~ oh no! ${this.name} has transformed in front of the full moon!\n`);
        
        return this;
    }

};



module.exports = {Werewolf};