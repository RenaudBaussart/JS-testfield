class Person{
    constructor(isInfected){
        if(typeof isInfected !== "boolean"){
            print("ERROR: the type is not a boolean so returned null")
            return null
        }
        this.infected = isInfected;
    }

    static DoesHeSpreads(personeTested){
        if(personeTested.infected == false){
            print("ERROR: this person was not infected")
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

