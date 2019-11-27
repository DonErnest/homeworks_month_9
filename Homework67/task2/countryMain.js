var urlParams = new URLSearchParams(window.location.search);
var param = urlParams.get('code');

$.ajax({
    url: `https://restcountries.eu/rest/v2/alpha/${param}`,
    method: 'GET',
    success: function(response, status) {
        console.log(response);
        console.log(status);
        renderCountryData(response);
    },
    error: function(response, status) {
        console.log(status);
    }
});

function renderCountryData(response) {
    const container = $('.container');
    let countryDiv = $(document.createElement('div'));
    countryDiv.addClass('country');
    countryDiv.append(`<h2>${response.name}</h2>`);
    countryDiv.append(`<img style="width: 25%; height: 25%; " src="${response.flag}" alt="${response.alpha3Code}">`);
    countryDiv.append(`<p>Столица: ${response.capital}</p>`);
    countryDiv.append(`<p>Популяция: ${response.population} человек</p>`);
    countryDiv.append(`<p>Регион: ${response.region}</p>`);
    countryDiv.append(`<p>Локация: ${response.subregion}</p>`);
    let borders = $(document.createElement('div'));
    borders.append('<p>Граничит с : </p>');
    for (var i = 0; i < response.borders.length; i++) {
        borders.append(`<span><a href="country.html?code=${response.borders[i]}">${response.borders[i]}</a></span>,`);
    }
    countryDiv.append(borders);
    countryDiv.append(`<p>Самоназвание: ${response.nativeName}</p>`);
    container.append(countryDiv);
}
