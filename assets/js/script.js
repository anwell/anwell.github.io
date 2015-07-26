/// <reference path="../../typings/d3/d3.d.ts"/>
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// If not in mobile (window width is greater than main div width), animate
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

      , m   = true // toggle mode on mousedown/mouseup

      , ccx = w/cw // cell count x
      , ccy = h/ch // cell count y
      , del = 200  // ms between generations
      , delay = 5000 // time before starting to animate
      , xs  = d3.scale.linear().domain([0, ccx]).rangeRound([0, ccx * cw])
      , ys  = d3.scale.linear().domain([0, ccy]).rangeRound([0, ccy * ch])

      , states = []
      , born = d3.range(1, 7).filter(function() { return Math.random() > 0.5; })
      , staysAlive = d3.range(1, 7).filter(function() { return Math.random() > 0.5; })
      ;


    var vis = d3.select('#gamecanvas').append('svg:svg')
        .attr('width', w)
        .attr('height', h);


      function resetBoard() {
          states = [];
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
            [0, 0, 1, 0],
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
        vis.selectAll('rect').data(states).classed('life', function(d) { return d; });
    }
    resetBoard();

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

          nextState[c = coord(x,y)] = states[c] ? staysAlive.indexOf(n) >= 0 : born.indexOf(n) >= 0;
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
        console.log(states.filter(function(d) { return d;}).length);
    }

    var timer;
    function start(dela) {
        setTimeout(function() {
            timer = setInterval(animate, del);
        }, delay)
    }
    start(delay);

    // d3.select('body').on('click', function() {
    //     if (timer) {
    //         clearInterval(timer);
    //         timer = false;
    //     } else {
    //         timer = setInterval(animate, del);
    //     }
    // });

    // Rule setting
    d3.select('#born').node().value = born;
    d3.select('#stays').node().value = staysAlive;
    d3.select('#go').on('click', function() {
        console.log(staysAlive + " b");
        clearInterval(timer);
        born = getValidValue('#born');
        staysAlive = getValidValue('#stays');
        console.log(born, staysAlive);

        resetBoard();
        start(0);
    });
    function getValidValue(id) {
        return d3.select(id).node().value = d3.select(id).node().value.split('').filter(function(character) {
            return d3.range(1,7).join('').indexOf(character) >= 0;
        }).map(function(character) {
            return parseInt(character);
        });
    }
}