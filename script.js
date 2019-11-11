var city = $("#Search-Bar").val();
APIKey = "ed1ac3232ca7f1df342053eaf80be5cb";
var lat = "";
var lon = "";
var queryWeaURL = `https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=` + APIKey;
// var queryForURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city.val()}&units=imperial&appid=` + APIKey;
var queryUVURL = `http://api.openweathermap.org/data/2.5/uvi?lat=30.27&lon=-97.74&APPID=` + APIKey;


//city var not working
function dispTime() {
    $("#Date").text(JSON.stringify(moment().format('dddd, MMMM Do,')))
}

//when the button is clicked
$("#Submitbtn").click(
    function() {
        event.preventDefault();
        dispTime();
        $("#City").text(city);
        $.ajax({
            url: queryWeaURL,
            method: "GET"
        }).then(function(response) {
            $("#Temperature").text(response.main.temp);
            $("#Humidity").text(response.main.humidity);
            $("#WindSpeed").text(response.wind.speed);
            lat = response.coord.lat;
            lon = response.coord.lon
            $.ajax({
                url: queryUVURL,
                method: "GET"
            }).then(function(yonge) {
                $("#UVIndex").text(yonge.value);
            })
            
            
        });
        
    }
)
//on click adds the 5 day forecast to the page
$("#Submitbtn").click(
    function() {
        event.preventDefault();
        $.ajax({
            url: queryForURL,
            method: "GET"
        }).then(function(response) {
            console.log(response)
        });
        
    }
)