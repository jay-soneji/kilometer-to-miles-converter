function convertToMiles() {
  var kilometers = document.getElementById("distanceInKilometers").value;

  var miles = kilometers * 0.621371;

  document.getElementById("result").innerHTML =
    kilometers + " kilometers is approximately " + miles.toFixed(2) + " miles";
}
