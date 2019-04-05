// Initialize Firebase
var config = {
    apiKey: "AIzaSyCyGisrvJPA5GEax49O2PvYjtXBs3do9I0",
    authDomain: "project-2-baa25.firebaseapp.com",
    databaseURL: "https://project-2-baa25.firebaseio.com",
    projectId: "project-2-baa25",
    storageBucket: "project-2-baa25.appspot.com",
    messagingSenderId: "997886881121"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();
var name = "";
var feedback = "";

// Capture Button Click
    $("submit").on("click", function (event) {
    event.preventDefault();

        var name = $("#name-input").val().trim();
        var feedback = $("#feedback-input").val().trim();

        database.ref().set({
        name: name,
        feedback: feedback,

    });

    database.ref().on("value", function (snapshot) {

    // Print the initial data to the console.
        console.log(snapshot.val());

        // Log the value of the various properties
        console.log(snapshot.val().name);
        console.log(snapshot.val().feedback);

        // Output all of the new information into the relevant HTML sections
        $("#name-display").text(name);
        $("#feedback-display").text(feedback);

        // Change the HTML
        $("#displayed-data").text(snapshot.val().name + " | " + snapshot.val().feedback);

        // If any errors are experienced, log them to console.
        }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);


    });

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('feedbackForm').reset();


});