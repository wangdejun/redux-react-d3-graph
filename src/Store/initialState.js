const initialState = {
    nodes:[
        {'id':'1','x':250,'y':100, width:26, height:26, bgcolor:"rgba(47, 67, 114, 0.5)"},
        {'id':'2','x':150,'y':150, width:26, height:26, bgcolor:"rgba(47, 67, 114, 0.5)"},
        {'id':'3','x':350,'y':150, width:26, height:26, bgcolor:"rgba(47, 67, 114, 0.5)"},
        {'id':'4','x':100,'y':300, width:26, height:26, bgcolor:"rgba(47, 67, 114, 0.5)"},
        {'id':'5','x':200,'y':300, width:26, height:26, bgcolor:"rgba(47, 67, 114, 0.5)"},
        {'id':'6','x':300,'y':300, width:26, height:26, bgcolor:"rgba(47, 67, 114, 0.5)"},
        {'id':'7','x':400,'y':300, width:26, height:26, bgcolor:"rgba(47, 67, 114, 0.5)"},
    ],
    links:[
        {
            'source':{id:"1"},
            'target':{id:"2"},
        },
        {
            'source':{id:"1"},
            'target':{id:"3"},
        },
        {
            'source':{id:"2"},
            'target':{id:"4"},
        },
        {
            'source':{id:"2"},
            'target':{id:"5"},
        },
        {
            'source':{id:"3"},
            'target':{id:"6"},
        },
        {
            'source':{id:"3"},
            'target':{id:"7"},
        },
    ],
}


function getInitialValue(initialState){
    initialState.links.forEach(item=>{
        item.source.x = initialState.nodes.filter(x=>x.id===item.source.id)[0].x
        item.source.y = initialState.nodes.filter(x=>x.id===item.source.id)[0].y
        item.source.r = 50;
        item.target.x = initialState.nodes.filter(x=>x.id===item.target.id)[0].x
        item.target.y = initialState.nodes.filter(x=>x.id===item.target.id)[0].y
        item.target.r = 50;
    })
    return initialState
}




export default getInitialValue(initialState);