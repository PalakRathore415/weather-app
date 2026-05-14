async function getWeather() {

const city =
document.getElementById("city").value;

const response =
await fetch(
`https://wttr.in/${city}?format=j1`
);

const data =
await response.json();

document.getElementById(
"weatherResult"
).innerHTML =

`
<h2>${city}</h2>

<p>
Temperature:
${data.current_condition[0].temp_C}°C
</p>

<p>
Humidity:
${data.current_condition[0].humidity}%
</p>

<p>
Condition:
${data.current_condition[0].weatherDesc[0].value}
</p>

`;

}
