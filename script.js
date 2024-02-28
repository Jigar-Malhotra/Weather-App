
let city = "Delhi"
let temp = document.getElementsByClassName("info")[1]
let wind = document.getElementsByClassName("info")[0]
let other = document.getElementsByClassName("info")[2]
let search = document.getElementById("search");
let query = document.querySelector("input");

search.addEventListener("click", () => {
	city = query.value;
	console.log(query.value)
	bring();
})


async function bring(){
	let heading = `Weather Of ${city}`
	document.getElementsByTagName("h1")[0].innerHTML = heading;

const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8b9bcdd25bmshead520699e42ec4p1266cbjsn8405df2aa75a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	let x = JSON.parse(result);
	// console.log(x)
	let whtml = `<h5 class="stats">&#8226; Wind Speed: ${x.wind_speed}</h5>
	<h5 class="stats">&#8226; Wind Degrees: ${x.wind_degrees}</h5>`

	let thtml = `<h5 class="stats">&#8226; Temperature(in Celsius): ${x.temp}</h5>
	<h5 class="stats">&#8226; Minimum Temperature: ${x.min_temp}</h5>
	<h5 class="stats">&#8226; Maximum Temperature: ${x.max_temp}</h5>
	<h5 class="stats">&#8226; Feels Like: ${x.feels_like}</h5>
	<h5 class="stats">&#8226; Humidity: ${x.humidity}</h5>`

	let ohtml = `<h5 class="stats">&#8226; Cloud_pct: ${x.cloud_pct}</h5>`

	wind.innerHTML = whtml;
	temp.innerHTML = thtml;
	other.innerHTML = ohtml;
} catch (error) {
	console.error(error);
}
}
bring();