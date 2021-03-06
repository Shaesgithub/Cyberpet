const {Creatures} = require("../Creatures.js");

class Centaur extends Creatures {

    gallop() {

        this.hunger -= 20;
        this.strength += 10;
        this.mood +=30;

        console.log(`\n~ ${this.name} charges into the forest chasing who knows what! ${this.noise}!\n`);

        return this;
    }


    targetPractice() {

        this.hunger -= 10;
        this.mood +=50;
        this.health +=10;

        console.log(`\n~ You line up a bunch of hay stacks.  ${this.name} draws their trusty bow, takes aim and hits every single one.  ${this.name} never misses. ${this.noise}!\n`);
        
        return this;
    }

};


module.exports = { Centaur };