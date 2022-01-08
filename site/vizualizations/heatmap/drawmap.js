var nomJoueur = "LaMasse";

    //creer hash map pour stocker
    var d=d3.csv("src_heatmap/positionsAlt.csv").then(d=>{
    

    function update(d){
        //effacer la carte d'abord
        var canvas = d3
        .select("#heatmap")
        .selectAll("canvas")
        .remove();

        canvas = d3
        .select("#heatmap1")
        .selectAll("canvas")
        .remove();


        var typeEventSelect = d3.select("#typeEventSelect").property("value");
        var typeGameSelect = d3.select("#typeGameSelect").property("value");
        var typePlayerSelect = d3.select("#typePlayerSelect").property("value");
        var roundNumberSelect = d3.select("#sliderRoundNumber").property("value");
        var GameNumberSelect = d3.select("#sliderGameNumber").property("value");
        //console.log(typeEventSelect," ",typeGameSelect," ",typePlayerSelect," ",roundNumberSelect," ",GameNumberSelect);

        if(typeEventSelect==1){
            typeEventSelect = "DamageReceived_origin";
        }else if(typeEventSelect==2){
            typeEventSelect = "DamageReceived_target";
        }else if(typeEventSelect==3){
            typeEventSelect = "Kill";
        }else{
            typeEventSelect = "Death";
        }

        //typeGameSelect
        //"1" all the game
        //"2" in one game
        //"3" in a round

        //typePlayerSelect
        //1 player "LaMass"
        //2 tame T
        //3 tame CT
        //4 everone

        tab = new Map();

        function ajouterElementDansMap(itemD,tab){
            let x=parseFloat(itemD["X"]);
            let y=parseFloat(itemD["Y"]);
            //x=x+2411.96;
            //y=y+2479.4;
            //x=Math.floor(915-x/7.1+90);
            //y=Math.floor(487-y/7.1+220);
            x=x+2911.96;
            y=y+2479.4;
            x=Math.floor(x/7.5+80);
            y=Math.floor(487-y/7.5+255);
            let key = x.toString()+","+y.toString();
            if(tab.has(key)){
                tab.set(key,tab.get(key)+1);
            }else{
                tab.set(key,0);
            }
            return tab;
        }

        //"1" pour tous les jeus
        if(typeGameSelect==1){
            if(typePlayerSelect==1){
                // pour joueur LaMass
                    for(var i = 0;i<d.length;i++){
                        if( d[i]["Pseudo"]=="LaMasse" && d[i]["Type"]==typeEventSelect ){
                            tab = ajouterElementDansMap(d[i],tab);
                        }
                    }
            }else if(typePlayerSelect==2){
                //pour equipe T
                for(var i = 0;i<d.length;i++){
                        if(d[i]["Team"]=="T" && d[i]["Type"]==typeEventSelect ){
                            tab = ajouterElementDansMap(d[i],tab);
                        }
                }
            }else if(typePlayerSelect==3){
                //pour equipe CT
                for(var i = 0;i<d.length;i++){
                        if(d[i]["Team"]=="CT" && d[i]["Type"]==typeEventSelect ){
                            tab = ajouterElementDansMap(d[i],tab);
                        }
                }
            }else if(typePlayerSelect==4){
                //pour tout le mond
                for(var i = 0;i<d.length;i++){
                        if(d[i]["Type"]==typeEventSelect ){
                            tab = ajouterElementDansMap(d[i],tab);
                        }
                }
            }
        //"2" pour un jeu avec 15 tour
        }else if(typeGameSelect==2){
            if(typePlayerSelect==1){
                // pour joueur LaMass
                    for(var i = 0;i<d.length;i++){
                        if( d[i]["Pseudo"]=="LaMasse" && d[i]["Type"]==typeEventSelect && d[i]["Game_number"]==GameNumberSelect){
                            tab = ajouterElementDansMap(d[i],tab);
                        }
                    }
            }else if(typePlayerSelect==2){
                //pour equipe T
                for(var i = 0;i<d.length;i++){
                        if(d[i]["Team"]=="T" && d[i]["Type"]==typeEventSelect && d[i]["Game_number"]==GameNumberSelect){
                            tab = ajouterElementDansMap(d[i],tab);
                        }
                }
            }else if(typePlayerSelect==3){
                //pour equipe CT
                for(var i = 0;i<d.length;i++){
                        if(d[i]["Team"]=="CT" && d[i]["Type"]==typeEventSelect && d[i]["Game_number"]==GameNumberSelect){
                            tab = ajouterElementDansMap(d[i],tab);
                        }
                }
            }else if(typePlayerSelect==4){
                //pour tout le mond
                for(var i = 0;i<d.length;i++){
                        if(d[i]["Type"]==typeEventSelect && d[i]["Game_number"]==GameNumberSelect){
                            tab = ajouterElementDansMap(d[i],tab);
                        }
                }
            }
            //3 pour un tour pendant un jeu
        }else if(typeGameSelect==3){
            if(typePlayerSelect==1){
                // pour joueur LaMass
                    for(var i = 0;i<d.length;i++){
                        if( d[i]["Pseudo"]=="LaMasse" && d[i]["Type"]==typeEventSelect && 
                        d[i]["Game_number"]==GameNumberSelect && d[i]["Round_number"]==roundNumberSelect){
                            tab = ajouterElementDansMap(d[i],tab);
                        }
                    }
            }else if(typePlayerSelect==2){
                //pour equipe T
                for(var i = 0;i<d.length;i++){
                        if(d[i]["Team"]=="T" && d[i]["Type"]==typeEventSelect 
                        && d[i]["Game_number"]==GameNumberSelect && d[i]["Round_number"]==roundNumberSelect){
                            tab = ajouterElementDansMap(d[i],tab);
                        }
                }
            }else if(typePlayerSelect==3){
                //pour equipe CT
                for(var i = 0;i<d.length;i++){
                        if(d[i]["Team"]=="CT" && d[i]["Type"]==typeEventSelect 
                        && d[i]["Game_number"]==GameNumberSelect && d[i]["Round_number"]==roundNumberSelect){
                            tab = ajouterElementDansMap(d[i],tab);
                        }
                }
            }else if(typePlayerSelect==4){
                //pour tout le mond
                for(var i = 0;i<d.length;i++){
                        if(d[i]["Type"]==typeEventSelect 
                        && d[i]["Game_number"]==GameNumberSelect && d[i]["Round_number"]==roundNumberSelect){
                            tab = ajouterElementDansMap(d[i],tab);
                        }
                }
            }
        }

        listpoint = [];
        //transfer value dans hashmap en liste points pour ajouter dans heatmap
        for(var [key,value] of tab){
            let arr = key.split(",");
            var point = {
            //这里可以自定义
            x: parseInt(arr[0]),
            y: parseInt(arr[1]),
            value: value
            };
            listpoint.push(point);
        }
        
        //var listpoint = geneDataHasard(1000,1000);
        genereHeatmap(listpoint);

    }

    update(d);
    d3.select("#button").on("click", function () {
          update(d);
          //console.log(this.value);
    });
    
    });


    //show round number
    d3.select("#sliderRoundNumber").on("input", function () {
        d3.select("#RoundNumber").html(
        "Round Number : " +
          " " + this.value
      );
    });
    
    //show Game number
    d3.select("#sliderGameNumber").on("input", function () {
        d3.select("#GameNumber").html(
        "Game Number : " +
          " " + this.value
      );
    });