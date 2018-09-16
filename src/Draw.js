const d3 = require('d3');

export default class Draw{
  constructor(){
      this.option = {};
  }

  drawLink(data){
    let self = this;
    let pathNow = d3.select('.container')
      .append('g')
      .on('click',function(d){
        console.log("do something here when a link is clicked");
      });
    pathNow.append('path')
      .datum(data)
      .attr('d', function(t){
        return self.createD(
          {x: t.source.x, y: t.source.y + t.source.r}, 
          {x: t.target.x, y: t.target.y - t.target.r},
          10,
          100
        );
      })
  }

  createD(source, target, dx, dy){
    return 'M ' + start.x + ' ' + start.y + ' C ' +(start.x - dx) +' ' + (start.y+ dy) + ' ' + (end.x + dx) + ' ' + (end.y - dy) + ' ' + end.x + ' ' + end.y;
  }

  init(){
      const svg = d3.select("#board");
  }
}
