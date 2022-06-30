//MAIN CREATURES CLASS

class Creatures {
    constructor(name) {

        this.name = name;
        this.health = 50;
        this.strength = 50;
        this.hunger = 50;
        this.mood = 50;
    }

    eats() {

        this.hunger += 20;
        this.health += 5;
        this.strength += 5;

        console.log(`${this.name}'s hunger is ${this.hunger}`);
        console.log(`${this.name}'s health is ${this.health}`);
        console.log(`${this.name}'s strength is ${this.strength}`);
        
        return this
    }

    //These stats will show up in command line as a table
    status() {

        return console.table({
        name: this.name,
        health: this.health,
        strength: this.strength,
        hunger: this.hunger,
        mood: this.mood});

    }
};

module.exports = {Creatures};