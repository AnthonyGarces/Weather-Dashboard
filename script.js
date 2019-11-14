var city = "";
APIKey = "ed1ac3232ca7f1df342053eaf80be5cb";
var lat = "";
var lon = "";
var iconCode = "";
var cityList = [];


function dispTime() {
    $("#Date").text(JSON.stringify(moment().format('dddd, MMMM Do')));
    $("#5-Date1").text(JSON.stringify(moment().add(1, 'days').format('MMMM Do')));
    $("#5-Date2").text(JSON.stringify(moment().add(2, 'days').format('MMMM Do')));
    $("#5-Date3").text(JSON.stringify(moment().add(3, 'days').format('MMMM Do')));
    $("#5-Date4").text(JSON.stringify(moment().add(4, 'days').format('MMMM Do')));
    $("#5-Date5").text(JSON.stringify(moment().add(5, 'days').format('MMMM Do')));
}

//when the button is clicked
$("#Submitbtn").click(
    function() {
        event.preventDefault();
        city = $("#Search-Bar").val();
        dispTime();
        cityList.push(city);
        renderButton();
        $("#City").text(city);
        getWeather();
        get5Day();
    }
);

function renderButton() {
    $(".history").empty();
    for (var i = 0; i < cityList.length; i++) {
        var a = $("<button>");
        a.text(cityList[i]);
        a.addClass("btn btn-secondary mt-3 HBtn");
        $(".history").prepend(a);
    }
}

$(".HBtn").click(
    function() {
        event.preventDefault();
        console.log(this);
        // city = $(".HistButton").val().trim();
        // dispTime();
        // $("#City").text(city);
        // getWeather();
        // get5Day();
    }
);

function getWeather() {
    var queryWeaURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=` + APIKey;
    $.ajax({
        url: queryWeaURL,
        method: "GET"
    }).then(function(response) {
        iconCode = response.weather[0].icon;
        var iconURL = `http://openweathermap.org/img/w/${iconCode}.png`;
        $("#todayIcon").attr('src', iconURL);
        $("#Temperature").text(response.main.temp);
        $("#Humidity").text(response.main.humidity);
        $("#WindSpeed").text(response.wind.speed);
        lat = response.coord.lat;
        lon = response.coord.lon;           
        var queryUVURL = `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&APPID=` + APIKey;

        $.ajax({
            url: queryUVURL,
            method: "GET"
        }).then(function(uvresponse) {
            $("#UVIndex").text(uvresponse.value);
        })  
    });
}

function get5Day() {
    var queryForURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=` + APIKey;
    $.ajax({
        url: queryForURL,
        method: "GET"
    }).then(function(fivedayresponse) {
        var fiveIconList = 
        [fivedayresponse.list[1].weather[0].icon,
        fivedayresponse.list[2].weather[0].icon,
        fivedayresponse.list[3].weather[0].icon,
        fivedayresponse.list[4].weather[0].icon,
        fivedayresponse.list[5].weather[0].icon];
        var IconUrl1 = "http://openweathermap.org/img/w/" + fiveIconList[0] + ".png";
        var IconUrl2 = "http://openweathermap.org/img/w/" + fiveIconList[1] + ".png";
        var IconUrl3 = "http://openweathermap.org/img/w/" + fiveIconList[2] + ".png";
        var IconUrl4 = "http://openweathermap.org/img/w/" + fiveIconList[3] + ".png";
        var IconUrl5 = "http://openweathermap.org/img/w/" + fiveIconList[4] + ".png";
        $("#5-Icon1").attr("src", IconUrl1);
        $("#5-Icon2").attr("src", IconUrl2);
        $("#5-Icon3").attr("src", IconUrl3);
        $("#5-Icon4").attr("src", IconUrl4);
        $("#5-Icon5").attr("src", IconUrl5);
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