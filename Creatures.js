//MAIN CREATURES CLASS

class Creatures {
    constructor(name, noise) {

        this.name = name;
        this.noise = noise;
        this.health = 50;
        this.strength = 50;
        this.hunger = 50;
        this.mood = 50;
    }

    eat() {

        this.hunger += 20;
        this.health += 5;
        this.strength += 5;

        console.log(`~ ${this.name} thanks you for the food!`);

        console.log(`~ ${this.name}'s hunger is now ${this.hunger}`);
        console.log(`~ ${this.name}'s health is now ${this.health}`);
        console.log(`~ ${this.name}'s strength is now ${this.strength}`);
        
        return this
    }

    //These stats will show up in command line as a table
    status() {

        return console.table({
        name: this.name,
        noise: this.noise,
        health: this.health,
        strength: this.strength,
        hunger: this.hunger,
        mood: this.mood});

    }
};

module.exports = {Creatures};