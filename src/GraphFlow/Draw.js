const d3 = require('d3');

export default class Draw{
  constructor(){
    this.doZoom = { scaleNow: 1 };
  }

  addNode(node){
    let nodes = d3.select(".container")
      .append('g')
      .on('click', (d)=>{
        console.log(d);
      })
      .datum(node)
      .attr('class', 'node').attr('id', (d)=>`id${d.name}`)
      .on('mousedown',d=>{d3.event.stopPropagation();})
      .call(d3.drag().filter(d=>{})
        .on('drag',d=>{
          console.log("drag here");
        })
        .on('end', d=>{
          console.log("drag end here!");
        })
    );

    nodes.append('rect')
      .attr('x', d=>d.x).attr('y', d=>d.y)
      .attr('class', 'nodeRect')
      .attr('width', d=>d.width)
      .attr('height', d=>d.height)
      .style('background-color', 'blue')
      .attr('stroke-width', 1)
      .attr('stroke', (d) => {return d.stroke;})
      .on('click', function(d) {
      });
  }

  addLink=(link)=>{
    console.log("---->A")
    console.log(link);
    console.log("---->B")
    let self = this;
    let linkCurrent = d3.select('.container').append('g')
    .on('click', (d)=>{
      console.log(d);
    })
    .datum(link)
    console.log("---->C")


    linkCurrent.append('path')
      .datum(link)
      .attr('d', function(t) {
        return self.creatD({ x: t.source.x, y: t.source.y + t.source.r }, { x: t.target.x, y: t.target.y - t.target.r }, 10, 100);
      })
      .attr('pointer-events', 'auto')
      .attr('marker-end', 'url(#arrow)')
      .attr('class', function(t) {
        let statusClass = 'successRun';
        return 'link ' + statusClass;
      });
    console.log("---->D")
    linkCurrent.append('path')
      .datum(link)
      .attr('d', function(t) {
        return self.creatD({ x: t.source.x, y: t.source.y + t.source.r }, { x: t.target.x, y: t.target.y - t.target.r }, 10, 100);
      })
      .attr('pointer-events', 'auto')
      .attr('class', 'link backgroundLink')
      .on('mouseover', function(t) {
        d3.select(this).classed('backgroundLink', null);
        d3.select(this).classed('backgroundLinkShow', true);
      })
      .on('mouseout', function(t) {
        d3.select(this).classed('backgroundLink', true);
        d3.select(this).classed('backgroundLinkShow', null);
      });

    return linkCurrent;
  }

  //返回d属性
  creatD(start, end, dx, dy) {
      return 'M ' + start.x + ' ' + start.y + ' C ' + (start.x - dx) + ' ' + (start.y + dy) + ' ' + (end.x + dx) + ' ' + (end.y - dy) + ' ' + end.x + ' ' + end.y;
  }

  zoom=(svg)=>{
    this.doZoom.zoom=null;
    let zoom = d3.zoom().scaleExtent([1 / 2, 5]).on('start',()=>{
      console.log("zoom start");
    }).on('zoom',()=>{
      var transform = d3.event.transform;
      this.transform(d3.select("#dagre_main"), transform)
      this.doZoom.scaleNow = transform.k;
    })
    this.doZoom.zoom = zoom;
    svg.call(zoom).on("dblclick.zoom", null).on("wheel.zoom",null);
  }
  
  initSvgEvent=(svg)=>{
    this.zoom(svg);
    svg.on('click',(d)=>{
      console.log("initSvgEvent");
      console.log(d)
    })
    svg.on('mousemove',(d)=>{
      console.log('mousemove');
      console.log(d)
    })
    svg.on('mouseup', (d)=>{
      console.log('mouseup');
      console.log(d)
    })
  }

  init(){
      const svg = d3.select("#board");
      this.initSvgEvent(svg)
      console.log("run here!");
  }
}