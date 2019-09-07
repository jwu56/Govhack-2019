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
/*
function pos(lat1,lon1) {
  var R = 6371e3; // Earth's radius in metres
  var φ1 = lat1.toRadians();
  var φ2 = lat2.toRadians();
  var Δφ = (lat2-lat1).toRadians();
  var Δλ = (lon2-lon1).toRadians();

  var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  var d = R * c;
}
*/
function weather(position) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  today = yyyy+mm+dd;
  jQuery.ajax({
    /*
    beforeSend: function(xhr){xhr.setRequestHeader('X-Requested-With', 'Accept');},
    */
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
      comment: "R"
    },
    success: function(result) {
      console.log(result);
    }
  });
  jQuery.ajax({
    /*
    beforeSend: function(xhr){xhr.setRequestHeader('X-Requested-With', 'Accept');},
    */
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
      comment: "R"
    },
    success: function(result) {
      console.log(result);
    }
  });
}
onload = getLocation;
