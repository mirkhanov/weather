'use strict';

// variables
let Data = document.getElementById('data');
let icons = document.getElementById('icons');
let temp = document.getElementById('temp');
let time = document.getElementById('time');
let input = document.getElementById('searchs');
let btn = document.getElementById('btn')
let sunrise = document.getElementById('sunrise');
let sunset = document.getElementById('sunset');
let duration = document.getElementById('duration');
let feel = document.getElementById('Feel');
let Today = document.getElementById('Today');
let current = document.getElementById('current');
let ntf = document.getElementById('ntf');
let Feel = document.getElementById('feel');
let times = document.getElementById('times');
let speed = document.getElementById('speed');
let Icons0 = document.getElementById('Icons');

let times2 = document.getElementById('times2');
let Icons1 = document.getElementById('Icons2');
let temp2 = document.getElementById('temp2');
let speed2 = document.getElementById('speed2');
let Feel2 = document.getElementById('feel2');

let times3 = document.getElementById('times3');
let Icons2 = document.getElementById('Icons3');
let temp3 = document.getElementById('temp3');
let speed3 = document.getElementById('speed3');
let Feel3 = document.getElementById('feel3');

let times4 = document.getElementById('times4');
let Icons3 = document.getElementById('Icons4');
let temp4 = document.getElementById('temp4');
let speed4 = document.getElementById('speed4');
let Feel4 = document.getElementById('feel4');

let times5 = document.getElementById('times5');
let Icons4 = document.getElementById('Icons5');
let temp5 = document.getElementById('temp5');
let speed5 = document.getElementById('speed5');
let Feel5 = document.getElementById('feel5');

let day0 = document.getElementById('day0');
let day1 = document.getElementById('day1');
let day2 = document.getElementById('day2');
let day3 = document.getElementById('day3');
let day4 = document.getElementById('day4');
let day5 = document.getElementById('day5');
//page ntf 404 err
let Ntf = document.getElementById('ntf');
let CurrentWt = document.getElementById('CurrentWt');
let Hourly = document.getElementById('hourly');
let near = document.getElementById('near');
let dayblock = document.getElementById('daysBlock');

let DayCasts = document.getElementById('dayforecasts');
let TodayBtn = document.getElementById('TodayBtn');

let nearCT = document.getElementById('nears');
let nearCT2 = document.getElementById('nears2');

let td = document.querySelector('.td')


let today = new Date();
let CurrentDate = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
let API_KEY = 'aac29fe63f338e196329a81fae15c23c';



//btns
DayCasts.addEventListener('click', function () {
    dayblock.style.display = 'block';
    CurrentWt.style.display = 'none';
    Hourly.style.display = 'none';
    near.style.display = 'none';
})
TodayBtn.addEventListener('click', function () {
    dayblock.style.display = 'none';
    CurrentWt.style.display = 'block';
    Hourly.style.display = 'block';
    near.style.display = 'block';
})


// basic functions
function getHours(rets) {
    let srd = new Date((rets) * 1000);
    return (srd.getHours() + ":" + srd.getMinutes())
}
function Duration(date1, date2) {

    date1.setHours(date1.getHours() - date2.getHours());

    date1.setMinutes(date1.getMinutes() - date2.getMinutes())


    return `${date1.getHours()}:${date1.getMinutes()}`

}
// gettin' data
input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btn.click();
    }
})
btn.addEventListener('click', function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${API_KEY}`)
        .then(data => data.json())
        .then(data => {
            let lat = data.coord.lat;
            let lon = data.coord.lon;

            // near PLaces
            fetch(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=5&units=metric&appid=${API_KEY}`)
                .then(data => data.json())
                .then(data => {
                    console.log(data)

                    nearCT.innerHTML = `<div class="flex"><p>${data.list[1].name}</p>
                   <div class="flexy">
                        <p id="first"></p>
                                <p>${Math.round(data.list[1].main.temp)} &#176C</p>
                   </div>
                        </div>
                        <div class="flex"><p>${data.list[2].name}</p>
                        <div class="flexy">
                            <p id="first" class="sc"></p>
                                <p>${Math.round(data.list[2].main.temp)} &#176C</p>
                        </div>
                        </div>
                        `;
                    nearCT2.innerHTML = `  <div class="flex"><p>${data.list[3].name}</p>
                    <div class="flexy">
                        <p id="first" class="th"></p>
                        <p>${Math.round(data.list[3].main.temp)} &#176C</p>
                    </div>
                </div>
                
                <div class="flex"><p>${data.list[4].name}</p>
               <div class="flexy">
                    <p id="first" class="four"></p>
                        <p>${Math.round(data.list[4].main.temp)} &#176C</p>
               </div>
                </div>`;

                    if (data.list[1].weather[0].main === 'Sun') {
                        document.getElementById('first').innerHTML = `<img src="pngs/sun.png" class="iconss">`
                    }
                    if (data.list[1].weather[0].main === 'Clouds') {
                        document.getElementById('first').innerHTML = `<img src="pngs/cloudy.png" class="iconss">`
                    }
                    if (data.list[1].weather[0].main === 'Rain') {
                        document.getElementById('first').innerHTML = `<img src="pngs/rain.png" class="iconss">`
                    }
                    if (data.list[1].weather[0].main === 'Clear') {
                        document.getElementById('first').innerHTML = `<img src="pngs/moon.png"class="iconss">`
                    }
                    if (data.list[1].weather[0].main === 'Fog') {
                        document.getElementById('first').innerHTML = `<img src="pngs/fog.png"class="iconss">`
                    }
                    if (data.list[1].weather[0].main === 'Smoke') {
                        document.getElementById('first').innerHTML = `<img src="pngs/dust.png"class="iconss">`
                    }
                    if (data.list[1].weather[0].main === 'Mist') {
                        document.getElementById('first').innerHTML = `<img src="pngs/fog.png"class="iconss">`
                    }


                    if (data.list[2].weather[0].main === 'Sun') {
                        document.querySelector('.sc').innerHTML = `<img src="pngs/sun.png"class="iconss">`
                    }
                    if (data.list[2].weather[0].main === 'Clouds') {
                        document.querySelector('.sc').innerHTML = `<img src="pngs/cloudy.png"class="iconss">`
                    }
                    if (data.list[2].weather[0].main === 'Rain') {
                        document.querySelector('.sc').innerHTML = `<img src="pngs/rain.png"class="iconss">`
                    }
                    if (data.list[2].weather[0].main === 'Clear') {
                        document.querySelector('.sc').innerHTML = `<img src="pngs/moon.png"class="iconss">`
                    }
                    if (data.list[2].weather[0].main === 'Fog') {
                        document.querySelector('.sc').innerHTML = `<img src="pngs/fog.png"class="iconss">`
                    }
                    if (data.list[2].weather[0].main === 'Smoke') {
                        document.querySelector('.sc').innerHTML = `<img src="pngs/dust.png"class="iconss">`
                    }
                    if (data.list[2].weather[0].main === 'Mist') {
                        document.querySelector('.sc').innerHTML = `<img src="pngs/fog.png"class="iconss">`
                    }


                    if (data.list[3].weather[0].main === 'Sun') {
                        document.querySelector('.th').innerHTML = `<img src="pngs/sun.png"class="iconss">`
                    }
                    if (data.list[3].weather[0].main === 'Clouds') {
                        document.querySelector('.th').innerHTML = `<img src="pngs/cloudy.png"class="iconss">`
                    }
                    if (data.list[3].weather[0].main === 'Rain') {
                        document.querySelector('.th').innerHTML = `<img src="pngs/rain.png"class="iconss">`
                    }
                    if (data.list[3].weather[0].main === 'Clear') {
                        document.querySelector('.th').innerHTML = `<img src="pngs/moon.png"class="iconss">`
                    }
                    if (data.list[3].weather[0].main === 'Fog') {
                        document.querySelector('.th').innerHTML = `<img src="pngs/fog.png"class="iconss">`
                    }
                    if (data.list[3].weather[0].main === 'Smoke') {
                        document.querySelector('.th').innerHTML = `<img src="pngs/dust.png"class="iconss">`
                    }
                    if (data.list[3].weather[0].main === 'Mist') {
                        document.querySelector('.th').innerHTML = `<img src="pngs/fog.png"class="iconss">`
                    }


                    if (data.list[4].weather[0].main === 'Sun') {
                        document.querySelector('.four').innerHTML = `<img src="pngs/sun.png"class="iconss">`
                    }
                    if (data.list[4].weather[0].main === 'Clouds') {
                        document.querySelector('.four').innerHTML = `<img src="pngs/cloudy.png">`
                    }
                    if (data.list[4].weather[0].main === 'Rain') {
                        document.querySelector('.four').innerHTML = `<img src="pngs/rain.png"class="iconss">`
                    }
                    if (data.list[4].weather[0].main === 'Clear') {
                        document.querySelector('.four').innerHTML = `<img src="pngs/moon.png"class="iconss">`
                    }
                    if (data.list[4].weather[0].main === 'Fog') {
                        document.querySelector('.four').innerHTML = `<img src="pngs/fog.png"class="iconss">`
                    }
                    if (data.list[4].weather[0].main === 'Smoke') {
                        document.querySelector('.four').innerHTML = `<img src="pngs/dust.png"class="iconss">`
                    }
                    if (data.list[4].weather[0].main === 'Mist') {
                        document.querySelector('.four').innerHTML = `<img src="pngs/fog.png"class="iconss">`
                    }


                })

            console.log(data);
            td.style.paddingBottom = '100px';
                Data.innerHTML = `<p>${Math.round(data.main.temp)}&#176C<p>`
                feel.innerHTML = `<p>Real feel ${Math.round(data.main.feels_like)} &deg</p>`
                sunrise.innerHTML = `<p>Sunrise:${getHours(data.sys.sunrise)}</p>`
                sunset.innerHTML = `<p>Sunset:${getHours(data.sys.sunset)}</p>`
                Today.textContent = CurrentDate;
                CurrentWt.style.display = 'block';
                Hourly.style.display = 'block';
                near.style.display = 'block';
                dayblock.style.display = 'block';
                Ntf.style.display = 'none';
                duration.innerHTML = `<p>Duration:${getHours(data.sys.sunset - data.sys.sunrise)}h</p>`;
                if (data.weather[0].main === 'Sun') {
                    icons.innerHTML = `<img src="pngs/sun.png" class="iconss"> <p>Sunny</p>`
                }
                if (data.weather[0].main === 'Clouds') {
                    icons.innerHTML = `<img src="pngs/cloudy.png"class="iconss">
                                        <p>Cloudy</p>
   `
                }
                if (data.weather[0].main === 'Fog') {
                    icons.innerHTML = `<img src="pngs/fog.png"class="iconss">
                                        <p>Foggy</p>
   `
                }
                if (data.weather[0].main === 'Mist') {
                    icons.innerHTML = `<img src="pngs/fog.png"class="iconss">
                                        <p>Foggy</p>
   `
                }
                if (data.weather[0].main === 'Rain') {
                    icons.innerHTML = `<img src="pngs/rain.png"class="iconss">
                                        <p>Raining</p>
   `
                }
                if (data.weather[0].main === 'Smoke') {
                    icons.innerHTML = `<img src="pngs/dust.png"class="iconss">
                                         <p>Smoke</p>
   `
                }
                if (data.weather[0].main === 'Clear') {
                    icons.innerHTML = `<img src="pngs/moon.png"class="iconss">
                                         <p>Clear</p>
   `
                }
                CurrentWt.style.display = 'block';
                Hourly.style.display = 'block';
                near.style.display = 'block';
                dayblock.style.display = 'none';
                Ntf.style.display = 'none';

           


        })

        .catch((e) => {
            if (!input.value === true) {
                Ntf.style.display = 'none';
            } else {
                Ntf.style.display = 'block';
            }
            CurrentWt.style.display = 'none';
            Hourly.style.display = 'none';
            near.style.display = 'none';
            dayblock.style.display = 'none';
            Ntf.innerHTML = `<img src="pngs/ntf2.png">
                <p class="errorMSG">${input.value} could not be found</p>
                <p class="errorMSG">Please enter a different location</p>
            `
        })

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&units=metric&appid=${API_KEY}`)
        .then(data => data.json())
        .then(data => {

            console.log(data)
                //1
                times.innerHTML = `<p style="padding-bottom:20px">${data.list[0].dt_txt}</p>`
                temp.innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[0].main.temp)}&#176<p>`
                Feel.innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[0].main.feels_like)} &deg</p>`
                speed.innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[0].wind.speed)} ESE</p>`
                if (data.list[0].weather[0].main === 'Smoke') {
                    Icons0.innerHTML = `<img src="pngs/dust.png"class="iconss">
               <p>Smoke</p>
               `
                }
                if (data.list[0].weather[0].main === 'Sun') {
                    Icons0.innerHTML = `<img src="pngs/sun.png" class="iconss"> <p>Sunny</p>`
                }
                if (data.list[0].weather[0].main === 'Clouds') {
                    Icons0.innerHTML = `<img src="pngs/cloudy.png"class="iconss">
                                        <p>Cloudy</p>
   `
                }
                if (data.list[0].weather[0].main === 'Fog') {
                    Icons0.innerHTML = `<img src="pngs/fog.png"class="iconss">
                                        <p>Foggy</p>
   `
                }
                if (data.list[0].weather[0].main === 'Mist') {
                    Icons0.innerHTML = `<img src="pngs/fog.png"class="iconss">
                                        <p>Foggy</p>
   `
                }
                if (data.list[0].weather[0].main === 'Rain') {
                    Icons0.innerHTML = `<img src="pngs/rain.png"class="iconss">
                                        <p>Raining</p>
   `
                }
                if (data.list[0].weather[0].main === 'Clear') {
                    Icons0.innerHTML = `<img src="pngs/moon.png"class="iconss">
                                         <p>Clear</p>
   `
                }


                //2
                times2.innerHTML = `<p style="padding-bottom:20px">${data.list[1].dt_txt}</p>`
                temp2.innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[1].main.temp)}&#176<p>`
                Feel2.innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[1].main.feels_like)} &deg</p>`
                speed2.innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[1].wind.speed)} ESE</p>`
                if (data.list[1].weather[0].main === 'Sun') {
                    Icons1.innerHTML = `<img src="pngs/sun.png" class="iconss"> <p>Sunny</p>`
                }
                if (data.list[1].weather[0].main === 'Clouds') {
                    Icons1.innerHTML = `<img src="pngs/cloudy.png"class="iconss">
                                        <p>Cloudy</p>
   `
                }
                if (data.list[1].weather[0].main === 'Fog') {
                    Icons1.innerHTML = `<img src="pngs/fog.png"class="iconss">
                                        <p>Foggy</p>
   `
                }
                if (data.list[1].weather[0].main === 'Mist') {
                    Icons1.innerHTML = `<img src="pngs/fog.png"class="iconss">
                                        <p>Foggy</p>
   `
                }
                if (data.list[1].weather[0].main === 'Rain') {
                    Icons1.innerHTML = `<img src="pngs/rain.png"class="iconss">
                                        <p>Raining</p>
   `
                }
                if (data.list[1].weather[0].main === 'Smoke') {
                    Icons1.innerHTML = `<img src="pngs/dust.png"class="iconss">
                                         <p>Smoke</p>
   `
                }
                if (data.list[1].weather[0].main === 'Clear') {
                    Icons1.innerHTML = `<img src="pngs/moon.png"class="iconss">
                                         <p>Clear</p>
   `
                }
                //3
                times3.innerHTML = `<p style="padding-bottom:20px">${data.list[2].dt_txt}</p>`
                temp3.innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[2].main.temp)}&#176<p>`
                Feel3.innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[2].main.feels_like)} &deg</p>`
                speed3.innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[2].wind.speed)} ESE</p>`
                if (data.list[2].weather[0].main === 'Sun') {
                    Icons2.innerHTML = `<img src="pngs/sun.png" class="iconss"> <p>Sunny</p>`
                }
                if (data.list[2].weather[0].main === 'Clouds') {
                    Icons2.innerHTML = `<img src="pngs/cloudy.png"class="iconss">
                                        <p>Cloudy</p>
   `
                }
                if (data.list[2].weather[0].main === 'Fog') {
                    Icons2.innerHTML = `<img src="pngs/fog.png"class="iconss">
                                        <p>Foggy</p>
   `
                }
                if (data.list[2].weather[0].main === 'Mist') {
                    Icons2.innerHTML = `<img src="pngs/fog.png"class="iconss">
                                        <p>Foggy</p>
   `
                }
                if (data.list[2].weather[0].main === 'Rain') {
                    Icons2.innerHTML = `<img src="pngs/rain.png"class="iconss">
                                        <p>Raining</p>
   `
                }
                if (data.list[2].weather[0].main === 'Smoke') {
                    Icons2.innerHTML = `<img src="pngs/dust.png"class="iconss">
                                         <p>Smoke</p>
   `
                }
                if (data.list[2].weather[0].main === 'Clear') {
                    Icons2.innerHTML = `<img src="pngs/moon.png"class="iconss">
                                         <p>Clear</p>
   `
                }
                //4
                times4.innerHTML = `<p style="padding-bottom:20px">${data.list[3].dt_txt}</p>`
                temp4.innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[3].main.temp)}&#176<p>`
                Feel4.innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[3].main.feels_like)} &deg</p>`
                speed4.innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[3].wind.speed)} ESE</p>`
                if (data.list[3].weather[0].main === 'Sun') {
                    Icons3.innerHTML = `<img src="pngs/sun.png" class="iconss"> <p>Sunny</p>`
                }
                if (data.list[3].weather[0].main === 'Clouds') {
                    Icons3.innerHTML = `<img src="pngs/cloudy.png"class="iconss">
                                        <p>Cloudy</p>
   `
                }
                if (data.list[3].weather[0].main === 'Fog') {
                    Icons3.innerHTML = `<img src="pngs/fog.png"class="iconss">
                                        <p>Foggy</p>
   `
                }
                if (data.list[3].weather[0].main === 'Mist') {
                    Icons3.innerHTML = `<img src="pngs/fog.png"class="iconss">
                                        <p>Foggy</p>
   `
                }
                if (data.list[3].weather[0].main === 'Rain') {
                    Icons3.innerHTML = `<img src="pngs/rain.png"class="iconss">
                                        <p>Raining</p>
   `
                }
                if (data.list[3].weather[0].main === 'Smoke') {
                    Icons3.innerHTML = `<img src="pngs/dust.png"class="iconss">
                                         <p>Smoke</p>
   `
                }
                if (data.list[3].weather[0].main === 'Clear') {
                    Icons3.innerHTML = `<img src="pngs/moon.png"class="iconss">
                                         <p>Clear</p>
   `
                }
                //5
                times5.innerHTML = `<p style="padding-bottom:20px">${data.list[4].dt_txt}</p>`
                temp5.innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[4].main.temp)}&#176<p>`
                Feel5.innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[4].main.feels_like)} &deg</p>`
                speed5.innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[4].wind.speed)} ESE</p>`
                if (data.list[4].weather[0].main === 'Sun') {
                    Icons4.innerHTML = `<img src="pngs/sun.png" class="iconss"> <p>Sunny</p>`
                }
                if (data.list[4].weather[0].main === 'Clouds') {
                    Icons4.innerHTML = `<img src="pngs/cloudy.png"class="iconss">
                                        <p>Cloudy</p>
   `
                }
                if (data.list[4].weather[0].main === 'Fog') {
                    Icons4.innerHTML = `<img src="pngs/fog.png"class="iconss">
                                        <p>Foggy</p>
   `
                }
                if (data.list[4].weather[0].main === 'Mist') {
                    Icons4.innerHTML = `<img src="pngs/fog.png"class="iconss">
                                        <p>Foggy</p>
   `
                }
                if (data.list[4].weather[0].main === 'Rain') {
                    Icons4.innerHTML = `<img src="pngs/rain.png"class="iconss">
                                        <p>Raining</p>
   `
                }
                if (data.list[4].weather[0].main === 'Smoke') {
                    Icons4.innerHTML = `<img src="pngs/dust.png"class="iconss">
                                         <p>Smoke</p>
   `
                }
                if (data.list[4].weather[0].main === 'Clear') {
                    Icons4.innerHTML = `<img src="pngs/moon.png"class="iconss">
                                         <p>Clear</p>
   `
                }
            

                // five days
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            const dayNames = ["Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday",
                "Sunday"
            ];
            //cards
            day0.onclick = function(){
                document.getElementById('timesdays').innerHTML = `<p style="padding-bottom:20px">${data.list[0].dt_txt}</p>`
                document.getElementById('tempdays').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[0].main.temp)}&#176<p>`
                document.getElementById('feeldays').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[0].main.feels_like)} &deg</p>`
                document.getElementById('speeddays').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[0].wind.speed)} ESE</p>`
                //2
                document.getElementById('times2days').innerHTML = `<p style="padding-bottom:20px">${data.list[1].dt_txt}</p>`
                document.getElementById('temp2days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[1].main.temp)}&#176<p>`
                document.getElementById('feel2days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[1].main.feels_like)} &deg</p>`
                document.getElementById('speed2days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[1].wind.speed)} ESE</p>`
                //3
                document.getElementById('times3days').innerHTML = `<p style="padding-bottom:20px">${data.list[2].dt_txt}</p>`
                document.getElementById('temp3days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[2].main.temp)}&#176<p>`
                document.getElementById('feel3days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[2].main.feels_like)} &deg</p>`
                document.getElementById('speed3days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[2].wind.speed)} ESE</p>`
                //4
                document.getElementById('times4days').innerHTML = `<p style="padding-bottom:20px">${data.list[3].dt_txt}</p>`
                document.getElementById('temp4days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[3].main.temp)}&#176<p>`
                document.getElementById('feel4days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[3].main.feels_like)} &deg</p>`
                document.getElementById('speed4days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[3].wind.speed)} ESE</p>`
                //5
                document.getElementById('times5days').innerHTML = `<p style="padding-bottom:20px">${data.list[4].dt_txt}</p>`
                document.getElementById('temp5days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[4].main.temp)}&#176<p>`
                document.getElementById('feel5days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[4].main.feels_like)} &deg</p>`
                document.getElementById('speed5days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[4].wind.speed)} ESE</p>`
            }

            day1.onclick = function(){
                document.getElementById('timesdays').innerHTML = `<p style="padding-bottom:20px">${data.list[5].dt_txt}</p>`
                document.getElementById('tempdays').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[5].main.temp)}&#176<p>`
                document.getElementById('feeldays').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[5].main.feels_like)} &deg</p>`
                document.getElementById('speeddays').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[5].wind.speed)} ESE</p>`
                //2
                document.getElementById('times2days').innerHTML = `<p style="padding-bottom:20px">${data.list[6].dt_txt}</p>`
                document.getElementById('temp2days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[6].main.temp)}&#176<p>`
                document.getElementById('feel2days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[6].main.feels_like)} &deg</p>`
                document.getElementById('speed2days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[6].wind.speed)} ESE</p>`
                //3
                document.getElementById('times3days').innerHTML = `<p style="padding-bottom:20px">${data.list[7].dt_txt}</p>`
                document.getElementById('temp3days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[7].main.temp)}&#176<p>`
                document.getElementById('feel3days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[7].main.feels_like)} &deg</p>`
                document.getElementById('speed3days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[7].wind.speed)} ESE</p>`
                //4
                document.getElementById('times4days').innerHTML = `<p style="padding-bottom:20px">${data.list[8].dt_txt}</p>`
                document.getElementById('temp4days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[8].main.temp)}&#176<p>`
                document.getElementById('feel4days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[8].main.feels_like)} &deg</p>`
                document.getElementById('speed4days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[8].wind.speed)} ESE</p>`
                //5
                document.getElementById('times5days').innerHTML = `<p style="padding-bottom:20px">${data.list[9].dt_txt}</p>`
                document.getElementById('temp5days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[9].main.temp)}&#176<p>`
                document.getElementById('feel5days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[9].main.feels_like)} &deg</p>`
                document.getElementById('speed5days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[9].wind.speed)} ESE</p>`
            }
            day2.onclick = function(){
                document.getElementById('timesdays').innerHTML = `<p style="padding-bottom:20px">${data.list[10].dt_txt}</p>`
                document.getElementById('tempdays').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[10].main.temp)}&#176<p>`
                document.getElementById('feeldays').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[10].main.feels_like)} &deg</p>`
                document.getElementById('speeddays').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[10].wind.speed)} ESE</p>`
                //2
                document.getElementById('times2days').innerHTML = `<p style="padding-bottom:20px">${data.list[11].dt_txt}</p>`
                document.getElementById('temp2days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[11].main.temp)}&#176<p>`
                document.getElementById('feel2days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[11].main.feels_like)} &deg</p>`
                document.getElementById('speed2days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[11].wind.speed)} ESE</p>`
                //3
                document.getElementById('times3days').innerHTML = `<p style="padding-bottom:20px">${data.list[12].dt_txt}</p>`
                document.getElementById('temp3days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[12].main.temp)}&#176<p>`
                document.getElementById('feel3days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[12].main.feels_like)} &deg</p>`
                document.getElementById('speed3days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[12].wind.speed)} ESE</p>`
                //4
                document.getElementById('times4days').innerHTML = `<p style="padding-bottom:20px">${data.list[13].dt_txt}</p>`
                document.getElementById('temp4days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[13].main.temp)}&#176<p>`
                document.getElementById('feel4days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[13].main.feels_like)} &deg</p>`
                document.getElementById('speed4days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[13].wind.speed)} ESE</p>`
                //5
                document.getElementById('times5days').innerHTML = `<p style="padding-bottom:20px">${data.list[14].dt_txt}</p>`
                document.getElementById('temp5days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[14].main.temp)}&#176<p>`
                document.getElementById('feel5days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[14].main.feels_like)} &deg</p>`
                document.getElementById('speed5days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[14].wind.speed)} ESE</p>`
            }
            day3.onclick = function(){
                document.getElementById('timesdays').innerHTML = `<p style="padding-bottom:20px">${data.list[15].dt_txt}</p>`
                document.getElementById('tempdays').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[15].main.temp)}&#176<p>`
                document.getElementById('feeldays').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[15].main.feels_like)} &deg</p>`
                document.getElementById('speeddays').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[15].wind.speed)} ESE</p>`
                //2
                document.getElementById('times2days').innerHTML = `<p style="padding-bottom:20px">${data.list[16].dt_txt}</p>`
                document.getElementById('temp2days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[16].main.temp)}&#176<p>`
                document.getElementById('feel2days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[16].main.feels_like)} &deg</p>`
                document.getElementById('speed2days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[16].wind.speed)} ESE</p>`
                //3
                document.getElementById('times3days').innerHTML = `<p style="padding-bottom:20px">${data.list[17].dt_txt}</p>`
                document.getElementById('temp3days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[17].main.temp)}&#176<p>`
                document.getElementById('feel3days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[17].main.feels_like)} &deg</p>`
                document.getElementById('speed3days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[17].wind.speed)} ESE</p>`
                //4
                document.getElementById('times4days').innerHTML = `<p style="padding-bottom:20px">${data.list[18].dt_txt}</p>`
                document.getElementById('temp4days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[18].main.temp)}&#176<p>`
                document.getElementById('feel4days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[18].main.feels_like)} &deg</p>`
                document.getElementById('speed4days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[18].wind.speed)} ESE</p>`
                //5
                document.getElementById('times5days').innerHTML = `<p style="padding-bottom:20px">${data.list[19].dt_txt}</p>`
                document.getElementById('temp5days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[19].main.temp)}&#176<p>`
                document.getElementById('feel5days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[19].main.feels_like)} &deg</p>`
                document.getElementById('speed5days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[19].wind.speed)} ESE</p>`
            }
            day4.onclick = function(){
                document.getElementById('timesdays').innerHTML = `<p style="padding-bottom:20px">${data.list[20].dt_txt}</p>`
                document.getElementById('tempdays').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[20].main.temp)}&#176<p>`
                document.getElementById('feeldays').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[20].main.feels_like)} &deg</p>`
                document.getElementById('speeddays').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[20].wind.speed)} ESE</p>`
                //2
                document.getElementById('times2days').innerHTML = `<p style="padding-bottom:20px">${data.list[21].dt_txt}</p>`
                document.getElementById('temp2days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[21].main.temp)}&#176<p>`
                document.getElementById('feel2days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[21].main.feels_like)} &deg</p>`
                document.getElementById('speed2days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[21].wind.speed)} ESE</p>`
                //3
                document.getElementById('times3days').innerHTML = `<p style="padding-bottom:20px">${data.list[22].dt_txt}</p>`
                document.getElementById('temp3days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[22].main.temp)}&#176<p>`
                document.getElementById('feel3days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[22].main.feels_like)} &deg</p>`
                document.getElementById('speed3days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[12].wind.speed)} ESE</p>`
                //4
                document.getElementById('times4days').innerHTML = `<p style="padding-bottom:20px">${data.list[23].dt_txt}</p>`
                document.getElementById('temp4days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[23].main.temp)}&#176<p>`
                document.getElementById('feel4days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[23].main.feels_like)} &deg</p>`
                document.getElementById('speed4days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[23].wind.speed)} ESE</p>`
                //5
                document.getElementById('times5days').innerHTML = `<p style="padding-bottom:20px">${data.list[24].dt_txt}</p>`
                document.getElementById('temp5days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[24].main.temp)}&#176<p>`
                document.getElementById('feel5days').innerHTML = `<p  style="padding-bottom:20px"> ${Math.round(data.list[24].main.feels_like)} &deg</p>`
                document.getElementById('speed5days').innerHTML = `<p style="padding-bottom:20px">${Math.round(data.list[24].wind.speed)} ESE</p>`
            }


            day0.innerHTML = `
        <p class="upper" style="font-size: 20px">Tonight</p>
        <p class="cardsSub">${monthNames[today.getMonth()]} ${today.getDay()}</p>
        <p id="tonight"></p>
        <h2 style="font-size: 35px; padding-top: 30px">${Math.round(data.list[1].main.temp)}&#176C</h2>
        <p>${data.list[1].weather[0].main}</p>
        `;
            day1.innerHTML = `
        <p class="upper"  style="font-size: 20px">${dayNames[today.getDay()]}</p>
        <p class="cardsSub">${monthNames[today.getMonth()]} ${today.getDay() + 1}</p>
        <p id="sun"></p>
        <h2 style="font-size: 35px; padding-top: 30px">${Math.round(data.list[6].main.temp)}&#176C</h2>
        <p  style="padding-bottom: 30px">${data.list[6].weather[0].main}</p>
        `;
            day2.innerHTML = `
        <p class="upper"  style="font-size: 20px">${dayNames[today.getDay() + 1]}</p>
        <p class="cardsSub">${monthNames[today.getMonth()]} ${today.getDay() + 2}</p>
        <p id="mon"></p>
        <h2 style="font-size: 35px; padding-top: 30px">${Math.round(data.list[14].main.temp)}&#176C</h2>
        <p  style="padding-bottom: 30px">${data.list[14].weather[0].main}</p>
        `;
            day3.innerHTML = `
        <p class="upper" style="font-size: 20px">${dayNames[today.getDay() +2]}</p>
        <p class="cardsSub">${monthNames[today.getMonth()]} ${today.getDay() + 3}</p>
        <p id="tue"></p>
        <h2 style="font-size: 35px; padding-top: 30px">${Math.round(data.list[21].main.temp)}&#176C</h2>
        <p  style="padding-bottom: 30px">${data.list[21].weather[0].main}</p>
        `;
            day4.innerHTML = `
        <p class="upper" style="font-size: 20px">${dayNames[today.getDay() +3]}</p>
        <p class="cardsSub">${monthNames[today.getMonth()]} ${today.getDay() + 4}</p>
        <p id="weed"></p>
        <h2 style="font-size: 35px; padding-top: 30px">${Math.round(data.list[28].main.temp)}&#176C</h2>
        <p>${data.list[28].weather[0].main}</p>
        `;
        // 1
        if (data.list[1].weather[0].main === 'Sun') {
            document.getElementById('tonight').innerHTML = `<img src="pngs/sun.png" class="iconss"> <p>Sunny</p>`;
        }
        if (data.list[1].weather[0].main === 'Clouds') {
            document.getElementById('tonight').innerHTML = `<img src="pngs/cloudy.png" class="iconss"> <p>Clouds</p>`;
        }
        if (data.list[1].weather[0].main === 'Fog') {
            document.getElementById('tonight').innerHTML = `<img src="pngs/fog.png" class="iconss"> <p>Fog</p>`;
        }
        if (data.list[1].weather[0].main === 'Mist') {
           document.getElementById('tonight').innerHTML = `<img src="pngs/fog.png" class="iconss"> <p>Mist</p>`;
        }
        if (data.list[1].weather[0].main === 'Rain') {
            document.getElementById('tonight').innerHTML = `<img src="pngs/rain.png" class="iconss"> <p>Raining</p>`;
        }
        if (data.list[1].weather[0].main === 'Smoke') {
            document.getElementById('tonight').innerHTML = `<img src="pngs/dust.png" class="iconss"> <p>Smoke/Dust</p>`;
        }
        if (data.list[1].weather[0].main === 'Clear') {
            document.getElementById('tonight').innerHTML = `<img src="pngs/moon.png" class="iconss"> <p>Clear</p>`;
        }

        //2
        if (data.list[6].weather[0].main === 'Sun') {
            document.getElementById('sun').innerHTML = `<img src="pngs/sun.png" class="iconss"> <p>Sunny</p>`;
        }
        if (data.list[6].weather[0].main === 'Clouds') {
            document.getElementById('sun').innerHTML = `<img src="pngs/cloudy.png" class="iconss"> <p>Clouds</p>`;
        }
        if (data.list[6].weather[0].main === 'Fog') {
            document.getElementById('sun').innerHTML = `<img src="pngs/fog.png" class="iconss"> <p>Fog</p>`;
        }
        if (data.list[6].weather[0].main === 'Mist') {
            document.getElementById('sun').innerHTML = `<img src="pngs/fog.png" class="iconss"> <p>Mist</p>`;
        }
        if (data.list[6].weather[0].main === 'Rain') {
            document.getElementById('sun').innerHTML = `<img src="pngs/rain.png" class="iconss"> <p>Raining</p>`;
        }
        if (data.list[6].weather[0].main === 'Smoke') {
            document.getElementById('sun').innerHTML = `<img src="pngs/dust.png" class="iconss"> <p>Smoke/Dust</p>`;
        }
        if (data.list[6].weather[0].main === 'Clear') {
            document.getElementById('sun').innerHTML = `<img src="pngs/moon.png" class="iconss"> <p>Clear</p>`;
        }

        //3
        if (data.list[14].weather[0].main === 'Sun') {
            document.getElementById('mon').innerHTML = `<img src="pngs/sun.png" class="iconss"> <p>Sunny</p>`;
        }
        if (data.list[14].weather[0].main === 'Clouds') {
            document.getElementById('mon').innerHTML = `<img src="pngs/cloudy.png" class="iconss"> <p>Clouds</p>`;
        }
        if (data.list[14].weather[0].main === 'Fog') {
            document.getElementById('mon').innerHTML = `<img src="pngs/fog.png" class="iconss"> <p>Fog</p>`;
        }
        if (data.list[14].weather[0].main === 'Mist') {
            document.getElementById('mon').innerHTML = `<img src="pngs/Mist.png" class="iconss"> <p>Mist</p>`;
        }
        if (data.list[14].weather[0].main === 'Rain') {
            document.getElementById('mon').innerHTML = `<img src="pngs/rain.png" class="iconss"> <p>Raining</p>`;
        }
        if (data.list[14].weather[0].main === 'Smoke') {
            document.getElementById('mon').innerHTML = `<img src="pngs/dust.png" class="iconss"> <p>Smoke/Dust</p>`;
        }
        if (data.list[14].weather[0].main === 'Clear') {
            document.getElementById('mon').innerHTML = `<img src="pngs/moon.png" class="iconss"> <p>Clear</p>`;
        }

        //4
        if (data.list[21].weather[0].main === 'Sun') {
            document.getElementById('tue').innerHTML = `<img src="pngs/sun.png" class="iconss"> <p>Sunny</p>`;
        }
        if (data.list[21].weather[0].main === 'Clouds') {
            document.getElementById('tue').innerHTML = `<img src="pngs/cloudy.png" class="iconss"> <p>Clouds</p>`;
        }
        if (data.list[21].weather[0].main === 'Fog') {
            document.getElementById('tue').innerHTML = `<img src="pngs/fog.png" class="iconss"> <p>Fog</p>`;
        }
        if (data.list[21].weather[0].main === 'Mist') {
            document.getElementById('tue').innerHTML = `<img src="pngs/fog.png" class="iconss"> <p>Mist</p>`;
        }
        if (data.list[21].weather[0].main === 'Rain') {
            document.getElementById('tue').innerHTML = `<img src="pngs/rain.png" class="iconss"> <p>Raining</p>`;
        }
        if (data.list[21].weather[0].main === 'Smoke') {
            document.getElementById('tue').innerHTML = `<img src="pngs/dust.png" class="iconss"> <p>Smoke/Dust</p>`;
        }
        if (data.list[21].weather[0].main === 'Clear') {
            document.getElementById('tue').innerHTML = `<img src="pngs/moon.png" class="iconss"> <p>Clear</p>`;
        }

        //5
        if (data.list[28].weather[0].main === 'Sun') {
            document.getElementById('weed').innerHTML = `<img src="pngs/sun.png" class="iconss"> <p>Sunny</p>`;
        }
        if (data.list[28].weather[0].main === 'Clouds') {
            document.getElementById('weed').innerHTML = `<img src="pngs/cloudy.png" class="iconss"> <p>Clouds</p>`;
        }
        if (data.list[28].weather[0].main === 'Fog') {
            document.getElementById('weed').innerHTML = `<img src="pngs/fog.png" class="iconss"> <p>Fog</p>`;
        }
        if (data.list[28].weather[0].main === 'Mist') {
            document.getElementById('weed').innerHTML = `<img src="pngs/fog.png" class="iconss"> <p>Mist</p>`;
        }
        if (data.list[28].weather[0].main === 'Rain') {
            document.getElementById('weed').innerHTML = `<img src="pngs/rain.png" class="iconss"> <p>Raining</p>`;
        }
        if (data.list[28].weather[0].main === 'Smoke') {
            document.getElementById('weed').innerHTML = `<img src="pngs/smoke.png" class="iconss"> <p>Smoke/Dust</p>`;
        }
        if (data.list[28].weather[0].main === 'Clear') {
            document.getElementById('weed').innerHTML = `<img src="pngs/moon.png" class="iconss"> <p>Clear</p>`;
        }


        })
        
})



