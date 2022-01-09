

var weapons = ["AK-47","AWP","GALIL","GLOCK-17","M4A1-S","M4A4","SSG08","USP","CZ75","Glock-18", "MAC-10"];
 function readData(){
  d3.csv("output.csv").then(function(d){
    var precision_weapon = {}
    for(var i = 0; i < d.length; i++){
      if(d[i].Pseudo === "LaMasse" && d[i].Game_number==3 && d[i].Round_number == 2){
        weapons.forEach(function(weapon){
          fired = d[i]["shots_fired_"+weapon];
          hit = d[i]["shots_hit_"+weapon];
          console.log("shots_fired_"+weapon+" "+ d[i]["shots_hit_"+weapon]); 
          if((hit/fired) >= 0){
            precision_weapon[weapon] = {'precision': hit/fired, 'hit': hit, "fired":fired};
          }

        });
        console.log(precision_weapon);
      }
    }
    
  });
 
}

function addWeapons(){
  //var weapons = ["AK-47.png","AWP.png","GALIL.png","GLOCK-17.png","M4A1-S.png","M4A4.png","SSG08.png","USP.png"];

  weapons.forEach(function(item,index,array){
    var graph = d3.select("#weapon_chart").append("div")
      .attr("id","bar_"+index)
      .attr("class","progress")
      .append("img")
      .attr("src","weapons/"+item+".png")
      .attr("id","weapon_"+index);
    $("#bar_"+index).width($("#weapon_"+index).width());
    $("#bar_"+index).height($("#weapon_"+index).height());
    console.log($("#weapon_"+index).width());
  });
}

function changePercentage(){
        for(i = 0; i < weapons.length; i++){
          var width = $('#weapon_'+i).width();
          var height = $('#weapon_'+i).height();
          width *=Math.random();
          $("#bar_"+i).width(width);
          $("#bar_"+i).height(height);   
}

        
}
addWeapons();
readData();
var data = { percent: 5.0 };


