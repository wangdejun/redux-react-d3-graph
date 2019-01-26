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
      .on('click', (d)=>{console.log("clicked node")})
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
        d3.selectAll('g .st').remove();
        d3.selectAll(`g #id${d.id}`).remove();
        store.dispatch(nodeAction.nodeUpdatePosition(d.id, {x:d3.event.x, y:d3.event.y}));
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
      .attr('fill', "pink")
      .attr("stroke", "black")
      .attr('stroke-width', 3)
      .text(d=>d.id)
      .on('click', function(d) {
        console.log(d);
      });
  }

  addLink = (link) => {
    let self = this;
    let linkCurrent = d3.select('.container').append('g')
    .on('click', (d)=>{
      console.log(d);
    })
    .datum(link)

    linkCurrent.append('path')
      .datum(link)
      .attr('d', function(t) {
        return self.creatPath({ 
          x: t.source.x, 
          y: t.source.y
        }, { 
          x: t.target.x, 
          y: t.target.y
        });
      })
      .attr("class", d=>`link backgroundLink source${d.source.id} target${d.target.id} st`)
    return linkCurrent;
  }

  creatPath(start, end) {
    return `M ${start.x+13} ${start.y+13} L ${end.x+13} ${(end.y+13)}`
  }
}