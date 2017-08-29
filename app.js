/*
 *  Starter code for University of Waterloo CS349 - Spring 2017 - A3.
 *	Refer to the JS examples shown in lecture for further reference.
 *  Note: this code uses ECMAScript 6.
 *  Updated 2017-07-12.
 */
	
"use strict";

// Get your own API key from https://uwaterloo.ca/api/register
var apiKey = 'e50751b977332a231027b799afae5921';
var endpointUrl ="https://api.uwaterloo.ca/v2/courses.json";



(function(exports) {
	/* allCourse */
    var allCourseModel = function() {
			
		
		var dataBase = [];

        // You can add attributes / functions here to store the data
        // Call this function to retrieve data from a UW API endpoint	
		//this.loadData = function(endpointUrl) {
			//var that = this;
			$.ajax({url:endpointUrl + "?key=" + apiKey,beforeSend:function(){alert("loading");}})
				.done(function (data) {
					// Do something with the data; probably store it
					// in the Model to be later read by the View.
					// Use that (instead of this) to refer to the instance 
					// of AppModel inside this function.
					
					dataBase = data.data;	
				document.getElementById('t1').innerHTML = "<tr><td class=\"course_id\">course_id</td><td class=\"suject\">subject</td><td class=\"catalog_number\">catalog_number</td><td class=\"title\">title</td></tr>";
				for(var i = 0; i < dataBase.length; i++){
					var entry = dataBase[i];
					var row = document.getElementById('t1').insertRow();
					row.innerHTML = "<td>" + entry.course_id + "</td>"+"<td>" + entry.subject + "</td>"+"<td>" + entry.catalog_number + "</td>"+"<td>" + entry.title + "</td>";
				}
					
				
				alert("finished");});
				

				}
				
				
	/*input course_id*/
    var CourseIdModel = function() {
			
		var dataBase = [];
		var cid = document.getElementById("course_id").value;
		

        // You can add attributes / functions here to store the data
        // Call this function to retrieve data from a UW API endpoint	
		//this.loadData = function(endpointUrl) {
			//var that = this;
			$.ajax({url:endpointUrl + "?key=" + apiKey, beforeSend:function(){alert("loading");}})
				.done(function (data) {
					// Do something with the data; probably store it
					// in the Model to be later read by the View.
					// Use that (instead of this) to refer to the instance 
					// of AppModel inside this function.
					
					dataBase = data.data;	
				document.getElementById('t1').innerHTML = "<tr><td class=\"course_id\">course_id</td><td class=\"suject\">subject</td><td class=\"catalog_number\">catalog_number</td><td class=\"title\">title</td></tr>";
				for(var i = 0; i < dataBase.length; i++){
					var entry = dataBase[i];
					if(entry.course_id == cid){
						var row = document.getElementById('t1').insertRow();
						row.innerHTML = "<td>" + entry.course_id + "</td>"+"<td>" + entry.subject + "</td>"+"<td>" + entry.catalog_number + "</td>"+"<td>" + entry.title + "</td>";
					}
				}
					
				
				alert("finished");});
				}


	/*input subject*/
    var subjectModel = function() {
			
		var dataBase = [];
		var sub = document.getElementById("subject").value;
		

        // You can add attributes / functions here to store the data
        // Call this function to retrieve data from a UW API endpoint	
		//this.loadData = function(endpointUrl) {
			//var that = this;
			$.ajax({url:endpointUrl + "?key=" + apiKey, beforeSend:function(){alert("loading");}})
				.done(function (data) {
					// Do something with the data; probably store it
					// in the Model to be later read by the View.
					// Use that (instead of this) to refer to the instance 
					// of AppModel inside this function.
					
					dataBase = data.data;	
				document.getElementById('t1').innerHTML = "<tr><td class=\"course_id\">course_id</td><td class=\"suject\">subject</td><td class=\"catalog_number\">catalog_number</td><td class=\"title\">title</td></tr>";
				for(var i = 0; i < dataBase.length; i++){
					var entry = dataBase[i];
					if(entry.subject == sub){
						var row = document.getElementById('t1').insertRow();
						row.innerHTML = "<td>" + entry.course_id + "</td>"+"<td>" + entry.subject + "</td>"+"<td>" + entry.catalog_number + "</td>"+"<td>" + entry.title + "</td>";
					}
				}
					
				
				alert("finished");});
		}

		
		
	/*catalog_number*/
    var cumModel = function() {
			
		var dataBase = [];
		var cum = document.getElementById("cumselect").value;
		

        // You can add attributes / functions here to store the data
        // Call this function to retrieve data from a UW API endpoint	
		//this.loadData = function(endpointUrl) {
			//var that = this;
			$.ajax({url:endpointUrl + "?key=" + apiKey, beforeSend:function(){alert("loading");}})
				.done(function (data) {
					// Do something with the data; probably store it
					// in the Model to be later read by the View.
					// Use that (instead of this) to refer to the instance 
					// of AppModel inside this function.
					
					dataBase = data.data;	
				document.getElementById('t1').innerHTML = "<tr><td class=\"course_id\">course_id</td><td class=\"suject\">subject</td><td class=\"catalog_number\">catalog_number</td><td class=\"title\">title</td></tr>";
				for(var i = 0; i < dataBase.length; i++){
					var entry = dataBase[i];
					if(entry.catalog_number[0] == cum[0]){
						var row = document.getElementById('t1').insertRow();
						row.innerHTML = "<td>" + entry.course_id + "</td>"+"<td>" + entry.subject + "</td>"+"<td>" + entry.catalog_number + "</td>"+"<td>" + entry.title + "</td>";
					}else if(cum[0] == "x" && (entry.catalog_number[0]=="W"||entry.catalog_number[0]=="S")){
						var row = document.getElementById('t1').insertRow();
						row.innerHTML = "<td>" + entry.course_id + "</td>"+"<td>" + entry.subject + "</td>"+"<td>" + entry.catalog_number + "</td>"+"<td>" + entry.title + "</td>";						
					}
				}
					
				
				alert("finished");});

		}
		
		
	/* Starter */
    var AppModel = function() {
			
		
		var dataBase = [];

        // You can add attributes / functions here to store the data
        // Call this function to retrieve data from a UW API endpoint	
		//this.loadData = function(endpointUrl) {
			//var that = this;
			$.ajax({url:endpointUrl + "?key=" + apiKey, beforeSend:function(){alert("loading");}})
				.done(function (data) {
					// Do something with the data; probably store it
					// in the Model to be later read by the View.
					// Use that (instead of this) to refer to the instance 
					// of AppModel inside this function.
					
					dataBase = data.data;	
				
				for(var i = 0; i < dataBase.length; i++){
					var entry = dataBase[i];
					var row = document.getElementById('t1').insertRow();
					row.innerHTML = "<td>" + entry.course_id + "</td>"+"<td>" + entry.subject + "</td>"+"<td>" + entry.catalog_number + "</td>"+"<td>" + entry.title + "</td>";
				}
					
				
				alert("finished");});
				

				}
				

	/*
		Function that will be called to start the app.
		Complete it with any additional initialization.
	*/
    exports.startApp = function() {
        var model = new AppModel();
        //var view = new AppView(model, "div#viewContent");
    }
	exports.allCourseApp = function(){
		var model_1 = new allCourseModel();
	}
	exports.CourseIdApp = function(){
		var model_2 = new CourseIdModel();
	}
	exports.subjectApp = function(){
		var model_3 = new subjectModel();
	}
	exports.cumApp = function(){
		var model_4 = new cumModel();
	}
	

})(window);
