import React, { Component } from 'react';
import Draw from './Draw';

class GraphFlow extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:{
        nodes:[
          {'name':'graph-flow-1','x':500,'y':600, width:100, height:100},
          {'name':'graph-flow-2','x':100,'y':200, width:100, height:100},
        ],
        links:[
          {
            'source':{x:500, y: 600, r:100},
            'target':{x:100, y: 200, r: 100},
          }
        ],
      }
    }

    this.draw = new Draw();
  }

  componentDidMount(){
    let draw = this.draw;
    draw.init();
    if(this.state.data&&this.state.data.nodes){
      this.state.data.nodes.map(node=>{
        draw.addNode(node);
      });
    };

    if(this.state.data&&this.state.data.links){
      this.state.data.links.map(link=>{
        draw.addLink(link);
      })
    };
  }

  handleDrop=(e)=>{
    e.persist();
    e.preventDefault();
    e.stopPropagation();
    console.log(e.nativeEvent.offsetX);
    console.log(e.nativeEvent.offsetY);
  }
  handleDragOver(e) {
    e.persist();
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    return (
      <div>
        <div style={{position:"fixed",width:"100%",height:'60px',border:"1px solid #eee"}}>
          <h2>redux-react-flow</h2> 
        </div>
        <ul style={{position:"fixed",top:'60px',listStyle:"none",cursor:"pointer"}}>
        {
          ["drag-text1","drag-text2","drag-text3","drag-text4"].map(item=><li draggable={true} key={item}>{item}</li>)
        }
        </ul>
        <svg id="board" width={1500} height={2000} onDragOver={this.handleDragOver} onDrop={this.handleDrop} style={{border:"1px solid #aaa", marginLeft:"200px",marginTop:"60px"}}>
          <g>
            牛逼
            <defs>
              <marker id="arrow" markerUnits="strokeWidth" markerWidth="12" markerHeight="12" viewBox="0 0 12 12" refX="6" refY="6" orient="auto">
                <path d="M0,3 L6,6 L0,9 L3,6 L0,3" fill="#000"></path>
              </marker>
            </defs>
          </g>
          <g id="dagre_main" className="container"></g>
        </svg>
      </div>
    );
  }
}

export default GraphFlow;


