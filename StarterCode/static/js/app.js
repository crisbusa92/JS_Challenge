// from data.js
var tableData = data;
// YOUR CODE HERE!
var table = d3.select("#ufo-table")
var input = d3.select("#datetime");
var button = d3.select("button");
var form = d3.select("form");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

      // Prevent the page from refreshing
      d3.event.preventDefault();
      
      // Select the input element and get the raw HTML node
      var input = d3.select("#datetime");
    
      // Get the value property of the input element
      var inputValue = input.property("value");
    
      console.log(inputValue);
    
      var filteredData = tableData.filter(x => x.datetime === inputValue);
    
      console.log(filteredData);

      data.forEach((filteredData) => {
        var row = table.append("tr");
        Object.entries(filteredData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}