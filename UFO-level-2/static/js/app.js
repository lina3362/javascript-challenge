// from data.js
var tableData = data;
console.log(tableData);

// define references to the table body
var tbody = d3.select("tbody");

// fill in table data 
tableData.forEach(row => {
    tbody.append("tr");

    for (key in row){
        var cell = tbody.append("td");
        cell.text(row[key]);
    }
});

// define references to the filter button and select the button
var filter_button = d3.select("#filter-btn");
filter_button.on("click", function() {

    tbody.html("");

    var inputElement = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");
    var inputValue = inputElement.property("value");
    var inputCityValue = inputCity.property("value").toLowerCase();
    var inputStateValue = inputState.property("value").toLowerCase();
    var inputCountryValue = inputCountry.property("value").toLowerCase();
    var inputShapeValue = inputShape.property("value").toLowerCase();
    console.log(inputValue);

    //Filter data with datetime
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputCityValue ||
                                                    sighting.state === inputStateValue ||
                                                    sighting.country === inputCountryValue ||
                                                    sighting.shape === inputShapeValue);
    console.log(filteredData);

    filteredData.forEach(function(selections) {

        console.log(selections);
        var row = tbody.append("tr");
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

});

