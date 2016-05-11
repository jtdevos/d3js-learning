
$(function() {
    "use strict";
    
    
    var data = [];
    var svg = d3.select("svg");
    var width = $("svg").width() + 0;
    
    function getid() {
        return (new Date()).getTime();
    }
    
    
    function update() {
        console.log("data is now %o", data);
        var circle = svg.selectAll("circle")
            .data(data, function(d) { return d.id; });
        

        circle.enter().append("circle")
            .attr("cy", 60)
            .attr("cx", function(d, i) { return 50 + (i * ((width-100) / data.length)); })
            .attr("r", function(d) { return Math.sqrt(d.value); })
            .attr("fill", "none")
            .attr("stroke-width", "1")
            .attr('stroke', 'gray');
        
        circle
            .transition()
            .duration(800)
            .attr("cx", function(d, i) { return 50 + (i * ((width-100) / data.length)); })

            
        circle.exit().remove();        
    }

    $('#btnAddItem').click(function() {
        var item = {id: getid(), value: Math.round(Math.random() * 500)};
        data.push(item);
        update();
    });
    
    $('#btnRemoveItem').click(function() {
        data.pop();
        update();
        
    })
    
    update();
    
});