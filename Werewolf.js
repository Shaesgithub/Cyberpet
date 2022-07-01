
const {Creatures} = require("./Creatures.js");

class Werewolf extends Creatures {

    howl() {

        this.hunger -= 10;
        this.strength += 10;
        this.mood +=30;

        console.log(`~ ${this.name} is happy to howl at the full moon but howling makes them hungry ${this.noise}!`); 

        return this;
    }

    transform() {

        this.hunger -= 90;
        this.mood -=50;

        console.log(`~ oh no! ${this.name} has transformed in front of the full moon!`);
        
        return this;
    }

};



module.exports = {Werewolf};