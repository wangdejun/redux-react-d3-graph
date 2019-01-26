const d3 = require('d3');
import store from "../Store/store";
import * as nodeAction from "../Action/nodes";
import * as linkAction from "../Action/links";


export default class Draw{
  constructor(){
    this.doZoom = { scaleNow: 1 };
  }

  addNode(node){
    let nodes = d3.select(".container")
      .append('g')
      .on('click', (d)=>{
        console.log("clicked node")
      })
      .datum(node)
      .attr('class', 'node').attr('id', (d)=>`id${d.id}`)
      .on('mousedown',d=>{
        d3.event.stopPropagation();
        d3.event.preventDefault();
      })
      .call(d3.drag().filter(d=>{
        return d;
      })
      .on('drag',d=>{
        store.dispatch(nodeAction.nodeUpdatePosition(d.id, {x:d3.event.x, y:d3.event.y}));
        console.log("drag here");
      })
      .on('end', d=>{
        console.log("drag end here!");
      })
    );

    console.log("addnode and append node----");
    nodes.append('rect')
      .attr('x', d=>d.x).attr('y', d=>d.y)
      .attr('class', 'nodeRect')
      .attr('width', d=>d.width)
      .attr('height', d=>d.height)
      .attr('stroke-width', 1)
      .attr('stroke', (d) => {return d.stroke;})
      .on('click', function(d) {
        console.log(d);
      });
  }

  addLink=(link)=>{
    let self = this;
    let linkCurrent = d3.select('.container').append('g')
    .on('click', (d)=>{
      console.log(d);
    })
    .datum(link)

    linkCurrent.append('path')
      .datum(link)
      .attr('d', function(t) {
        return self.creatPath({ x: t.source.x, y: t.source.y + t.source.r }, { x: t.target.x, y: t.target.y - t.target.r }, 25, 25);
      })
      .attr('pointer-events', 'auto')
      .attr('marker-end', 'url(#arrow)')
      .attr('class', 'link backgroundLink')

    linkCurrent.append('path')
      .datum(link)
      .attr('d', function(t) {
        return self.creatPath({ x: t.source.x, y: t.source.y + t.source.r }, { x: t.target.x, y: t.target.y - t.target.r }, 50, 50);
      })
      .attr('pointer-events', 'auto')
      .attr('class', 'link backgroundLink')
    return linkCurrent;
  }

  creatPath(start, end, dx, dy) {
      return 'M ' + start.x + ' ' + start.y + 
            ' C ' + (start.x - dx) + ' ' + (start.y + dy) + ' ' + (end.x + dx) + ' ' + (end.y - dy) + ' ' + end.x + ' ' + end.y;
  }
}