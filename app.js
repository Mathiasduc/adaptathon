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
			if(!me.questions[me.i]){
				me.answerDisplay();
			}
		},

		answerDisplay: function(){
			$("#questioningBox").hide();
			$("#answer").html(this.answer);
			$("#answer2").html(this.answer2);
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
		],

		answer: "Vous etes une entreprise de type truc et vous pouvez beneficier de ce "+
		"<a class='link' href='quelquepart' data-content='info concernant ce lien'>lien vers</a>"+
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque consectetur atque fugiat,"+
		" accusamus illum voluptatem nam deleniti sequi debitis itaque doloribus esse, dolores perferendis"+
		" at! Inventore, a placeat aliquid quam!",

		answer2: "Votre situation vous rend potentielenment eligible pour tels financement:<br>" +
		'<img src="http://www.cocerto.fr/wp/wp-content/uploads/2015/10/Agefiph_aides_montants_embauche_handicapes_2016.png"'+
		' alt="liste des financements possibles" /> '
		
	};

	app.init();
})();