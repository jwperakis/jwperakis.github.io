var radianceColors = [
      "#712A89",
      "#303F99",
      "#03ACAB",
      "#30AD4A",
      "#986755",
      "#A3393B",
      "#AF1F25",
      "#DD1F26",
      "#F47421",
      "#FEE923"
   ];

var units = "cd/m2";

function viewport_size(w) {

   // Use the specified window or the current window if no argument
   w = w || window;

   // This works for all browsers except IE8 and before
   if (w.innerWidth != null) return { w: w.innerWidth, h: w.innerHeight };

   // For IE (or any browser) in Standards mode
   var d = w.document;
   if (document.compatMode == "CSS1Compat")
      return { w: d.documentElement.clientWidth,
         h: d.documentElement.clientHeight };

   // For browsers in Quirks mode
   return { w: d.body.clientWidth, h: d.body.clientHeight };

}

function drawScale() {
   var lumMax = 1500;

   var scaleBar = d3.select("#scale-container").classed("hidden", false).append("svg").attr("class", "scale-svg");
   var scaleHeight = parseInt(d3.select(".scale-svg").style("height")) - 25 ;
   
   g = scaleBar.selectAll("g").data(radianceColors.reverse())
         .enter().append("g").attr("class", "legend").attr("transform", function(d, i) { return "translate(0," + (i * scaleHeight / radianceColors.length + 25) + ")"; })

   g.each(function(d, i) {
      var c = d3.select(this);
      var pos = (i % 2 == 0) ? "even": "odd";
      c.append("rect")
         .attr({
            "width": 26,
            "height": scaleHeight / radianceColors.length,
            "x": 1,
            "y": 0
         })
         .style({"fill": d, "stroke": d});

      c.append("line")
         .attr({
            "x1": 29,
            "y1": 0,
            "x2": 37,
            "y2": 0,
            "stroke-width": 1,
            "stroke": "#000",
            "shape-rendering": "crispEdges",
            "class": pos 
         });

      c.append("text")
         .attr({
            "fill": "#000", 
            "stroke": "#fff", 
            "stroke-width": "2px", 
            "paint-order": "stroke", 
            "stroke-opacity": .3,
            "dy": ".4em",
            "dx": "40px",
            "class": pos
         })
         .text(Math.round(lumMax - i * lumMax / radianceColors.length).toString());

   });

   scaleBar.append("text")
      .attr({
         "fill": "#000", 
         "stroke": "#fff", 
         "stroke-width": "2px", 
         "paint-order": "stroke", 
         "stroke-opacity": .3,
         "dy": "1em",
         "dx": "4px",
         "class": "units"
      })
      .text(units);

   updateLegend();

}

function updateLegend() {
   if (lumScale) {

      if (viewport_size().h >= 650) {
         var scaleHeight = parseInt(d3.select(".scale-svg").style("height")) - 25;
         d3.select("#scale-container").classed("hidden", false);
         g = d3.selectAll(".legend").attr("transform", function(d, i) { return "translate(0," + (i * scaleHeight / radianceColors.length + 25) + ")"; });
      
         g.selectAll("rect").attr("height", scaleHeight / radianceColors.length);
         g.selectAll(".odd").style("opacity", 1);
      }
      else if (viewport_size().h < 650 && viewport_size().h >= 315 ) {
         var scaleHeight = parseInt(d3.select(".scale-svg").style("height")) - 25;
         d3.select("#scale-container").classed("hidden", false);
         g = d3.selectAll(".legend").attr("transform", function(d, i) { return "translate(0," + (i * scaleHeight / radianceColors.length + 25) + ")"; });
      
         g.selectAll("rect").attr("height", (scaleHeight / radianceColors.length));
         g.selectAll(".odd").style("opacity", 0);
      }
      else {
         d3.select("#scale-container").classed("hidden", true);
      }
   }

}

