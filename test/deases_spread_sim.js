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

