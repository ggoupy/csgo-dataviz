

//data upload
var dataset;
/*d3.csv("game.csv",function(data){
    //for(i = 0; i < data.length; i ++){
      console.log(data);
    //}
    dataset = data;
});*/

function addWeapons(){
  var weapons = ["AK-47.png","AWP.png","GALIL.png","GLOCK-17.png","M4A1-S.png","M4A4.png","SSG08.png","USP.png"];
  weapons.forEach(function(item,index,array){
    var graph = d3.select("#weapon_chart").append("div")
      .attr("id","bar_"+index)
      .attr("class","progress")
      .append("img")
      .attr("src","weapons/"+item)
      .attr("id","weapon_"+index);
    $("#bar"+index).width($("#weapon_"+index).width());
    $("#bar_"+index).height($("#weapon_"+index).height());
    console.log($("#weapon_"+index).width());
  });
}

function setBackground(){
  console.log("mi han chiamato");
  var svgImg= d3.select("#test").append("img")
              .attr("src","weapons/M4A1-S.png")
              .attr("id","img_gun");

  $("#test").width($('#img_gun').width());
  $("#test").height($('#img_gun').height());
};
function changePercentage(){
        for(i = 0; i < 8; i++){
          var width = $('#weapon_'+i).width();
          var height = $('#weapon_'+i).height();
          width *=Math.random();
          $("#bar_"+i).width(width);
          $("#bar_"+i).height(height);   
        }

        
}
addWeapons();
//setBackground();
    
var data = { percent: 5.0 };


