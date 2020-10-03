var url = "https://api.opensensemap.org/boxes/";
var senseID = "5cf8c8fa07460b001b4dccad";

function getSenseBoxData() {
    var data = $.ajax(url + senseID + '/sensors');
    return data;
}