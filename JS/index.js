var summary_api;
var vietnam_api;
var us_api;
var china_api;
var france_api;

var convert_JSON_time;

function update_claims (summary_api) {
  document.getElementById("infectors_summary").innerHTML = summary_api.data[0].confirmed;
  document.getElementById("deaths_summary").innerHTML = summary_api.data[0].deaths;
  document.getElementById("recovers_summary").innerHTML = summary_api.data[0].recovered;

  var convert_JSON_time = summary_api.data[0].updated_at;
  var date_converted = new Date(convert_JSON_time);
  document.getElementById("updated_time").innerHTML = "Updated at: " + date_converted;
}

function update_COUNTRIES (countries_api, country_code) {
  var stringer = country_code;
  document.querySelector(stringer + " .information #infectors").innerHTML = countries_api.data.latest_data.confirmed;
  document.querySelector(stringer + " .information #infectorsN").innerHTML = countries_api.data.today.confirmed;
  document.querySelector(stringer + " .information #deaths").innerHTML = countries_api.data.latest_data.deaths;
  document.querySelector(stringer + " .information #deathsN").innerHTML = countries_api.data.today.deaths;
  document.querySelector(stringer + " .information #recovers").innerHTML = countries_api.data.latest_data.recovered;
  document.querySelector(stringer + " .information #recoversN").innerHTML = countries_api.data.timeline[0].new_recovered;
}

//summary information
var summary = {
    "url": "https://corona-api.com/timeline",
    "method": "GET",
    "timeout": 0,
  };

$.ajax(summary).done(function (response) {
  console.log(response);
  summary_api = response;
  update_claims(summary_api);
});

//Viet Nam information
var country_VN = {
  "url": "https://corona-api.com/countries/VN",
  "method": "GET",
  "timeout": 0,
};

$.ajax(country_VN).done(function (response) {
  vietnam_api = response;
  update_COUNTRIES (vietnam_api, "#VN");
})

//USA information
var country_US = {
  "url": "https://corona-api.com/countries/US",
  "method": "GET",
  "timeout": 0,
};

$.ajax(country_US).done(function (response) {
  us_api = response;
  update_COUNTRIES (us_api, "#US");
})

//China information
var country_CN = {
  "url": "https://corona-api.com/countries/CN",
  "method": "GET",
  "timeout": 0,
};

$.ajax(country_CN).done(function (response) {
  china_api = response;
  update_COUNTRIES (china_api, "#CN");
})

//French information
var country_FR = {
  "url": "https://corona-api.com/countries/FR",
  "method": "GET",
  "timeout": 0,
};

$.ajax(country_FR).done(function (response) {
  france_api = response;
  update_COUNTRIES (france_api, "#FR");
})




