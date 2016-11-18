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
			window.setTimeout(next,	110);

			function next(){
				$("#question").removeClass('animated fadeOut');
				$("#question").text(me.questions[me.i]).addClass("animated fadeIn");
				$(".blue").text("Non");
				$(".orange").text("Oui");
				me.i++;
			}
			if(!me.questions[me.i]){
				me.answerDisplay();
			}
		},

		answerDisplay: function(){
			$("#questioningBox").hide();
			$("#answer").html(this.answer);
			/*$("#answer2").html(this.answer2);*/
			$(".link").popup();
		},

		questions: [
		"Etape 2: Disposez d'un accord d'entreprise?",
		"Etape 3: Etes vous une entreprise du secteur sanitaire et social ?",
		"Etape 4: Le salarié est-il bénéficiaire de la loi 2015?",
		"Etape 5: La reconnaissance RQTH est-elle en cours de validité?",
		"Etape 6: Le salarié a-t-il des restrictions d'aptitudes?"
		],

		answer: 
		"<h1 class='answers'>Votre solution: </h1>" + 
		"<div class='answers' >Vous etes une entreprise privée ne ne bénéficiant pas d'un accord d'entreprise et n'appartenant " +
		"pas au secteur sanitaire et social.</div>"+
		"<div class='answers' >Vous avez declaré un salarie titulaire de la RQTH.</div>" +
		"<div class='answers' >Le salarie presente des contre-indications liées à son poste de travail posées par la médecine du travail.</div>"+
		"<div class='answers' >Aide au maintien dans l'emploi:</div>"+
		"<div class='answers' >Vous pouvez prétendre à une aide de 2000 Euros deblocable rapidement afin de subvenir à l'adaptation du poste de travail"+
		"<div class='answers' >En fontion de vos besoin une aide complémentaire de 3000 Euros peut être débloqué</div>"+
		"<div class='answers' >Contacter un conseiller SAMETH 31</div>"+
		"<div class='answers' >05 67 69 01 36</div>"+
		"<div class='answers' >info@sameth31.fr</div>"+
		"<div class='answers' >Prise en charge sous 48h</div>"+
		"<div class='answers' ><button class='ui button'>Envoyer un mail type</button></di>",
		


		
	};

	app.init();
})();