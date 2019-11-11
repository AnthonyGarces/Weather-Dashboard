var city = $("#Search-Bar");
APIKey = "ed1ac3232ca7f1df342053eaf80be5cb";
var lat = "";
var lon = "";
var queryWeaURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city.val() + "&units=imperial&appid=" + APIKey;
var queryForURL = "https://api.openweathermap.org/data/2.5/forecast?q=Houston&units=imperial&appid=" + APIKey;
var queryUVURL = "http://api.openweathermap.org/data/2.5/uvi?lat=29.76&lon=-95.37&APPID=" + APIKey;


//city var not working
function dispTime() {
    $("#Date").text(JSON.stringify(moment().format('dddd, MMMM Do,')))
}

//when the button is clicked
$("#Submitbtn").click(
    function() {
        event.preventDefault();
        dispTime();
        console.log(city.val())
        $("#City").text(city.val());
        $.ajax({
            url: queryWeaURL,
            method: "GET"
        }).then(function(response) {
            console.log(response)
            $("#Temperature").text(response.main.temp);
            $("#Humidity").text(response.main.humidity);
            $("#WindSpeed").text(response.wind.speed);
            // lat = response.coord.lat;
            // lon = response.coord.lon
            $.ajax({
                url: queryUVURL,
                method: "GET"
            }).then(function(uvresponse) {
                $("#UVIndex").text(uvresponse.value);
            })  
        });
        $.ajax({
            url: queryForURL,
            method: "GET"
        }).then(function(fivedayresponse) {
            $("#5-Temp1").text(fivedayresponse.list[1].main.temp);
            $("#5-Hum1").text(fivedayresponse.list[1].main.humidity);
            $("#5-Temp2").text(fivedayresponse.list[2].main.temp);
            $("#5-Hum2").text(fivedayresponse.list[2].main.humidity);
            $("#5-Temp3").text(fivedayresponse.list[3].main.temp);
            $("#5-Hum3").text(fivedayresponse.list[3].main.humidity);
            $("#5-Temp4").text(fivedayresponse.list[4].main.temp);
            $("#5-Hum4").text(fivedayresponse.list[4].main.humidity);
            $("#5-Temp5").text(fivedayresponse.list[5].main.temp);
            $("#5-Hum5").text(fivedayresponse.list[5].main.humidity);
        });
    }
)

