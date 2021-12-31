

//data upload
var dataset;
/*d3.csv("game.csv",function(data){
    //for(i = 0; i < data.length; i ++){
      console.log(data);
    //}
    dataset = data;
});*/
function changePercentage(){
        //var bar = document.getElementById("test");
        //$("#test").width("128px");
        //$("#test").attr("data-percentage","128px");
        //$("#test").attr("data-percentage","20%");
        var width = $("#test").width();
        width *= 0.3;
        $("#test").width(width);
        //$("#test").attr("qualcosa","no vabbe");
        console.log("something");
}
var svgImg= d3.select("#test").append("img")
              .attr("src","128px-Gun_outline.png");
  
    
var data = { percent: 5.0 };


