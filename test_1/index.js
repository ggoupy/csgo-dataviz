
//Usefull links http://zevross.com/blog/2019/08/20/load-external-svgs-with-d3-v5/


console.log("Let's try to read the data");


//data upload
var dataset;
/*d3.csv("game.csv",function(data){
    //for(i = 0; i < data.length; i ++){
      console.log(data);
    //}
    dataset = data;
});*/

d3.select("#test").append("img")
    .attr("src","gun-svgrepo-com.svg")
    .attr("width", 100)
    .attr("height", 100)
