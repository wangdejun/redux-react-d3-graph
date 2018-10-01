const initialState = {
    nodes:[
        {'name':'graph-flow-1','x':500,'y':600, width:50, height:50, bgcolor:"rgba(47, 67, 114, 0.5)"},
        {'name':'graph-flow-2','x':100,'y':200, width:50, height:50, bgcolor:"rgba(47, 67, 114, 0.5)"},
        {'name':'graph-flow-3','x':200,'y':400, width:50, height:50, bgcolor:"rgba(47, 67, 114, 0.5)"},
    ],
    links:[
        {
        'source':{x:500, y: 600, r:50},
        'target':{x:100, y: 200, r:50},
        },
        {
        'source':{x:200, y: 400, r:50},
        'target':{x:100, y: 200, r:50},
        }
    ],
}

export default initialState;