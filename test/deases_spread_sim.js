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
    listOfPerson = [];
    constructor(numberOfPerson, numberOfDeases) {
        if (typeof (numberOfPerson) != "number" || typeof (numberOfDeases) != "number") {
            print("ERROR: the two properties need to be number");
            return;
        }
        if (numberOfDeases > numberOfPerson) {
            print("ERROR: number of deases exceed number of person");
            return;
        }
        for (i = 1; i < numberOfPerson; i++) {
            if (i < numberOfDeases) {
                this.listOfPerson.push(new Person(true));
            }
            else {
                this.listOfPerson.push(new Person(false));
            }
        }
    }
}

