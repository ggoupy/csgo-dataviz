
//Usefull links http://zevross.com/blog/2019/08/20/load-external-svgs-with-d3-v5/
//http://jsfiddle.net/u3tjmy0b/4/
//https://stackoverflow.com/questions/12975929/how-to-use-svg-file-for-image-source-in-d3


//data upload
var dataset;
/*d3.csv("game.csv",function(data){
    //for(i = 0; i < data.length; i ++){
      console.log(data);
    //}
    dataset = data;
});*/

var svgImg= d3.select("#test").append("img")
              .attr("src","128px-Gun_outline.png");
              //.attr("width", 100)
              //.attr("height", 100);

/*
// Define the gradient
var gradient = svgImg.append("svg:defs")
        .append("svg:linearGradient")
        .attr("id", "gradient")
        .attr("y1", "0%")
        .attr("y2", "0%")
        .attr("spreadMethod", "pad");

        // Define the gradient colors
    gradient.append("svg:stop")
            .attr("id","stop")
            .attr("offset", "50%")
            .attr("stop-color", "orange");
            //.attr("stop-opacity", 1);
    gradient.append("svg:stop")
            .attr("id","stop1")
            .attr("offset", "0%")
            .attr("stop-color", "lightblue");
            //.attr("stop-opacity", 1);*/    
    
var data = { percent: 5.0 };


