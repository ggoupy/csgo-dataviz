

//data upload
var dataset;
/*d3.csv("game.csv",function(data){
    //for(i = 0; i < data.length; i ++){
      console.log(data);
    //}
    dataset = data;
});*/

function setBackground(){
  console.log("mi han chiamato");
  var svgImg= d3.select("#test").append("img")
              .attr("src","128px-Gun_outline.png")
              .attr("id","img_gun");

  $("#test").width($('#img_gun').width());
  $("#test").height($('#img_gun').height());
};
function changePercentage(){

        var width = $('#img_gun').width();
        var height = $('#img_gun').height();
        width *= 0.3;
        $("#test").width(width);
        $("#test").height(height);
        
}
setBackground();
    
var data = { percent: 5.0 };


