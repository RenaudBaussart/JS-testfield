class Person{
    constructor(isInfected){
        this.infected = isInfected;
    }

    static DoesHeSpreads( personeTested){
        if(personeTested.infected == false){
            return false
        }
        else{
            if(Math.random(1,100) > 30){
                return true
            }
            else{
                return false
            }
        }
    }
    CatchDeases() {
        this.infected = true
    }
}
