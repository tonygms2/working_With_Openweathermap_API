var city;
var temp;
var icon;
var iconURL;
window.onload = function(){

   document.getElementById("buttonIn").onclick = function(){
     city = document.getElementById("input1").value;
     console.log(city);
      $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+city+",bd&appid=48cfce5981ea65a0395f806f0b801534",function(response){
      temp = response.main.temp-272.15;  
      icon = response.weather[0].icon;
      iconURL = "http://openweathermap.org/img/w/"+icon+".png"
      console.log(response);
      document.getElementById("t").innerHTML = Math.floor(temp)+"&#x2103;";
      document.getElementById("w").innerHTML =response.weather[0].main; 
      
     // $(".icon").attr("src",iconURL);
   });
   
   }     
  
}
