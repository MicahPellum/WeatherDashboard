var searchCity = $("#search")
var cityTitle = $("#cityTitle")
var button = document.querySelector(".btn")
var clickHandler =  function() {
    console.log("howdy")
    var userInput = searchCity.val()
    getData(userInput);
} 
var saveInput = function() {
    // localStorage.setItem("saveInput", JSON.stringify(saveInput));
    console.log("hello")
    // fetch("https://openweathermap.org/api").then(function(response))
};
saveInput();

var getUserRepos = function() {
    console.log("function was called");
  };
  
  getUserRepos();

button.onclick= clickHandler
var getData = function(searchCity) {
    var apiUrl =  `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=11acde37ea3c7bf3216cd57c93c446ec`
     $.ajax({
        type:"GET",
        url:apiUrl, datatype:"json",
        success:function(data){
            console.log(data)
            cityTitle.text(data.city.name)


        }


    })
}

