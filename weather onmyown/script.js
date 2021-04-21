let weather = {
    apiKey: "c91a324293a96409823db214a356d663",
    fetchWeather: function (city) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`

      )
        .then((response) => {
            if (!response.ok){
                alert("No weather found");
                
            }
            return response.json();
        })
         
        .then((data) => this.displayWeather(data));
    },
    displayWeather :function(data){
        const { name } = data;
        const { icon,description } = data.weather[0];
        const { temp ,humidity } = data.main;
        const { speed } = data.wind;
        const { country } = data.sys;
        
        document.querySelector('.name').innerText = `${name},`;
        document.querySelector('.country').innerText = country;
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector('.temp').innerText = `${temp}°C`;
        document.querySelector('.description').innerText = `${description}`;
        document.querySelector('.wind').innerText = `Wind:${speed}m/s`;
        document.querySelector('.humidity').innerText = `Humidity:${humidity}%`;
        document.querySelector('.weather').classList.remove("loading");
        document.querySelector('.city').classList.remove("on");
        const city = document.querySelector(".city");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name +"')";
        
        
       
    },
    search : function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
        
    }
    
};
const btn = document.querySelector(".btn");
const searchBar =document.querySelector(".search-bar");
btn.addEventListener("click", ()=>{
    weather.search();
});
searchBar.addEventListener("keyup", (e)=>{
    if(e.key == "Enter"){
        weather.search();
    }
})


weather.fetchWeather("Seoul");





