app.controller("d3Charts", function ($scope) {
    $scope.scale = 1;
    
    var sampleSVG = d3.select("#viz")
            .append("svg")
            .attr("width", 600)
            .attr("height", 600);
    var dataArray = [20,10,50,20,70, 3000, 4000];
    var bars =  sampleSVG.selectAll("rect")
                                    .data(dataArray)
                                    .enter()
                                            .append("rect")
                                            .attr("width", function(d){ return d*3})
                                            .attr("height", function(d){ return 20})
                                            .attr("fill", "Red")									
                                            .attr("y" , function(d , i) {return i * 40}); 
    
    $scope.updateChart = function() {
      scale = $scope.scale;

      bars.attr("width", function(d){ return  scale*d*3})
                                            .attr("height", function(d){ return scale*20})
                                            .attr("fill", "Red")									
                                            .attr("y" , function(d , i) {return scale*i * 40}); 
    }
    
    
    
});