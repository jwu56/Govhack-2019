function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(weather);
  } else {
    alert("Unfortunately, your browser does not support geolocation.");
}
}
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
function weather(position) {
  var weatherkey = '26b934435cecd3fbd99d8c3ead2bf36b';
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  today = yyyy+mm+dd;
  jQuery.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://www.longpaddock.qld.gov.au/cgi-bin/silo/DataDrillDataset.php",
    dataType: "JSON",
    data: {
      start: today,
      finish: today,
      lat: round(lat,6),
      lon: round(long,6),
      format: "JSON",
      username: "example@email.com",
      password: "password",
      comment: ""
    },
    success: function(result) {
      console.log(result);
    }
  });
  jQuery.ajax({
    url: "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather",
    dataType: "JSON",
    data: {
      lat: round(lat,6),
      lon: round(long,6),
      key: weatherkey
    },
    success: function(result) {
      console.log(result);
    }
  });
}
onload = getLocation;
