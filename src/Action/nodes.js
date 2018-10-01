const NODE_ADD = "NODE_ADD";
const NODE_DELETE = "NODE_DELETE";
const NODE_ACTIVATE = 'NODE_ACTIVATE';
const NODE_UPDATE_POSITION = "NODE_UPDATE_POSITION";

export nodeAdd = (id) =>{
    return {
        type: NODE_ADD,
        id: id,
    }
}
export nodeDelete = (id) =>{
    return {
        type: NODE_DELETE,
        id:id
    }
}
export nodeActivate = (id) =>{
    return {
        type: NODE_ACTIVATE,
        id: id
    }
}
export nodeUpdatePosition = (id, position)=>{
    return {
        type: NODE_UPDATE_POSITION,
        position: position
    }
}