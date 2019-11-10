var city = $("#Search-bar");
APIKey = "ed1ac3232ca7f1df342053eaf80be5cb";
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=` + APIKey;

//city var not working
function dispTime() {
    $("#Date").text(JSON.stringify(moment().format('dddd, MMMM Do,')))
}

$("#Submitbtn").click(
    function() {
        event.preventDefault();
        dispTime();
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            $("#Temperature").text(response.main.temp);
            $("#Humidity").text(response.main.humidity);
            $("#WindSpeed").text(response.wind.speed);
            //Where to find UV Index?
            // $("#UVIndex").text(response.main.temp);
            
        });
        
    }
)