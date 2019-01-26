const initialState = {
    nodes:[
        {'id':'1','x':500,'y':600, width:50, height:50, bgcolor:"rgba(47, 67, 114, 0.5)"},
        {'id':'2','x':100,'y':200, width:50, height:50, bgcolor:"rgba(47, 67, 114, 0.5)"},
        {'id':'3','x':200,'y':400, width:50, height:50, bgcolor:"rgba(47, 67, 114, 0.5)"},
    ],
    links:[
        {
            'source':{id:"1"},
            'target':{id:"2"},
        },
        {
            'source':{id:"1"},
            'target':{id:"3"},
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