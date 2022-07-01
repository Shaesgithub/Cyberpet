const {Creatures} = require("./Creatures.js");

class Dragon extends Creatures {

    hunt() {

        this.hunger -= 10;
        this.strength += 10;
        this.mood +=10;

        console.log(`\n~ ${this.name} takes to the skies and within monents has disapeared off into the distance.  ${this.name} shortly returns carrying a large elephant in his mouth. ${this.noise}!\n`);

        return this;
    }


    breathFire() {

        this.hunger -= 20;
        this.mood += 10;

        console.log(`\n~ You let ${this.name} set a whole village ablaze. ${this.noise}!\n`);
        
        return this;
    }

};

module.exports = {Dragon};