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

  refresh = () => {
    console.log("refresh----->>>")
    console.log(this.props.store.nodes);

    if(this.props.store && this.props.store.nodes){
      this.props.store.nodes.map(node=>{
        this.draw.addNode(node);
      });
    };

    if(this.props.store&&this.props.store.links){
      this.props.store.links.map(link=>{
        this.draw.addLink(link);
      })
    };
  }

  handleDrop=(e)=>{
    e.persist();
    e.preventDefault();
    e.stopPropagation();
  }

  handleDragOver(e) {
    e.persist();
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    this.refresh();
    return (
      <div>
        <div style={{position:"fixed",width:"100%",height:'60px',border:"1px solid #eee"}}>
          <h2>redux-react-flow</h2> 
          <div onClick={()=>this.draw.addNode({'id':'4','x':530,'y':600, width:50, height:50, bgcolor:"rgba(47, 67, 114, 0.5)"})}>添加节点</div>
          <div>添加连线</div>
        </div>
        <ul style={{position:"fixed",top:'60px',listStyle:"none",cursor:"pointer"}}>
        {
          ["drag-text1","drag-text2","drag-text3","drag-text4"].map(item=><li draggable={true} key={item}>{item}</li>)
        }
        </ul>
        <svg id="board" width={1500} height={2000} onDragOver={this.handleDragOver} onDrop={this.handleDrop} style={{backgroundColor:"#aaa", marginLeft:"200px",marginTop:"60px"}}>
          <g id="dagre_main" className="container"></g>
        </svg>
        <svg width="100" height="100"></svg>
      </div>
    );
  }
}

export default GraphFlow;


