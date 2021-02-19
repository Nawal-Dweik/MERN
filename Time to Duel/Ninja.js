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