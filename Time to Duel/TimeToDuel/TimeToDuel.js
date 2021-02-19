class Ninja{
    constructor(cost, power, resilience){
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }

    attack(ninja){
    ninja.power = 0;
    }
}

class RedBeltNinja extends Ninja{
    constructor(){
        super(3, 3, 4);
}
}

class BlackBeltNinja extends Ninja{
    constructor(){
        super(4, 5, 4);
    }
}

class Effect{
    constructor(cost, text, stat, magnitude){
    this.cost = cost;
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
    }

}

class HardAlgorithm extends Effect{
    constructor(){
        super(2, "increase target's resilience by 3", "resilience", +3);
    } 
 
    play(ninja){
     ninja.resilience += this.magnitude;  
   }
 }

 class PairProgramming extends Effect{
    constructor(){
        super(3, "increase target's power by 2", "power", +2);
    } 

    play(ninja){
        ninja.power += this.magnitude;  
      }
}

class UnhandledPromiseRejection extends Effect{
    constructor(){
        super(1, "reduce target's resilience by 2", "resilience", -2);
    } 

    play(ninja){
        ninja.resilience += this.magnitude;  
      }
}


const redNinja = new RedBeltNinja();

console.log("Red Ninja power: "+redNinja.power);
console.log("Red Ninja resilience: "+redNinja.resilience);
console.log("Red Ninja cost: "+redNinja.cost);

const hardAlgorithm = new HardAlgorithm();

hardAlgorithm.play(redNinja);
console.log("Red Ninja after play hard algorithm: "+redNinja.resilience);
const blackNinja = new BlackBeltNinja();

const unhandled = new UnhandledPromiseRejection();

unhandled.play(redNinja);
console.log("Red Ninja after play UnhandledPromiseRejection: "+redNinja.resilience);
const pairProgramming = new PairProgramming();
console.log("Red Ninja after play PairProgramming: "+redNinja.resilience);
pairProgramming.play(redNinja);

redNinja.attack(blackNinja);