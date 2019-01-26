import React, { Component } from 'react';
import Draw from './Draw';
import './GraphFlow.less';

class GraphFlow extends Component {
  constructor(props) {
    super(props);
    this.draw = new Draw();
  }

  componentDidMount(){
    this.refresh();
  }

  componentDidUpdate(){
    this.refresh();
  }

  refresh = () => {
    if(this.props.store&&this.props.store.links){
      this.props.store.links.map(link=>{
        this.draw.addLink(link);
      })
    };

    if(this.props.store && this.props.store.nodes){
      this.props.store.nodes.map(node=>{
        this.draw.addNode(node);
      });
    };
  }

  render() {
    return (
      <div>
        <div className ="index-header">
          <h2>Redux-react-flow</h2> 
        </div>
        <div className="left-nav">
          <ul>
          {
            ["drag-text1","drag-text2","drag-text3","drag-text4"].map(item=><li draggable={true} key={item}>{item}</li>)
          }
          </ul>
        </div>
        <svg id="board" width={1500} height={2000} style={{backgroundColor:"#aaa", marginLeft:"200px",marginTop:"60px"}}>
          <g id="dagre_main" className="container">
          </g>
        </svg>
        <svg width="100" height="100"></svg>
      </div>
    );
  }
}

export default GraphFlow;


