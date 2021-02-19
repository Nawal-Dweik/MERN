class HardAlgorithm extends Effect{
   constructor(){
       super(2, "increase target's resilience by 3", "resilience", +3);
   } 

   play(ninja){
    ninja.resilience += this.magnitude;  
  }
}