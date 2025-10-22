let count = 0;
$("#needy-button").click(function () {
    count = count + 1;
    $("#needy-button").html("you clicked me " + count + " times");
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    $("#needy-button").css("background-color", randomColor);
});

$("#reset-button").click(function () {
    count = 0;
    $("#needy-button").html("click me");
    $("#needy-button").css("background-color", "");
});

