class Person {
    infected = false;
    spreadrate = 0.3;
    constructor(isInfected, spreadrateIn = 0.3) {
        if (typeof isInfected !== "boolean") {
            console.log("ERROR: the type is not a boolean");
            return;
        }
        if(typeof spreadrateIn !== "number"){
            console.log("ERROR: the type is not a boolean");
            return
        }
        if(spreadrateIn > 1 || spreadrateIn < 0){
            console.log("ERROR: the spread rate is not valid (1 > 0)")
            return
        }
        this.infected = isInfected;
        this.spreadrate = spreadrateIn
    }

    doesHeSpread(personTested) {
        if (!personTested.infected) {
            console.log("ERROR: this person was not infected");
            return false;
        } else {
            return Math.random() < this.spreadrate;
        }
    }

    catchDisease() {
        this.infected = true;
    }
}

class Crowd {
    constructor(numberOfPerson, numberOfDiseases ,spreadrateIn) {
        if (typeof numberOfPerson !== "number" || typeof numberOfDiseases !== "number") {
            console.log("ERROR: the two properties need to be numbers");
            return;
        }
        if (numberOfDiseases > numberOfPerson) {
            console.log("ERROR: number of diseases exceeds number of persons");
            return;
        }
        if(typeof spreadrateIn !== "number"){
            console.log("ERROR: the type is not a boolean");
            return
        }
        if(spreadrateIn > 1 || spreadrateIn < 0){
            console.log("ERROR: the spread rate is not valid (1 > 0)")
            return
        }
        this.listOfPerson = [];
        for (let i = 0; i < numberOfPerson; i++) {
            this.listOfPerson.push(new Person(i < numberOfDiseases),spreadrateIn);
        }
    }

    numberOfDiseases() {
        return this.listOfPerson.filter(person => person.infected).length;
    }

    newInfected(numberOfNewPersonInfected) {
        let count = 0;
        this.listOfPerson = this.listOfPerson.map(person => {
            if (!person.infected && count < numberOfNewPersonInfected) {
                count++;
                person.catchDisease();
            }
            return person;
        });
    }

    LunchSim() {
        let numberOfIteration = 0;
        while (numberOfIteration < (this.listOfPerson.length * 10)) {
            let numberOfInfectedToSpread = 0;
            if (this.numberOfDiseases() < this.listOfPerson.length) {
                //console.log(`There are ${this.numberOfDiseases()} infected out of ${this.listOfPerson.length} persons!`);
            } else {
                //console.log(`All of the ${this.listOfPerson.length} persons are infected!`);
                //console.log(`Simulation ended after ${numberOfIteration} iterations/days.`);
                return;
            }
            for (let person of this.listOfPerson) {
                if (person.infected && person.doesHeSpread(person)) {
                    numberOfInfectedToSpread++;
                }
            }
            this.newInfected(numberOfInfectedToSpread);
            numberOfIteration++;
            setTimeout(2000);
        }
    }
}
async function SimulationDomLunch(){
    const nbrpeople = document.getElementById("nbr_people_toolbox").value;
    const nbrinfected = document.getElementById("nbr_infected_toolbox").value;
    const spreadrate = document.getElementById("spread_rate_toolbox").value;
    const simCrowd = new Crowd(nbrpeople,nbrinfected)
}
function changeDisplayOfNumberPeopleInfected(newString){
    document.getElementByclass("display_text").textContent = newString
}
