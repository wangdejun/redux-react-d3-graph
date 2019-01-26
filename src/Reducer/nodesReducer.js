import initialState from '../Store/initialState';

import {
    NODE_ADD,
    NODE_DELETE,
    NODE_ACTIVATE,
    NODE_UPDATE_POSITION,
} from '../Action/nodes'

const nodes = (state=initialState.nodes, action)=>{
    switch (action.type){
        case NODE_ADD:
            return {
                ...state,
                id: action.id,
            }
        case NODE_DELETE:
            return {
                ...state,
                id: action.id,
            }
        case NODE_ACTIVATE:
            return {
                ...state,
                id: action.id,
            }
        case NODE_UPDATE_POSITION:
            state.forEach(item=>{
                if(item.id===action.id){
                    item.x = action.position.x;
                    item.y = action.position.y;
                }
            });
            return [...state];

        default:
            return state;
    }
}

export default nodes;
