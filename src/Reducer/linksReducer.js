import initialState from '../Store/initialState';
import {
    LINK_ADD,
    LINK_DELETE,
    LINK_ACTIVATE,
} from '../Action/links';

import {
    NODE_UPDATE_POSITION,
} from '../Action/nodes'


const links = (state = initialState.links, action)=>{
    switch(action.type){
        case LINK_ADD:
            return {
                ...state,
                id: action.id,
            };
        case LINK_DELETE:
            return {
                ...state ,
                id: action.id,
            }
        case LINK_ACTIVATE:
            return {
                ...state,
                id: action.id,
            }
        case NODE_UPDATE_POSITION:
            state.forEach(item=>{
                if(item.source.id===action.id){
                    item.source.x = action.position.x;
                    item.source.y = action.position.y;
                }
                if(item.target.id===action.id){
                    item.target.x = action.position.x;
                    item.target.y = action.position.y;
                }
            })
            return [...state];

        default:
            return state;
    }
}

export default links;
