(function () {
	var app = {

		buttonSelect: $("button"), 
		i: 0,

		init: function(){
			this.listeners();
		},

		listeners: function(){
			const me = this;
			me.buttonSelect.on('click', me.clickButton.bind(me));
		},

		clickButton: function(event){
			var me = this;
			$("#question").addClass('animated fadeOut');
			window.setTimeout(next,500);

			function next(){
			$("#question").removeClass('animated fadeOut');
			$("#question").text(me.questions[me.i]).addClass("animated fadeIn");
			me.i++;
			}
			
		},

		questions: [
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		"Vero dolores deleniti consectetur beatae odit. Laboriosam, impedit minus perferendis sit,",
		"eaque quae praesentium ipsum deleniti commodi maiores, autem magnam iusto. Eos.",
		"question 3",
		"question 4",
		"question 5",
		"question 6",
		"question 7"
		]


	};

	app.init();
})();