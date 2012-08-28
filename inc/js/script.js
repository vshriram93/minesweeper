//The main game js file -- its ok if u screw it up..
//v are going to develop it as a jquery plugin

(function($, window, document, undefined){
	console.log("Js script loaded successfully");
	$.fn.minesweeper = function (options){
		console.log("jQuery plugin called successfully");
		options = $.extend({
			background: "#eee"
		});

		//use a global object so that the new plugin is safe from global variables.
		window.minesweeper = {};
		window.minesweeper.items = {};

		var handlerObject = {
			//this is the part where u put in ur functions
			"onNodeClick": function (){

			},
			"onResetClick": function (){

			},
			"onStartClick": function (){

			},
			"onPauseClick": function (){

			}
		}
	}
})(jQuery,this,this.document);

(function($, window, document, undefined){
	//the jquery plugin that v wrote above can now be called on the dom object
	$("#minesweeper").minesweeper();
})(jQuery,this,this.document);