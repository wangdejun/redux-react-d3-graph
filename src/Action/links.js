export const LINK_ADD = 'LINK_ADD';
export const LINK_DELETE = 'LINK_DELETE';
export const LINK_ACTIVATE = 'LINK_ACTIVATE';

// add link
export const linkAdd = (id) =>{
    return {
        type:LINK_ADD,
        id:id
    }
}
// delete link
export const linkDelete = (id) =>{
    return {
        type: LINK_DELETE,
        id: id
    }
}
// activate link
export const linkActivate = (id) =>{
    return {
        type:LINK_ACTIVATE,
        id: id
    }
}
