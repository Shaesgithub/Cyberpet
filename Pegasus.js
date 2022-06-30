
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
        
        console.log(`You let ${this.name} ${this.sky}! ${this.name}'s mood is now ${this.mood} but make sure they don't fly away!`);

        return this;
    }

    immortality() {
        
        this.health += 100;
        this.strength += 100;
        console.log(`${this.name}'s health and strength is ${this.health}+ & ${this.strength}+ because Pegasus are ${this.life}!`);

        return this;
    }

};

module.exports = {Pegasus};