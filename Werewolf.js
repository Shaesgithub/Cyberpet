
const {Creatures} = require("./Creatures.js");

class Werewolf extends Creatures {

    constructor(name, noise, fullmoon) {

        super (name, noise, fullmoon);
        this.noise = noise;
        this.fullmoon = fullmoon;
    }

    howl() {

        this.hunger -= 10;
        this.strength += 10;
        this.mood +=30;

        console.log(`${this.name} is happy to ${this.noise} at the full moon but ${this.noise}ing makes them hungry`);

        return this;
    }

    transform() {

        this.hunger -= 90;
        this.mood -=50;

        console.log(`oh no! ${this.name} has ${this.fullmoon} in front of the full moon and is angry`);
        
        return this;
    }

};

module.exports = {Werewolf};