// from data.js
var tableData = data;
console.log("data :: ", data);
// YOUR CODE HERE!
const tableBody = d3.select("#ufo-table tbody");

// tableBody.html = "";
let tableRow = tableBody.append("tr");
const col2Data = {
  Date: "datetime",
  City: "city",
  State: "state",
  Country: "country",
  Shape: "shape",
  Duration: "durationMinutes",
  Comments: "comments",
};

const cols = [
  "Date",
  "City",
  "State",
  "Country",
  "Shape",
  "Duration",
  "Comments",
];
//makes original table on load
data.forEach((dataRow) => {
  let tableRow = tableBody.append("tr");
  cols.forEach((col) => tableRow.append("th").text(dataRow[col2Data[col]]));
});
//filter and table builder
function Filter() {

  //grab user entered date, if blank will load original
  const date = d3.select("#datetime").property("value");
  let enteredDate = tableData;

  // if date was entered, data is then filtered
  if (date) {
    //grab only sightings on user enetered date
    enteredDate = enteredDate.filter(row => row.datetime === date);
  }
console.log("Done");
    //clear old table
    tableBody.html("");
  
    //iterate and place filtered data in tbdoy
    enteredDate.forEach((dataRow) => {
      //make row
      const row = tableBody.append("tr");
  
      // make entry and put in data
      Object.values(dataRow).forEach((sighting) => {
        let cell = row.append("td");
          cell.text(sighting);
        }
      );
    });
  };

//listen for user input
d3.selectAll("#filter-btn").on("click", Filter);