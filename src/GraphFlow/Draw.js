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
      .attr('width', d=>d.width).attr('height', d=>d.height)
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