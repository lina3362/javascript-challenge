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
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    //Filter data with datetime
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
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
