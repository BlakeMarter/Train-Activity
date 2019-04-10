// Initialize Firebase
var config = {
    apiKey: "AIzaSyBZtrqT6iPpM1zu85jnXlyTmUuB3or_T-Y",
    authDomain: "allaboard-d06ee.firebaseapp.com",
    databaseURL: "https://allaboard-d06ee.firebaseio.com",
    projectId: "allaboard-d06ee",
    storageBucket: "allaboard-d06ee.appspot.com",
    messagingSenderId: "165785536057"
};
firebase.initializeApp(config);

var database = firebase.database();

// Creating variables to store visible data.
var trainName;
var destination;
var time;
var frequency;
var nextArrival;
var minutesAway;
var keyArray = [];

// Creating function to display the current time.
function timeDisplay() {
    var timeNow = moment().format("hh:mm:ss");
    $(".timeNow").html(timeNow)
};

setInterval(timeDisplay, 1000);


// Creating on("click") event to calculate data provided.
$("#click-btn").on("click", function (event) {
    event.preventDefault();

    trainName = $("#name").val().trim();
    destination = $("#destination").val().trim();
    time = $("#time").val().trim();
    frequency = $("#frequency").val().trim();

    currentTime = moment().format("hh:mm");
    var timeConvert = moment(time, "hh:mm").subtract(1, "years");
    var timeDiff = moment().diff(moment(timeConvert), "minutes");
    var remainder = timeDiff % frequency;
    minutesAway = frequency - remainder;
    nextArrival = moment().add(minutesAway, "m").format("hh:mm A");

    database.ref().child("trains").push({
        trainName: trainName,
        destination: destination,
        time: time,
        frequency: frequency,
        nextArrival: nextArrival,
        minutesAway: minutesAway
    });

    $("#name").val("");
    $("#destination").val("");
    $("#time").val("");
    $("#frequency").val("");

});

// Creating function to append provided and calculated data to the table.
database.ref().child("trains").on("child_added", function (snapshot) {

    var key = snapshot.key;
    keyArray.push(key);

    var button = $("<button>");
    button.append("Remove");
    button.attr("removeBtn", key);
    button.addClass("buttons");

    var row = $("<tr>");
    row.attr("id", key);
    row.append("<td>" + snapshot.val().trainName + "</td>");
    row.append("<td>" + snapshot.val().destination + "</td>");
    row.append("<td>" + snapshot.val().time + "</td>");
    row.append("<td>" + snapshot.val().frequency + "</td>");
    row.append("<td>" + snapshot.val().nextArrival + "</td>");
    row.append("<td>" + snapshot.val().minutesAway + "</td>");

    var tdClear = $("<td>");
    var tdButton = tdClear.append(button);
    row.append(tdButton);

    $("#trains").prepend(row);


});

// Creating an on.("click") event to remove train if desired.
$(document.body).on("click", ".buttons", function () {
    var clearTrain = $(this).attr("removeBtn");
    database.ref().child("trains").child(clearTrain).remove();
    location.reload();
});
