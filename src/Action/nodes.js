export const NODE_ADD = "NODE_ADD";
export const NODE_DELETE = "NODE_DELETE";
export const NODE_ACTIVATE = 'NODE_ACTIVATE';
export const NODE_UPDATE_POSITION = "NODE_UPDATE_POSITION";

export const nodeAdd = (id) =>{
    return {
        type: NODE_ADD,
        id: id,
    }
}
export const nodeDelete = (id) =>{
    return {
        type: NODE_DELETE,
        id:id
    }
}
export const nodeActivate = (id) =>{
    return {
        type: NODE_ACTIVATE,
        id: id
    }
}
export const nodeUpdatePosition = (id, position)=>{
    console.log("in action ----->>> ");
    console.log(id);
    console.log(position);
    return {
        type: NODE_UPDATE_POSITION,
        id:id,
        position: position
    }
}