import { connect } from 'react-redux';
import {
    nodeAdd,
    nodeDelete,
    nodeActivate,
    nodeUpdatePosition
} from '../Action/nodes';

import {
    linkAdd,
    linkDelete,
    linkActivate
} from '../Action/links'

import GraphFlow from '../GraphFlow/GraphFlow';

const mapStateToProps = state => {
    return {store: state};
};

const mapDispatchToProps = dispatch => {
    return {
        nodeAdd: (id)=>{
            dispatch(nodeAdd(id));
        },
        nodeDelete: (id)=>{
            dispatch(nodeDelete(id));
        },
        nodeActivate: (id)=>{
            dispatch(nodeActivate(id));
        },
        nodeUpdatePosition: (id, position)=>{
            dispatch(nodeUpdatePosition(id, position));
        },
        linkAdd: (id)=>{
            dispatch(linkAdd(id));
        },
        linkDelete: (id)=>{
            dispatch(linkDelete(id));
        },
        linkActivate: (id)=>{
            dispatch(linkActivate(id));
        }
    }
}

const GraphFlowContainer = connect(mapStateToProps, mapDispatchToProps)(GraphFlow);

export default GraphFlowContainer;

