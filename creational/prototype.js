const car = {
    noOfWheels: 4,

    start() {
        return 'started';
    },

    stop() {
        return 'stoped';
    },
};

const myCar = Object.create(car, { owner: { value: 'John' } });

console.log(myCar.start());