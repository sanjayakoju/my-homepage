// my_car.js
module.exports.drive = function() {
    console.log("The car moves forward");
}

module.exports.turn = function(degrees) {
    console.log(`The car turns ${degrees} degrees`);
}

module.exports.brake = function() {
    console.log("The car stops");
}
