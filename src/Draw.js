const d3 = require('d3');

export default class Draw{
    init(){
        const svg = d3.select("#board");
        var state = [
            { label: 'project_etl_start\n虚节点', class: 'type-suss' }, 
            { label: 'project_etl_start\n虚节点', class: 'type-TOP' },   
            { label: 'project_etl_start\n虚节点', class: 'type-TOP' },  
            { label: 'project_etl_start\n虚节点', class: 'type-TOP' },  
            { label: 'project_etl_start\n虚节点', class: 'type-TOP' },   
            { label: 'project_etl_start\n虚节点', class: 'type-TOP' },    
            { label: 'project_etl_start\n虚节点', class: 'type-TOP' },    
            { label: 'project_etl_start\n虚节点', class: 'type-TOP' },    
            { label: 'project_etl_start\n虚节点', class: 'type-TOP' },    
            { label: 'project_etl_start\n虚节点', class: 'type-TOP' },    
            { label: 'project_etl_start\n虚节点', class: 'type-TOP' },    
            { label: 'project_etl_start\n虚节点', class: 'type-TOP' },    
            { label: 'project_etl_start\n虚节点', class: 'type-TOP' },    
            { label: 'project_etl_start\n虚节点', class: 'type-TOP' },    
            { label: 'project_etl_start\n虚节点', class: 'type-TOP' }
        ]  
        var edg = [
            { start: 1, end: 4, option: {} },
            { start: 1, end: 3, option: {} },
            { start: 1, end: 2, option: {} },
            { start: 6, end: 7, option: {} },
            { start: 5, end: 6, option: {} },
            { start: 9, end: 10, option: {} },
            { start: 8, end: 9, option: {} },
            { start: 11, end: 12, option: {} }, 
            { start: 8, end: 11, option: {} },
            { start: 5, end: 8, option: {} },
            { start: 1, end: 5, option: {} },
            { start: 13, end: 14, option: {} },
            { start: 1, end: 13, option: {} },
            { start: 0, end: 1, option: {} }
          ]

        var g = new dagreD3.graphlib.Graph()
            .setGraph({})
            .setDefaultEdgeLabel(function () { return {}; });

            for (let i in state) { //画点
                let el = state[i]
                g.setNode(i, {
                  id: i,
                  label: el.label,
                  class: el.class
                });
            }
            for (let i in edg) { // 画连线
                let el = edg[i]
                g.setEdge(el.start, el.end, {
                    style: "stroke: #0fb2cc; fill: none;",
                    arrowheadStyle: "fill: #0fb2cc;stroke: #0fb2cc;",
                    arrowhead: 'vee'
                });
            }

            var render = new dagreD3.render();
            var svg = d3.select("#board"); //声明节点
            svg.select("g").remove(); //删除以前的节点，清空画面
            var svgGroup = svg.append("g");
            var inner = svg.select("g");
            var zoom = d3.zoom().on("zoom", function () { //添加鼠标滚轮放大缩小事件
              inner.attr("transform", d3.event.transform);
            });
            svg.call(zoom);
            this.drawNode();//画点
            this.drawEdg();// 画连线
            render(d3.select("svg g"), this.g); //渲染节点
            let max = svg._groups[0][0].clientWidth>svg._groups[0][0].clientHeight?svg._groups[0][0].clientWidth:svg._groups[0][0].clientHeight;
            var initialScale = max/779; //initialScale元素放大倍数，随着父元素宽高发生变化时改变初始渲染大小
            var tWidth = (svg._groups[0][0].clientWidth  - this.g.graph().width * initialScale) / 2; //水平居中
            var tHeight = (svg._groups[0][0].clientHeight  - this.g.graph().height * initialScale) / 2; //垂直居中
            svg.call(zoom.transform, d3.zoomIdentity.translate(tWidth, tHeight).scale(initialScale)); //元素水平垂直居中

            var svgCanvas = document.getElementById('svg-canvas'); //svg
            var myMenu = document.getElementById("myMenu"); //右键菜单

            svgCanvas.addEventListener('mouseover', function (e) {//监听鼠标右键
                e.preventDefault();
                if (e.target.tagName === 'rect') {
                    myMenu.style.top = event.clientY + "px"; //获取鼠标位置
                    myMenu.style.left = event.clientX + "px";
                    myMenu.style.display = 'block';      //显示相应右键内容
                }
            })

            document.addEventListener("click", (event) => {
                myMenu.style.display = 'none';
            });
    }
}
