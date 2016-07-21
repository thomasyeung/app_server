
var express = require("express");

var app = express();

app.use(express.static(__dirname + "/static"));

app.get("/", function(req, res){
//res.render("index.html");
//res.send("Hurry ! We have Node With Express running..");
});


// respond with "Hello World!" on the homepage
app.get("/employees", function (req, res) {
  res.send({ "employees":[
	{
	  "name":"Raj",
	   "age": 31,
	   "class":"JQuery, AngularJS",
	   "address":"1234 Stevens street, San Jose, CA"
	}
	,
	{
	  "name":"Mr Kumar",
	   "age": 23,
	   "class":"JAVA, SQL",
	   "address":"21212 london street, San Jose, CA"
	}
	,
	{
	  "name":"Mike Smith",
	   "age": 28,
	   "class":"C++, AngularJS, HTML5, CSS3",
	   "address":"22 will wood street, Santa Clara, CA"
	}
		]
   });
});

app.get("/charts", function (req, res) {
  res.send({
      "doughnutData" :[
      {
        "value": 300,
        "color":"#F7464A",
        "highlight": "#FF5A5E",
        "label": "Red"
      },
      {
        "value": 50,
        "color": "#46BFBD",
        "highlight": "#5AD3D1",
        "label": "Green"
      },
      {
        "value": 100,
        "color": "#FDB45C",
        "highlight": "#FFC870",
        "label": "Yellow"
      }
    ],
    "lineData" : {
      "labels": ["January", "February", "March", "April", "May", "June", "July"],
      "datasets": [
        {
          "label": "My First dataset",
          "fillColor": "rgba(220,220,220,0.2)",
          "strokeColor": "rgba(220,220,220,1)",
          "pointColor": "rgba(220,220,220,1)",
          "pointStrokeColor": "#fff",
          "pointHighlightFill": "#fff",
          "pointHighlightStroke": "rgba(220,220,220,1)",
          "data": [65, 59, 80, 81, 56, 55, 40]
        },
        {
          "label": "My Second dataset",
          "fillColor": "rgba(151,187,205,0.2)",
          "strokeColor": "rgba(151,187,205,1)",
          "pointColor": "rgba(151,187,205,1)",
          "pointStrokeColor": "#fff",
          "pointHighlightFill": "#fff",
          "pointHighlightStroke": "rgba(151,187,205,1)",
          "data": [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    },
    "barData" : {
      "labels": ["January", "February", "March", "April", "May", "June", "July"],
      "datasets": [
        {
          "label": "My First dataset",
          "fillColor": "rgba(220,220,220,0.5)",
          "strokeColor": "rgba(220,220,220,0.8)",
          "highlightFill": "rgba(220,220,220,0.75)",
          "highlightStroke": "rgba(220,220,220,1)",
          "data": [65, 59, 80, 81, 56, 55, 40]
        },
        {
          "label": "My Second dataset",
          "fillColor": "rgba(151,187,205,0.5)",
          "strokeColor": "rgba(151,187,205,0.8)",
          "highlightFill": "rgba(151,187,205,0.75)",
          "highlightStroke": "rgba(151,187,205,1)",
          "data": [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    },
    "pieData" : [
      {
        "value": 300,
        "color":"#F7464A",
        "highlight": "#FF5A5E",
        "label": "Red"
      },
      {
        "value": 50,
        "color": "#46BFBD",
        "highlight": "#5AD3D1",
        "label": "Green"
      },
      {
        "value": 100,
        "color": "#FDB45C",
        "highlight": "#FFC870",
        "label": "Yellow"
      }
    ],
    "polarData" : [
      {
        "value": 300,
        "color":"#F7464A",
        "highlight": "#FF5A5E",
        "label": "Red"
      },
      {
        "value": 50,
        "color": "#46BFBD",
        "highlight": "#5AD3D1",
        "label": "Green"
      },
      {
        "value": 100,
        "color": "#FDB45C",
        "highlight": "#FFC870",
        "label": "Yellow"
      },
      {
        "value": 40,
        "color": "#949FB1",
        "highlight": "#A8B3C5",
        "label": "Grey"
      },
      {
        "value": 120,
        "color": "#4D5360",
        "highlight": "#616774",
        "label": "Dark Grey"
      }
    ]
   });
});




app.listen(1336, function(){
console.log("Ready on port 1336");
});


/*
var http = require("http");
http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello World\n");
}).listen(1337, "127.0.0.1");
console.log("Server running at http://127.0.0.1:1337/");
*/