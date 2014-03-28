var Browser = require("zombie");
var assert = require("assert");
 
browser = new Browser()
browser.visit("http://127.0.0.1:6805/cloud-explorer/").
	then(function() {
	    assert.ok(browser.querySelector("input#name-css").hasAttribute("placeholder"));
	    console.log("\nTest #1 : success \n");
	}).
	  fail(function(error) {
	  console.log("\nTest assertion attribut input\n", error);
	});

browser.visit("http://127.0.0.1:6805/cloud-explorer/").
	then(function() {
  	    browser.
    	fill("#name-css","css-file").
    	select("#typeFile","css").
    	fill("#content-css",".moncss { toto:toto;}").
    	pressButton("Save file").
	    	then(function(){
	    		assert.ok(browser.querySelector("p.bg").className === "bg bg-success");
	    		console.log("Test #2 : success")
			}).
			fail(function(error) {
		  		console.log("\nSave failed\n", error);
	    	});
	}).
	fail(function(error) {
  		console.log("\nCan\'t press button\n", error);
	});