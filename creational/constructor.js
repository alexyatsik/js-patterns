/*function Hero(name, specialAbility) {
    this.name = name;
    this.specialAbility = specialAbility;

    this.getDetails = function() {
        return `${this.name} can ${this.specialAbility}`;
    }
}*/

class Hero {
    constructor(name, specialAbility) {
        this.name = name;
        this.specialAbility = specialAbility;

        this.getDetails = function() {
            return `${this.name} can ${this.specialAbility}`;
        }
    };
}

const parker = new Hero('Spider-man', 'Use net');

console.log(parker.getDetails());