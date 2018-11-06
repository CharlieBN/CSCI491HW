var width = 1920;
var height = 1080;

//Instantiate the container
var svg = d3.select("#avgContainer")
    .append("svg")
    .attr("width", width)
    .attr("height", height);


//Barcharts
var myArray = [50, 75, 100, 150, 180, 250];
var xBarChar = 10;
var yBarChar = 10;
var xText = 0;

for (i = 0; i < myArray.length; i++) {
    svg.append("rect")
        .attr("x", xBarChar)
        .attr("y", yBarChar)
        .attr("width", myArray[i])
        .attr("height", 20)
        .attr("fill", "blue");

    xText = myArray[i]  - (xBarChar + 10);

    svg.append("text")
        .attr("x", xText)
        .attr("y", yBarChar + 15)
        .attr("fill", "white")
        .text(myArray[i]);

    yBarChar = yBarChar + 24;
}

//Yellow Circle
svg.append("circle")
    .attr("cx", 400)
    .attr("cy", 300)
    .attr("r", 50)
    .attr("fill", "yellow");

//Blue Circle left
svg.append("circle")
    .attr("cx", 375)
    .attr("cy", 275)
    .attr("r", 10)
    .attr("fill", "blue");

//Blue Circle right
svg.append("circle")
    .attr("cx", 425)
    .attr("cy", 275)
    .attr("r", 10)
    .attr("fill", "blue");

//Red mouth
svg.append("line")
    .attr("x1", 375)
    .attr("y1", 325)
    .attr("x2", 425)
    .attr("y2", 325)
    .attr("stroke-width", 6)
    .attr("stroke", "red");

//Nose
svg.append("line")
    .attr("x1", 400)
    .attr("y1", 295)
    .attr("x2", 400)
    .attr("y2", 310)
    .attr("stroke-width", 4)
    .attr("stroke", "black");
svg.append("line")
    .attr("x1", 400)
    .attr("y1", 310)
    .attr("x2", 410)
    .attr("y2", 310)
    .attr("stroke-width", 4)
    .attr("stroke", "black");