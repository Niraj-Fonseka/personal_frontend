import React, { Component } from 'react';
import * as d3 from 'd3';


class TechGraph extends Component {

    constructor(props){
        super(props);

    
    }


    componentDidMount(){
        var baseNodes = [
            { id: "myskills", group: 0, label: "TechStack", level: 1 },
            { id: "backend", group: 0, label: "Backend", level: 1 },
            { id: "golang"   , group: 0, label: "Golang"   , level: 2 },
            { id: "cpp"   , group: 0, label: "C++"   , level: 2 },
            { id: "python"   , group: 0, label: "Python"   , level: 2 },
            { id: "java"   , group: 0, label: "Java"  , level: 2 },
            { id: "c"   , group: 0, label: "C"    , level: 2 },
            { id: "frontend", group: 1, label: "Frontend", level: 1 },
            { id: "reactjs"   , group: 1, label: "ReactJS"   , level: 2 },
            { id: "d3js"   , group: 1, label: "D3js"   , level: 2 },
            { id: "database"  , group: 2, label: "Database"   , level: 1 },
            { id: "redis"  , group: 2, label: "Redis"   , level: 2 },
            { id: "mysql"  , group: 2, label: "MySQL"  , level: 2 },
            { id: "cloud_platforms", group: 3, label: "CloudPlatform", level: 1 },
            { id: "Google Cloud", group: 3, label: "GoogleCloudPlatform", level: 2 },
            { id: "Amazon Web Services", group: 3, label: "Amazon Web Services", level: 2 },
            { id: "infra", group: 0, label: "Infrastructure", level: 1 },
            { id: "docker", group: 0, label: "Docker", level: 2 },
            { id: "k8s", group: 0, label: "Kubernetes", level: 2 },
            { id: "docker_compose", group: 0, label: "Docker Compose", level: 2 },
            { id: "other", group: 0, label: "Other", level: 1 },
            { id: "react_native", group: 0, label: "React Native", level: 2 },
            { id: "concourse", group: 0, label: "Concourse", level: 2 },
            { id: "travis", group: 0, label: "Travis CI", level: 2 },

           

          ]
          var baseLinks = [
            { target: "backend", source: "myskills" , strength: 0.2 },
            { target: "frontend", source: "myskills" , strength: 0.2 },
            { target: "database", source: "myskills" , strength: 0.2 },
            { target: "cloud_platforms", source: "myskills" , strength: 0.2 },
            { target: "backend", source: "golang" , strength: 0.3 },
            { target: "backend", source: "cpp" , strength: 0.3 },
            { target: "backend", source: "python" , strength: 0.3 },
            { target: "backend", source: "java" , strength: 0.3 },
            { target: "backend", source: "c" , strength: 0.3 },
            { target: "frontend", source: "reactjs" , strength: 0.3 },
            { target: "frontend", source: "d3js" , strength: 0.3 },
            { target: "database"  , source: "redis", strength: 0.3 },
            { target: "database"  , source: "mysql", strength: 0.3 },
            { target: "Google Cloud"  , source: "cloud_platforms", strength: 0.3 },
            { target: "Amazon Web Services"  , source: "cloud_platforms", strength: 0.3 },
            { target: "infra",source: "myskills", strength: 0.2},
            { target: "docker",source: "infra", strength: 0.3},
            { target: "k8s",source: "infra", strength: 0.3},
            { target: "docker_compose",source: "infra", strength: 0.3},
            { target: "other",source: "myskills", strength: 0.2},
            { target: "react_native",source: "other", strength: 0.3},
            { target: "concourse",source: "other", strength: 0.3},
            { target: "travis",source: "other", strength: 0.3}



          ]

          var nodes = [...baseNodes]
          var links = [...baseLinks]


          function getNeighbors(node) {
            return baseLinks.reduce(function (neighbors, link) {
                if (link.target.id === node.id) {
                  neighbors.push(link.source.id)
                } else if (link.source.id === node.id) {
                  neighbors.push(link.target.id)
                }
                return neighbors
              },
              [node.id]
            )
          }


          function isNeighborLink(node, link) {
            return link.target.id === node.id || link.source.id === node.id
          }


          function getNodeColor(node, neighbors) {

            console.log("Get Node color function")
            console.log("Clicked on this node")
            console.log(node)
            console.log("Neighbors : ")
            console.log(neighbors)
            console.log("neighbors.indexOf(node.id) > -1")
            console.log(neighbors.indexOf(node.id) > -1)

        
            if (Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1) {
              return node.level === 1 ? 'blue' : 'green' //if the node is a root node 
            }
            return node.level === 1 ? 'red' : 'gray'
          }


          function getLinkColor(node, link) {
            return isNeighborLink(node, link) ? '07257A' : '#07257A'
          }


          function getTextColor(node, neighbors) {
            return Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1 ? 'green' : 'black'
          }

          
          // var width = window.innerWidth
          // var height = window.innerHeight
          var width = window.innerWidth * 0.75
           var height = window.innerHeight - (  window.innerWidth * 0.10)
          var svg = d3.select(this.refs.hello).append('svg')
          svg.attr('width', width).attr('height', height)
          var linkElements,
            nodeElements,
            textElements
          // we use svg groups to logically group the elements together
          var linkGroup = svg.append('g').attr('class', 'links')
          var nodeGroup = svg.append('g').attr('class', 'nodes')
          var textGroup = svg.append('g').attr('class', 'texts')
          // we use this reference to select/deselect
          // after clicking the same element twice
          var selectedId
          // simulation setup with all forces
          var linkForce = d3
            .forceLink()
            .id(function (link) { return link.id })
            .strength(function (link) { return link.strength })
          var simulation = d3
            .forceSimulation()
            .force('link', linkForce)
            .force('charge', d3.forceManyBody().strength(-200))
            .force('center', d3.forceCenter(width / 2, height / 2))
          var dragDrop = d3.drag().on('start', function (node) {
            node.fx = node.x
            node.fy = node.y
          }).on('drag', function (node) {
            simulation.alphaTarget(0.7).restart()
            node.fx = d3.event.x
            node.fy = d3.event.y
          }).on('end', function (node) {
            if (!d3.event.active) {
              simulation.alphaTarget(0)
            }
            node.fx = null
            node.fy = null
          })
          // select node is called on every click
          // we either update the data according to the selection
          // or reset the data if the same node is clicked twice
          function selectNode(selectedNode) {
            console.log("Click happeed")
            console.log(selectedNode)
            if (selectedId === selectedNode.id) {
              selectedId = undefined
              //resetData()
             // updateSimulation()
            } else {
              selectedId =  selectedNode.id
              //updateData(selectedNode)
              //updateSimulation()
            }
            var neighbors = getNeighbors(selectedNode)
            console.log("Neighbors of the node")
            console.log(neighbors)
            // we modify the styles to highlight selected nodes
            nodeElements.attr('fill', function (node) { return getNodeColor(node, neighbors) })
            textElements.attr('fill', function (node) { return getTextColor(node, neighbors) })
            //linkElements.attr('stroke', function (link) { return getLinkColor(selectedNode, link) })
          }
   
          function updateGraph() {
            // links
            linkElements = linkGroup.selectAll('line')
              .data(links, function (link) {
                return link.target.id + link.source.id
              })
            linkElements.exit().remove()
            var linkEnter = linkElements
              .enter().append('line')
              .attr('stroke-width', 5)
              .attr('stroke', 'rgba(256, 50, 50, 0.2)')
            linkElements = linkEnter.merge(linkElements)
            // nodes
            nodeElements = nodeGroup.selectAll('circle')
              .data(nodes, function (node) { return node.id })
            nodeElements.exit().remove()
            var nodeEnter = nodeElements
              .enter()
              .append('circle')
              .attr('r', 13)
              .attr('fill', function (node) { return node.level === 1 ? 'red' : 'gray' })
              .call(dragDrop)
              // we link the selectNode method here
              // to update the graph on every click
              .on('click', selectNode)
            nodeElements = nodeEnter.merge(nodeElements)
            // texts
            textElements = textGroup.selectAll('text')
              .data(nodes, function (node) { return node.id })
            textElements.exit().remove()
            var textEnter = textElements
              .enter()
              .append('text')
              .text(function (node) { return node.label })
              .attr('font-size', 15)
              .attr('dx', 15)
              .attr('dy', 4)
            textElements = textEnter.merge(textElements)
          }
          
          function updateSimulation() {
            updateGraph()
            simulation.nodes(nodes).on('tick', () => {
              nodeElements
                .attr('cx', function (node) { return node.x = Math.max(13, Math.min(width - 13, node.x))})
                .attr('cy', function (node) { return node.y = Math.max(13, Math.min(height - 13, node.y))})
              textElements
                .attr('x', function (node) { return node.x })
                .attr('y', function (node) { return node.y })
              linkElements
                .attr('x1', function (link) { return link.source.x })
                .attr('y1', function (link) { return link.source.y })
                .attr('x2', function (link) { return link.target.x })
                .attr('y2', function (link) { return link.target.y })
            })
            simulation.force('link').links(links)
            simulation.alphaTarget(0.7).restart()
          }
          updateSimulation()
          
    }
  render() {
    const { classes } = this.props;

    
    return (  
      <div style={{maxHeight: '90%' , maxWidth: '50%'}} >
        <div  ref="hello">
            
        </div>
      </div>
    );
  }
}

export default TechGraph;
