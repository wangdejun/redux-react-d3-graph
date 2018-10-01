import initialState from '../Store/initialState';
import {
    LINK_ADD,
    LINK_DELETE,
    LINK_ACTIVATE,
} from '../Action/links';

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
        default:
            return state;
    }
}

export default links;
