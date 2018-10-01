import React, { Component } from 'react';
import Draw from './Draw';
import './GraphFlow.less';

class GraphFlow extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:{
        nodes:[
          {'name':'graph-flow-1','x':500,'y':600, width:50, height:50, bgcolor:"rgba(47, 67, 114, 0.5)"},
          {'name':'graph-flow-2','x':100,'y':200, width:50, height:50, bgcolor:"rgba(47, 67, 114, 0.5)"},
          {'name':'graph-flow-3','x':200,'y':400, width:50, height:50, bgcolor:"rgba(47, 67, 114, 0.5)"},
        ],
        links:[
          {
            'source':{x:500, y: 600, r:50},
            'target':{x:100, y: 200, r:50},
          },
          {
            'source':{x:200, y: 400, r:50},
            'target':{x:100, y: 200, r:50},
          }
        ],
      }
    }
    this.draw = new Draw();
  }

  componentDidMount(){
    let draw = this.draw;
    draw.init();
    if(this.props.store&&this.props.store.nodes){
      this.props.store.nodes.map(node=>{
        draw.addNode(node);
      });
    };

    if(this.props.store&&this.props.store.links){
      this.props.store.links.map(link=>{
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
    console.log("0000this.props")
    console.log(this.props);
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
            <defs>
              <marker id="arrow" markerUnits="strokeWidth" markerWidth="12" markerHeight="12" viewBox="0 0 12 12" refX="6" refY="6" orient="auto">
                <path d="" fill="none"></path>
                <path d="M10 60 C 20 80, 40 80, 50 60" stroke="3" fill="none"/>
              </marker>
            </defs>
          </g>
          <g id="dagre_main" className="container"></g>
        </svg>
        <svg width="100" height="100"></svg>
      </div>
    );
  }
}

export default GraphFlow;


