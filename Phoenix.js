const {Creatures} = require("./Creatures.js");

class Phoenix extends Creatures {


    fly() {

        this.hunger -= 10;
        this.strength += 10;
        this.mood +=30;

        console.log(`~ ${this.name} takes to the skies!  The views are incedible but all this hard work makes for quite the apetite.`);

        return this;
    }


    reincarnate() {

        this.hunger -= 90;
        this.mood -=50;

        console.log(`~ Oh no! ${this.name} went up in flames.  Suddenly, a new phonenix bursts out from the ashes.`);
        
        return this;
    }

};

module.exports = { Phoenix };