console.log("it's working")
let date = document.getElementById('date');
let time = document.getElementById('time');
let currentdate=(new Date()).toDateString();
let currenthour=(new Date().getHours()) ;
let currentmin= new Date().getMinutes();
date.innerHTML = `${currentdate} `;
time.innerHTML = `${currenthour} : ${currentmin} `;
function togglemenu() {
   let navbar = document.getElementById('navbar')
   if (navbar.style.height == "80px") {
      navbar.style.height = "215px";
      navbar.style.backgroundColor = "rgba(227, 233, 197,.5)";
      console.log("it's working")
   }
   else {
      navbar.style.height = "80px";
      navbar.style.backgroundColor = "rgba(227, 233, 197,.2)";
   }
}
// api_working
let btn = document.getElementById('btn');
async function getinfo() {
   let text = document.getElementById('text');
   let cityname = document.getElementById('cityname');
   let temp = document.getElementById('temp');
   let icon = document.getElementById('icon');
   let city_name_res = document.getElementById('city_name_res');
   let max_min_temp = document.getElementById('max_min_temp');
   let datahide = document.querySelector('.res')
   const text_value = text.value;
   console.log(text_value)
   if (text_value === "") {
      city_name_res.innerText = "Write the city name.";
      datahide.classList.add('data_hide');
   }
   else {
      try {
         let api = `https://api.openweathermap.org/data/2.5/weather?q=${text_value}&appid=9481a40688c53c9ae4f8c6d825ddcf4a`;
         const response = await fetch(api);
         const data = await response.json();
         const arrdata = [data];
         city_name_res.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`
         temp.innerHTML = `${(arrdata[0].main.temp - (273)).toFixed(2)} <sup>o</sup>C`
         const temp_condition = arrdata[0].weather[0].main;
         // max_min_temp.innerHTML=`min_temp = ${(arrdata[0].main.temp_min-(273)).toFixed(2)} <sup>o</sup>C ||  max_temp = ${(arrdata[0].main.temp_max-(273)).toFixed(2)} <sup>o</sup>C`
         datahide.classList.remove('data_hide');
        if (temp_condition === 'Clear'  && (currenthour<18  && currenthour>4 )) {
            icon.innerHTML = `<i class="fa fa-sun">  <span>  sunny</span></i>`;
         }else if(temp_condition === `Clear`  && (currenthour< 23  && currenthour>18 )||(currenthour< 4 && currenthour>.1)){
            icon.innerHTML = `<i class="fa fa-moon-stars"></i>`;
         }
         else if (temp_condition === 'Cloud'  && (currenthour<18  && currenthour>4 )) {
            icon.innerHTML = `<i class="fa fa-cloud">  <span>  Cloud</span></i>`;
         }
         else if (temp_condition === 'Cloud'  && (currenthour< 23  && currenthour>18 )||(currenthour< 4 && currenthour>.1)) {
            icon.innerHTML = `<i class="fa fa-cloud-moon"></i>`;
         }
         else if (temp_condition === 'Rain'  && (currenthour<18  && currenthour>4 ) ) {
            icon.innerHTML = `<i class="fa fa-cloud-rain">  <span>  rain</span></i>`;
         }
         else if (temp_condition === 'Rain'  && (currenthour< 23  && currenthour>18 )||(currenthour< 4 && currenthour>.1) ) {
            icon.innerHTML = `<i class="fa fa-cloud-moon-rain"></i>`;
         }
         else if (temp_condition === 'Haze' && (currenthour<18  && currenthour>4 ) ) {
            icon.innerHTML = `<i class="fa fa-fog"> <span>  Haze</span></i>`;
         }
         else if (temp_condition === 'Haze' && (currenthour< 23  && currenthour>18 )||(currenthour< 4 && currenthour>.1) ) {
            icon.innerHTML = `<i class="fa fa-moon"</i>`;
         }
         else {
            icon.innerHTML = `<i class="far fa-sun"> ${temp_condition}</i>`;
         }
      } catch {
         city_name_res.innerText = "Plz write correct city name.";
         datahide.classList.add('data_hide');
      }
   }
}
