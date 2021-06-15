const Potion = require('../lib/Potion');
const Character = require('../lib/Character');

class Enemy extends Character {
    constructor(name, weapon) {
        //parent constructor to reference character/parent object
        super(name);

        this.weapon = weapon;
        this.potion = new Potion();
    }
    
    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };
}

module.exports = Enemy;