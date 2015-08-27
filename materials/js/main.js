var w = 1140,
    h = 820,
    x = d3.scale.linear().range([0, w]),
    y = d3.scale.linear().range([0, h]);

var tooltip = {
  mouseover: function(d) {
    var html = "<div><h6><strong>Product: </strong>"+ d.name + "</h6></div>" +
        "<div><h6><strong>Red List Status: </strong>"+ d["Red List Status"] + "</h6></div>" +
        "<div><h6><strong>FSC Content: </strong>"+ d["FSC Content"] + "</h6></div>" +
        "<div><h6><strong>Recycled Content: </strong>"+ d["Recycled Content"] + "</h6></div>" 
      this.el.html(html).transition()
    .duration(100)
    .style("opacity", 1);  
  },
  mousemove: function() {
    var pageX = event.clientX,
    pageY = event.clientY

    if (pageX < (w / 2) + 100) {
      return this.el.style("top", (pageY+10) + "px").style("left", (pageX+15) + "px");
    } 
    else {
      return this.el.style("top", (pageY+10) + "px").style("left", (pageX-220) + "px");
    }
  },
  mouseout: function(d) {
    this.el.transition()
    .duration(200)
    .style("opacity", 0);
  }
};


var expandval = 3.5

var vis = d3.select("#chart").append("svg")
    .attr("width", w)
    .attr("height", h * expandval + 60)
    .append("g").attr("id", "clipping_g");


vis.append("defs")
  .append("clipPath").attr("id", "clipping")
  .append("rect").attr("id", "clipRect")
  .attr({width: w, height: h, x: 0, y: 0});

d3.select("#clipping_g").attr("clip-path", "url(#clipping)");

var partition = d3.layout.partition().sort(function(a, b) { 
  var x = parseInt(a.name.substring(0, 2)) ? parseInt(a.name.substring(0, 2)) : a.name;
  var y = parseInt(b.name.substring(0, 2)) ? parseInt(b.name.substring(0, 2)) : b.name;
  return x - y; 
});

var baseColors = [
  '#448D98',
  '#1599C1',
  '#6B88AA',
  '#7BC8EF',
  '#AFBED3',
  '#A99989',
  '#807F83',
  '#005953',
  '#5B3D67',
  '#F9A46A',
  '#FFD200',
  '#FFF797',
  '#4F6F19',
  '#90AE3E',
  '#B4D88B',
  '#E2EDC3',
  '#D6E9E1',
  '#C2E1F6',
]

var parentColor = d3.scale.ordinal().range(baseColors)

var color = function(d) {

  if (d.depth == 0) {
    return '#DDDDDD';
  }
  else if (d.depth == 1) {
    return parentColor(d.name);
  }
  else if (d.depth == 2) {
    return parentColor(d.parent.name)
  }
  else if (d.depth == 3) {
    return parentColor(d.parent.parent.name)
  }
  else if (!d.children) {
    if (d["Red List Status"].toLowerCase() == "red list free") {
      
      return "#6CB33F"; // darker green
    }
    else if (d["Red List Status"].toLowerCase() == "lbc compliant") {
      return "#B4D88B"; //lighter green
    }
    else if (d["Red List Status"].toLowerCase() == "declared" || d["Red List Status"].toLowerCase() == "unknown")  {
      return "#BE6768";
    }
    else {
      return "#BEC0C2";
    }
  }
  else {
    return "#DDDDDD";
  }
}

var change_vals = function(d) {
  if (!("key" in d) && !("values" in d)) {
    return {name: d["Product"], 
    "Recycled Content": d["Recycled Content"], 
    "FSC Content": d["FSC Content"], 
    "Red List Status": d["Red List Status"]}
  }
  else {
    return {name: d.key, children: d.values.map(function(dd) { return change_vals(dd); })}
  }
}

function treeSearch(d, gd) {
  if ((d.name == gd.name) && (d.depth == gd.depth) && (d.children.length == gd.heirs)){
    return d;
  }
  else if (d.children != null) {
    var result = null;
    for (var i=0; result == null && i < d.children.length; i++) {
      result = treeSearch(d.children[i], gd);
    }
    return result
  }
  return null;
}

function changeState(id) {
  var ids = ["btn_product", "btn_manufacturer", "btn_subdivision", "btn_division"]
  ids.forEach(function(d) { $("#" + d).removeClass("active"); });
  $("#" + id).addClass("active");
}

function openLink(d) {
  var search = d.parent.name + " " + d.name
  var url = "http://www.google.com/search?btnI=I%27m+Feeling+Lucky&ie=UTF-8&oe=UTF-8&q=" + search //+ "+%s"
  window.open(url, "_blank");
}




var expand = false;

d3.csv("MaterialDatabase_CSV.csv", function(root) {


  tooltip.el = d3.select("body").append("div")
          .attr("class", "tooltip")
          .style("opacity", 0);

  var filtered = root.map(function(d) {
    var ks = d3.keys(d).filter(function(x) { return x != ""; });
    var r = {}
    ks.forEach(function(val) {
      return r[val] = d[val];
    });
    return r;
  });

  var divisions = d3.nest()
    .key(function(d) { return d["CSI Division"]; })
    .rollup(function(v) { return v.name; })
    .entries(filtered).map(function(d) { return d.key; });

  nested = d3.nest()
    .key(function(d) { return d["CSI Division"]; })
    .key(function(d) { return d["Subdivision Name"]})
    .key(function(d) { return d["Manufacturer"]})
    .entries(filtered);

  nested = {key: "Division", values: nested}
  nested = change_vals(nested);


  var tot = filtered.length;

  partition.value(function(v) { 
        return tot/(v.parent.children.length*v.parent.parent.children.length*v.parent.parent.parent.children.length); });

  parentColor.domain(divisions);

  var gd = {name: "Division", depth: 0, heirs: nested.children.length};


  var btnSort = {
    btnProduct: function(d) {
      changeState("btn_product")
      partition.value(function(v) { return 1; });
      partition.nodes(nested);
      click(treeSearch(nested, gd));
    },
    btnManufacturer: function(d) {
      changeState("btn_manufacturer")
      partition.value(function(v) { return tot/v.parent.children.length; });
      partition.nodes(nested);
      click(treeSearch(nested, gd));
    },
    btnSubdivision: function(d) {
      changeState("btn_subdivision")
      partition.value(function(v) { return tot/(v.parent.children.length*v.parent.parent.children.length); });
      partition.nodes(nested);
      click(treeSearch(nested, gd));
    },
    btnDivision: function(d) {
      changeState("btn_division")
      partition.value(function(v) { 
        return tot/(v.parent.children.length*v.parent.parent.children.length*v.parent.parent.parent.children.length); });
      partition.nodes(nested);
      click(treeSearch(nested, gd));
    }
  }

  function btnExpand() {
    if (expand == true) {
      $("#btn_expand").removeClass("active");
      d3.select("#clipRect").transition().duration(800).attr("height", h);
      expand = false;
    }
    else {
      $("#btn_expand").addClass("active");
      d3.select("#clipRect").transition().duration(800).attr("height", (h * expandval));
      expand = true
    }
    click(treeSearch(nested, gd));
  }

  d3.select("#btn_product").select("a").on("click", btnSort.btnProduct);
  d3.select("#btn_manufacturer").select("a").on("click", btnSort.btnManufacturer);
  d3.select("#btn_subdivision").select("a").on("click", btnSort.btnSubdivision);
  d3.select("#btn_division").select("a").on("click", btnSort.btnDivision);

  d3.select("#btn_expand").select("a").on("click", btnExpand);

  

  var g = vis.selectAll("g")
      .data(partition.nodes(nested))
    .enter().append("svg:g")
      .attr("transform", function(d) { return "translate(" + x(d.y) + "," + y(d.x) + ")"; });
      

  var kx = w / nested.dx,
      ky = h / 1;

  g.append("svg:rect")
      .attr("width", nested.dy * kx)
      .attr("height", function(d) { return d.dx * ky; })
      .style("fill", function (d) { return color(d); })
      .attr("class", function(d) { return d.children ? "parent" : "child"; })
      .on("click", click)
      .on("mouseover", function(d) { return d.children ? null : tooltip.mouseover(d); })
      .on("mousemove", function(d) { return d.children ? null : tooltip.mousemove(); })
      .on("mouseout", function(d) { return d.children ? null : tooltip.mouseout(d); })


  g.append("svg:text")
      .attr("transform", transform)
      .attr("dy", ".35em")
      .attr("font-size", 10)
      .style("opacity", function(d) { return d.dx * ky > 12 ? 1 : 0; })
      .text(function(d) { return d.name; })

  //d3.select("svg")
      //.on("click", function() { click(nested); })


  function click(d) {
   
    var ex = expand ? expandval: 1;
    gd.name = d.name; 
    gd.depth = d.depth;
    
    if (!d.children) {
      openLink(d)
      gd.heirs = 0
      return;
    }
    gd.heirs = d.children.length 


    kx = (d.y ? w - 40 : w) / (1 - d.y);
    ky = h * ex / d.dx;
    x.domain([d.y, 1]).range([d.y ? 40 : 0, w]);
    y.domain([d.x, d.x + d.dx]);

    var t = g.transition()
        .duration(800)
        .attr("transform", function(d) { return "translate(" + x(d.y) + "," + (y(d.x)*ex) + ")"; });

    t.select("rect")
        .attr("width", d.dy * kx)
        .attr("height", function(d) { return d.dx * ky; });

    t.select("text")
        .attr("transform", transform)
        .style("opacity", function(d) { return d.dx * ky > 12 ? 1 : 0; });

    d3.event.stopPropagation();
  }

  function transform(d) {
    return "translate(8," + d.dx * ky / 2 + ")";
  }

});