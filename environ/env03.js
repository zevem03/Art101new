
let deathStarHealth = 100;
let attackPower = 25;

let pilots = ["Luke Skywalker", "Wedge Antilles", "Biggs Darklighter", "Jek Porkins"];

let leadXwing = {
    pilot: "Luke Skywalker",
    callSign: "Red Five",
    ship: "X-wing",
    torpedoes: 2,
    laserCharge: 100
};
$(document).ready(function () {
    $("#deathstar").click(function () {
        console.log("Attacking Death Star!");
        console.log("Lead pilot: " + leadXwing.pilot);
        console.log("Squadron: " + pilots.join(", "));
        deathStarHealth = deathStarHealth - attackPower;
        console.log("Death Star health: " + deathStarHealth + "%");
        $("h1").text("They're attacking!");
        $("p").text("Death Star health: " + deathStarHealth + "%");
    });
    $(".xwing").click(function () {

        let index = $(".xwing").index(this);


        let currentPilot = pilots[index];

        console.log(currentPilot + " ready for attack!");


        $(this).animate({ left: "+=50px" }, 500)
            .animate({ left: "-=50px" }, 500);
    });

    console.log("=== STAR WARS ATTACK SETUP ===");
    console.log("Variables:");
    console.log("  Death Star Health: " + deathStarHealth);
    console.log("  Attack Power: " + attackPower);
    console.log("Array of Pilots:", pilots);
    console.log("Lead X-wing Object:", leadXwing);
});