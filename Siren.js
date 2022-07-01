
const {Creatures} = require("./Creatures.js");

class Siren extends Creatures {
    
    sing() { 

        this.strength -= 20;
        this.mood +=20;

        console.log(`~ ${this.name} is a Siren and Sirens are happy to sing but be careful to not get hypnotized!`);

        return this;
    }

    swim() {
        
        this.health -= 10;
        this.hunger -= 10;
        this.mood +=50;

        console.log(`~ You let ${this.name} swim! ${this.name}'s mood is now at ${this.mood} ${this.noise}!`);

        return this;
    }

};

module.exports = {Siren};