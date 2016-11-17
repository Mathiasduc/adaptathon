(function () {
	var app = {

		buttonSelect: document.getElementsByTagName('button'), 

		init: function(){
			this.listeners();
		},

		listeners: function(){
			buttonSelect.on('click', clickButton);
		},

		clickButton: function(event){
			console.log("click");
		},
	};

	app.init();
})();