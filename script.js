var city = $("#Search-bar");
APIKey = "ed1ac3232ca7f1df342053eaf80be5cb";
var queryWeaURL = `https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=` + APIKey;
var queryForURL = `https://api.openweathermap.org/data/2.5/forecast?q=Austin&units=imperial&appid=` + APIKey;

//city var not working
function dispTime() {
    $("#Date").text(JSON.stringify(moment().format('dddd, MMMM Do,')))
}

//when the button is clicked
$("#Submitbtn").click(
    function() {
        event.preventDefault();
        dispTime();
        $.ajax({
            url: queryWeaURL,
            method: "GET"
        }).then(function(response) {
            // $("#City").text(city.val());
            // console.log(city.val())
            $("#Temperature").text(response.main.temp);
            $("#Humidity").text(response.main.humidity);
            $("#WindSpeed").text(response.wind.speed);
            //Where to find UV Index?
            // $("#UVIndex").text(response.main.temp);
            
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