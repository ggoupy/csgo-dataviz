

//var weapons = ["AK-47","AWP","Galil AR","GLOCK-17","M4A1-S","M4A4","SSG08","USP","CZ75","Glock-18", "MAC-10","P90","Knife","FAMAS", "Desert Eagle","XM1014"];
//weapons in output.csv
var weapons = ["AK-47","AWP","Galil AR","M4A4","SSG","USP-S","CZ75","Glock-18", "MAC-10","P90","Knife","FAMAS", "Desert Eagle","XM1014"];
function readData(){
  d3.csv("output.csv").then(function(d){
    var precision_weapon = {}
    var player_names = [...new Set(d.map(d => d.Pseudo))];

    console.log("player_names" + player_names.length);

        
    d3.select('#player_name')
      .selectAll('option')
        .data(player_names)
      .enter()
        .append('option')
        .text(d => d)
        .attr('value', d => d);
    showPlayerGraph(player_names[0]);
  });
  
}



function changeWeapons(precision_weapon){

  console.log("son qua");
  console.log(precision_weapon);

  //clear graph
  d3.selectAll(".weapon_image").remove();

  var chart = d3.select("#weapon_chart");
  weapons.forEach(function(w,index,array){

    precision = precision_weapon[w].precision%100;
    precision = precision.toFixed(2);
    if(precision > 0){
      chart.append("span")
           .attr("class","weapon_image")
           .text(precision);
      chart.append("div")
        .attr("id","bar_"+index)
        .attr("class","progress weapon_image")
        .append("img")
        .attr("src","weapons/"+w+".png")
        .attr("id","weapon_"+index);
      console.log("img_height: "+$("#weapon_"+index).height() + "index: "+index );
      width = $("#weapon_"+index).width() * precision;
      height = $("#weapon_"+index).height();
      $("#bar_"+index).width(width);
      if(height <= 0){
        /*TODO: bug, it doesn't always work. It seems that images are not always
          displayed immediatly so it happens that the height becomes 0 and they all overlap
        */
        $("#bar_"+index).height(49); 
      }else{
        $("#bar_"+index).height(height);
      }

      console.log("width: "+width + "px height: "+height);
      console.log(w+" "+precision);
    }

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

/*Display the precision graph for the given player*/
function showPlayerGraph(player){
  precision_weapon = {};
  fired = {};
  hit   = {};
  weapons.forEach(function(w){
    precision_weapon[w] = {'precision': 0,'hit':0,'fired':0};
  });

  console.log("Showing stats for: "+ player);
  d3.csv("output.csv").then(function(d){
      console.log("Data for: "+ player);

      //Count the fired and hit shots for every game
      for(var i = 0; i < d.length; i++){
        if(d[i].Pseudo === player){
            weapons.forEach(function(weapon){
            precision_weapon[weapon].fired += d[i]["shots_fired_"+weapon];
            precision_weapon[weapon].hit += d[i]["shots_hit_"+weapon];
          });
        }
      }


      weapons.forEach(function(w){
        if(precision_weapon[w].fired > 0){
          precision_weapon[w].precision = precision_weapon[w].hit/precision_weapon[w].fired;
          //console.log("weapon " + w+":" + precision_weapon[w].precision)
        }
      });

      changeWeapons(precision_weapon);
  });
  //console.log(precision_weapon);

}

readData();


