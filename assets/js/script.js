var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// If not in mobile, animate
if (w > 850) {
    gol();
    hover();
}
function hover() {
    d3.selectAll('.col')
        .on('mouseenter', function() {
            d3.select(this).select('.top').style('opacity', 0);
        })
        .on('mouseleave', function() {
            d3.select(this).select('.top').style('opacity', 1);
        });
}
function gol() {
    var cw  = 8 // cellWidth
      , ch  = 8 // cellHeight
      , w   = Math.ceil(window.innerWidth / cw) * cw // window width rounded to multiple of cell width
      , h   = Math.ceil(window.innerHeight / ch) * ch // window height rounded to multiple of cell height

      , m   = false // toggle mode on mousedown/mouseup

      , ccx = w/cw // cell count x
      , ccy = h/ch // cell count y
      , del = 100  // ms between generations
      , xs  = d3.scale.linear().domain([0, ccx]).rangeRound([0, ccx * cw])
      , ys  = d3.scale.linear().domain([0, ccy]).rangeRound([0, ccy * ch])

      , states = []
      ;

    d3.range(ccx * ccy).forEach(function(c) {
      states[c] = false;
    });

    var custom = [
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [1, 0, 0, 1],
        [1, 1, 0, 1],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 0, 0, 1],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 1, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [1, 0, 1, 0],
        [1, 1, 1, 1]
    ];
    var node = d3.select('.main').node();
    var xOffset = Math.floor(node.offsetLeft / cw) - custom[0].length - 2;
    var yOffset = Math.floor((node.offsetTop + 40) / ch);
    for (var x = 0; x < custom[0].length; x++) {
        for (var y = 0; y < custom.length; y++) {
            states[coord(x + xOffset, y + yOffset)] = custom[y][x] == 1;
        }
    }

    var vis = d3.select('#gamecanvas').append('svg:svg')
        .attr('width', w)
        .attr('height', h);

    vis.selectAll('rect')
        .data(states)
      .enter().append('svg:rect')
      .attr('width', cw)
      .attr('height', ch)
      .attr('rx', cw)
      .attr('ry', ch)
      .attr('x', function(d, i) { return xs(i % ccx); })
      .attr('y', function(d, i) { return ys(i / ccx | 0); })
      .on('mouseup', function() { m = false; })
      .on('mousedown', function() { m = true; })
      .on('mousemove', function(d, i) { if (m) states[i] = !states[i]; })
      .classed('life', function(d) { return d; });

    function createNewGeneration() {
      var c, x, y, t, r, b, l, n, nextState = [];
      for (x = 0; x < ccx; x++) {
        l = x - 1;
        r = x + 1;
        for (y = 0; y < ccy; y++) {
          t = y - 1;
          b = y + 1;
          n = states[coord(l,t)] + states[coord(x,t)] + states[coord(r,t)]
            + states[coord(l,y)] +                      states[coord(r,y)]
            + states[coord(l,b)] + states[coord(x,b)] + states[coord(r,b)];

          nextState[c = coord(x,y)] = states[c] ? n == 2 || n == 3 : n == 3;
        }
      }
      return nextState;
    }

    function coord(x, y) {
      return coord[x +','+ y] ||
            (coord[x +','+ y] = ccx * ((ccy + y) % ccy) + ((ccx + x) % ccx));
    }

    function animate() {
      d3.selectAll('rect')
        .data(states = createNewGeneration())
        .classed('life', function(d) { return d; });
    }

    var timer;
    setTimeout(function() {
        timer = setInterval(animate, del);
    }, 5000)

    d3.select('body').on('click', function() {
        console.log("TESt");
        if (timer) {
            clearInterval(timer);
            timer = false;
        } else {
            timer = setInterval(animate, del);
        }
    });
}