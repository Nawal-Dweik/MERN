class PairProgramming extends Effect{
    constructor(){
        super(3, "increase target's power by 2", "power", +2);
    } 

    play(ninja){
        ninja.power += this.magnitude;  
      }
}