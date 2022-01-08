    //generer data au hasard
    function geneDataHasard(width,height){
        // now generate some random data
        var points = [];
        var max = 100;
        var min = 0;
        var len = 100;
        var maxWeight = 100;
    
        while (len--) {
            var val = Math.floor(Math.random() * maxWeight);
            max = Math.max(max, val);
            min = Math.min(min, val);
            var point = {
            //这里可以自定义
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height),
            value: val
            };
            points.push(point);
            
        }
        return points;
    }
    //obtient valeur maximal et minimal
    function getMax(points){
        if(points.length==0)
        return 0;
        var max = points[0].value;
        for(var i=0;i<points.length;i++){
            if(max<points[i].value)
                max = points[i].value;
        }
        return max;
    }
    function getMin(points){
        if(points.length==0)
        return 0;
        var min = points[0].value;
        for(var i=0;i<points.length;i++){
            if(min>points[i].value)
            min = points[i].value;
        }
        return min;
    }
    //draw heatmap
    function genereHeatmap(points){
      var radius = 20;
      var width = 1000;
      var height = 1000;
    
      var canvas = d3
        .select("#heatmap")
        .append("canvas")
        .attr("width", width)
        .attr("height", height);
    
      var context = canvas.node().getContext("2d");
    
      var max = getMax(points);
      var min = getMin(points);
      
      //draw each circle
      points.forEach((d) => {
        // 开始为每个数据点绘制圆，圆心为[x,y]，半径为radius
        context.beginPath();
        context.arc(d.x, d.y, radius, 0, 2 * Math.PI);
        context.fillStyle = "red";
        // 给圆加上渐变色，圆心至边的渐变色为#000至透明
        let radialGradient = context.createRadialGradient(
          d.x,
          d.y,
          0,
          d.x,
          d.y,
          radius
        );
        radialGradient.addColorStop(0, "rgba(0,0,0,1)");
        radialGradient.addColorStop(1, "rgba(0,0,0,0)");
        context.fillStyle = radialGradient;
        // 给圆加上透明度，值为globalAlpha
        
        let globalAlpha = (d.value - min) / (max - min)
        context.globalAlpha = Math.max(Math.min(globalAlpha, 1), 0)
         
        context.fill();
        context.closePath();
      });
      context.globalAlpha=0.7;
    
      //creer a line of color 256*1
      function getColorPaint() {
        // 创建一条宽为256,高为1的像素带，颜色可自定义。
        var w = 256;
        var h = 1;
    
        var paletteCanvas = d3
          .select("#heatmap1")
          .append("canvas")
          .attr("width", w)
          .attr("height", h);
    
        var ctx = paletteCanvas.node().getContext("2d");
    
        //define color
        let gradientConfig = {
          "0.0": "#6E32C2",
          "0.1": "#1890FF",
          "0.2": "#12CCCC",
          "0.3": "#80FF73",
          "0.4": "#FAFFA8",
          "0.5": "#FFC838",
          "0.6": "#FF8C12",
          "0.7": "#FA541C",
          "1.0": "#F51D27"
        };
        //creer un bound pixcel 256*1
        let linearGradient = ctx.createLinearGradient(0, 0, w, h);
        for (let key in gradientConfig) {
          // 绘制彩色渐变色条
          linearGradient.addColorStop(key, gradientConfig[key]);
        }
        ctx.fillStyle = linearGradient;
        ctx.fillRect(0, 0, w, h);
        return ctx.getImageData(0, 0, width, height).data;
      }
    
      
      let palette = getColorPaint();
    
      let pointImg = context.getImageData(0, 0, width, height);
      let pointImgData = pointImg.data;
    
        
        for (var i = 3; i < pointImgData.length; i += 4) {
            let alpha = pointImgData[i];
            let offset = alpha * 4;
            pointImgData[i - 3] = palette[offset];
            pointImgData[i - 2] = palette[offset + 1];
            pointImgData[i - 1] = palette[offset + 2];
        }
        pointImg.data = pointImgData;
        
        context.putImageData(pointImg, 0, 0);
        var bgImg = new Image();
        bgImg= document.getElementById("imgs");
        context.drawImage(bgImg, 0, 0, width, height);
    }
    