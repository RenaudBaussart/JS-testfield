class Person {
    constructor(isInfected) {
        if (typeof isInfected !== "boolean") {
            console.log("ERROR: the type is not a boolean");
            return;
        }
        this.infected = isInfected;
    }

    doesHeSpread(personTested) {
        if (!personTested.infected) {
            console.log("ERROR: this person was not infected");
            return false;
        } else {
            return Math.random() < 0.3;
        }
    }

    catchDisease() {
        this.infected = true;
    }
}

class Crowd {
    constructor(numberOfPerson, numberOfDiseases) {
        if (typeof numberOfPerson !== "number" || typeof numberOfDiseases !== "number") {
            console.log("ERROR: the two properties need to be numbers");
            return;
        }
        if (numberOfDiseases > numberOfPerson) {
            console.log("ERROR: number of diseases exceeds number of persons");
            return;
        }
        this.listOfPerson = [];
        for (let i = 0; i < numberOfPerson; i++) {
            this.listOfPerson.push(new Person(i < numberOfDiseases));
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
                console.log(`There are ${this.numberOfDiseases()} infected out of ${this.listOfPerson.length} persons!`);
            } else {
                console.log(`All of the ${this.listOfPerson.length} persons are infected!`);
                console.log(`Simulation ended after ${numberOfIteration} iterations/days.`);
                return;
            }
            for (let person of this.listOfPerson) {
                if (person.infected && person.doesHeSpread(person)) {
                    numberOfInfectedToSpread++;
                }
            }
            this.newInfected(numberOfInfectedToSpread);
            numberOfIteration++;
        }
        
    }
}

let test = new Crowd(20, 3);
test.LunchSim();