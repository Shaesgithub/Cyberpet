
const {Creatures} = require("./Creatures.js");

class Pegasus extends Creatures {

    constructor(name, sky, life) {

        super (name, sky, life);
        this.sky = sky;
        this.life = life;
    }
    
    flight() {

        this.mood += 10
        this.hunger -= 20;
        
        console.log(`~ You let ${this.name} fly! ${this.name}'s mood is now ${this.mood} but make sure they don't fly away!`);

        return this;
    }

    immortality() {
        
        this.health += 1000;
        this.strength += 1000;
        console.log(`~ ${this.name}'s health and strength is ${this.health}+ & ${this.strength}+ because Pegasus are immortal! ${this.noise}!`);

        return this;
    }

};

module.exports = {Pegasus};