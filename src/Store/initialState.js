const initialState = {
    nodes:[
        {'id':'1','x':100,'y':100, width:25, height:25, bgcolor:"rgba(47, 67, 114, 0.5)"},
        {'id':'2','x':400,'y':100, width:25, height:25, bgcolor:"rgba(47, 67, 114, 0.5)"},
        {'id':'3','x':400,'y':400, width:25, height:25, bgcolor:"rgba(47, 67, 114, 0.5)"},
        {'id':'4','x':100,'y':400, width:25, height:25, bgcolor:"rgba(47, 67, 114, 0.5)"},
        {'id':'5','x':200,'y':200, width:25, height:25, bgcolor:"rgba(47, 67, 114, 0.5)"},
    ],
    links:[
        {
            'source':{id:"5"},
            'target':{id:"1"},
        },
        {
            'source':{id:"5"},
            'target':{id:"2"},
        },
        {
            'source':{id:"5"},
            'target':{id:"3"},
        },
        {
            'source':{id:"5"},
            'target':{id:"4"},
        }
    ],
}

initialState.links.forEach(item=>{
    item.source.x = initialState.nodes.filter(x=>x.id===item.source.id)[0].x
    item.source.y = initialState.nodes.filter(x=>x.id===item.source.id)[0].y
    item.source.r = 50;
    item.target.x = initialState.nodes.filter(x=>x.id===item.target.id)[0].x
    item.target.y = initialState.nodes.filter(x=>x.id===item.target.id)[0].y
    item.target.r = 50;
})



export default initialState;