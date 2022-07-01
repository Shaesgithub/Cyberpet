
const { Creatures } = require("./Creatures.js");

class Pegasus extends Creatures {
    
    flight() {

        this.mood += 10
        this.hunger -= 20;
        
        console.log(`\n~ You let ${this.name} fly! ${this.name}'s mood is now ${this.mood} but make sure they don't fly away!\n`);

        return this;
    }

    immortality() {
        
        this.health += 1000;
        this.strength += 1000;
        console.log(`\n~ ${this.name}'s health and strength is ${this.health}+ & ${this.strength}+ because Pegasus are immortal! ${this.noise}!\n`);

        return this;
    }

};

module.exports = { Pegasus };