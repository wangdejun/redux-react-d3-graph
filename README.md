
# redux-react-d3-flow-graph
<a href='https://www.npmjs.com/package/redux-graph-flow'>redux-graph-flow</a> as a npm package

## a tree flow graph component
This will be a very simple react component which showing how to draw a tree graph with d3, and synchronize state with other components, using Redux.

Operations upon [Node]s
* <b>ADD / DELETE / DRAG</b>
    * to manipulate the nodes in the flow
* <b> ACTIVATE (hover or click) to get the current [node] details</b>
    * active particular node and get detail of the node
    * update the detail information in the current activated node

Operations upon [Link]s
* <b>ADD / DELETE </b>
    * manipulate the links in the flow
* <b>ACTIVATE (hover or click)</b>
    * to get the current selected [link]'s details info
    * to activate the editable state;

## start a dev server
* use the command below to start the webpack-dev-server with hot module reloading
```npm start```
then open the ```http://localhost:9000/```in your browser.

## eslint 
* use the command below to lint the code
```npm run eslint```

* and this command to fix eslint warnnings & errors
```npm run eslint:fix```
