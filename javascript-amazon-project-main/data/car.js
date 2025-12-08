class Car {
    #brand;
    #model;
    speed = 0;
    isTrunkOpen = false;

    constructor(carDetails) {
        this.brand = carDetails.brand;
        this.model = carDetails.model;
    }

    displayInfo() {
        const trunk = this.isTrunkOpen ? 'Open' : 'Closed';
        console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed}km/h Trunk: ${trunk}`);
    }

    go() {
        if (this.speed < 200 && !this.isTrunkOpen) {
            this.speed += 5;
        } 
    }

    brake() {
        if (this.speed > 0) {
            this.speed -= 5;
        }
    }

    openTrunk() {
        if (this.speed > 0) {
            return;
        }
        this.isTrunkOpen = true;
    }

    closeTrunk() {
        this.isTrunkOpen = false;
    }
}

class RaceCar extends Car {
    acceleration;

    constructor(carDetails) {
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go() {
        if (this.speed < 300) {
            this.speed += this.acceleration;
        }
        if (this.speed > 300) {
            this.speed = 300;
        }
    }

    openTrunk() {
        return;
    }

    closeTrunk() {
        return;
    }

}

const car1 = new Car({brand:'Toyota', model:'Corolla'});
console.log(car1);
const car2 = new Car({brand:'Tesla', model:'Model 3'});
console.log(car2);

// console.log(car1.displayInfo());

/* car1.brake();
// car1.openTrunk();
car1.go();
car1.go();

car2.go();
console.log(car1);
console.log(car2);

car2.go();
car2.brake();
car2.brake();

console.log(car2); */

car1.brake();
car1.displayInfo();

// Trunk should not open since the car is moving.
car1.openTrunk();
car1.displayInfo();

car2.displayInfo();
car2.go();
car2.brake();
car2.brake();
car2.displayInfo();

// Trunk should open since the car is not moving.
car2.openTrunk();
// Car should not go since the trunk is open.
car2.go();
car2.displayInfo();

const raceCar = new RaceCar({brand:'McLaren', model:'F1', acceleration:20});

raceCar.displayInfo();

raceCar.go();
raceCar.displayInfo();

raceCar.go();
raceCar.brake(); // 35

raceCar.openTrunk();
raceCar.displayInfo();
raceCar.closeTrunk();
