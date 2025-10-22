// declaring an array with name myCommutes
let myCommutes = ["drive", "UCSC taps bus",];
// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "Car",
    route: 1,
    print: "Mountain Lion",
    hasMiddleDoor: true,
    drivers: ["zev"],
};
let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[1] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";

$("#output").html(megaSentence);
