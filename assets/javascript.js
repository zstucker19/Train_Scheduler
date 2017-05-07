
  var nameVal;
  var destinationVal;
  var timeVal;
  var frequencyVal;
  var arrivalVal;
  var minutesVal;


  var config = {
    apiKey: "AIzaSyAap6jgbmIg6B8xpI8XwK0o2BH3VaexXN4",
    authDomain: "zack-1.firebaseapp.com",
    databaseURL: "https://zack-1.firebaseio.com",
    projectId: "zack-1",
    storageBucket: "zack-1.appspot.com",
    messagingSenderId: "295740861099"
  };
  firebase.initializeApp(config); 

    var database = firebase.database();



  $("#add-train").on("click", function() {
      
     event.preventDefault();

    nameVal = $("#name-input").val().trim();
    destinationVal = $("#destination-input").val().trim();
    timeVal = $("#time-input").val().trim();
    frequencyVal = $("#frequency-input").val().trim();

    arrivalVal = timeVal + frequencyVal;
    minutesVal = 43;


      database.ref().push({
        name: nameVal,
        destination: destinationVal,
        time: timeVal,
        frequency: frequencyVal,
        arrival: arrivalVal,
        minutes: minutesVal
      });

});

  


    database.ref().on("child_added", function(snapshot) {

      
      $("#name-display").append("<p>" + snapshot.val().name + "</p>");
    
      $("#destination-display").append("<p>" + snapshot.val().destination + "</p>");

      $("#frequency-display").append("<p>" + snapshot.val().frequency + "</p>");

      $("#arrival-display").append("<p>" + snapshot.val().arrival + "</p>");

      $("#minutes-display").append("<p>" + snapshot.val().minutes + "</p>");
    }, function(errorObject) {
      console.log(errorObject.code);
    });


