class UnhandledPromiseRejection extends Effect{
    constructor(){
        super(1, "reduce target's resilience by 2", "resilience", -2);
    } 

    play(ninja){
        ninja.resilience += this.magnitude;  
      }
}