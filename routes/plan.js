/**
* used to show plan.
*/

/**
* page structure
 {
 //	type: String,
 //	title: String,
 	bgImage: String,
 	bgVideo: String,
 	phrases: [{isDoctor: Boolean, expression: String}],
 	buttons: [{value: Int, content: String}]
 }
*/

var button2pages = [
// 0
"",
// 1
"",
// 2
"Vous expliquez au patient comment suivre son traitement",
// 3
"Vous ne donnez pas plus d’explications à votre patient.",
// 4
"Vous conseillez à votre patient d’aller chez le cardiologue",
// 5
"Vous expliquez vos craintes quant à sa santé cardio-vasculaire",
// 6
"Vous interrogez votre patient sur sa compréhension de l’ordonnance",
// 7
"Vous invitez votre patient à prendre un autre rendez-vous",

// end
//8 
"Termine",
""
];
var pages = [
// keep number 0 blank
{},
// 1
{
	bgImage: null,
	bgVideo: "http://kim.kurasawa.fr/medicom/PlanS1.mp4",
	phrases: [
		{isDoctor: true, expression: "Donc, mr Dupont, je vous renouvelle votre ordonnance. On repart sur de l’Amlodipine, de la Metformine et je vous rajoute du Cialis."},
		{isDoctor: false, expression: "Oui, d'accord."}
	],
	buttons: [3,2]
},
// 2
{
	bgImage: null,
	bgVideo: "http://kim.kurasawa.fr/medicom/PlanS2.mp4",
	phrases: [
		{isDoctor: true, expression: "On vous augmente la Metformine pour traiter votre diabète, monsieur Dupont. De 1000 mg à 1002"},
		{isDoctor: false, expression: "Oui, je connais la Metformine. J’ai l’habitude de le prendre."},
		{isDoctor: true, expression: "C’est vrai, vous le prenez depuis longtemps mais j’ai fait quelques petits ajustements."},
		{isDoctor: false, expression: "Un homme avertit en vaut deux !"},
		{isDoctor: true, expression: "C’est ça ! Et puis, l’Amlodipine, on continnue, pour traiter votre hypertension."},
		{isDoctor: false, expression: "Hum"},
		{isDoctor: true, expression: "Je vous propose du Cialis pour vos troubles érectiles."},
		{isDoctor: false, expression: "D’accord, d’accord."}
	],
	buttons: [4,5,6,7]
},
// 3
{
	bgImage: null,
	bgVideo: "http://kim.kurasawa.fr/medicom/PlanS3.mp4",
	phrases: [
		{isDoctor: true, expression: "Je vous prescrits les mêmes médicaments que la dernière fois..."},
		{isDoctor: false, expression: "D'accord."},
		
		{isDoctor: true, expression: "Vous savez comment les prendre, n’est-ce pas ?"},
		{isDoctor: false, expression: "Euh, oui, oui... j’ai l’habitude."},
		{isDoctor: true, expression: "Bon, très bien. Et puis, je vous rajoute le Cialis pour vos troubles érectiles, à prendre une fois par jour."},
		{isDoctor: false, expression: "D’accord, d’accord."}
	],
	buttons: [4,5,6,7]
},
// 4
{
	bgImage: null,
	bgVideo: "http://kim.kurasawa.fr/medicom/PlanS4.mp4",
	phrases: [
		{isDoctor: true, expression: "Oui, c’est bien, mais j’aimerais que vous alliez voir un cardiologue, quand même."},
		{isDoctor: false, expression: "Un cardiologue parce que, euh, je n’arrive pas à ... ?"},
		{isDoctor: true, expression: "Oui, parfois, les troubles de l’érection peuvent précéder des troubles cardiaques. Et puis, le bilan cardiologique est préconisé tous les un à deux ans chez les diabétiques."},
		{isDoctor: false, expression: "Ah, euh, d’accord... mais je dois faire ça quand?"}
	],
	buttons: [7]
},
// 5
{
	bgImage: null,
	bgVideo: "http://kim.kurasawa.fr/medicom/PlanS5.mp4",
	phrases: [
		{isDoctor: true, expression: "On va essayer le Cialis pendant quinze jours mais il faudra qu’on en rediscute... Cela pourrait être les signes d’un problème cardio-vasculaire... Il faut qu’on suive ça."},
		{isDoctor: false, expression: "Ah d’accord, je comprends..."}
	],
	buttons: [7]
},
// 6
{
	bgImage: null,
	bgVideo: "http://kim.kurasawa.fr/medicom/PlanS6.mp4",
	phrases: [
		{isDoctor: true, expression: "Tout est clair pour vous, mr Dupont ?"},
		{isDoctor: false, expression: "Oui, je crois bien."},
		{isDoctor: true, expression: "Vous croyez?"},
		{isDoctor: false, expression: "Eh bien, en fait, je me demandais... est-ce que je peux les prendre tous en même temps ces médicaments ou bien je dois espacer leur prise ?"},
		{isDoctor: true, expression: "Aucun danger, mr Dupont, vous pouvez tous les prendre au même moment. Par contre, vous devez impérativement respecter la dose que je vous ai prescrite."},
		{isDoctor: false, expression: "Ah oui, oui, ça, je le sais !"}
	],
	buttons: [4,5,7]
},
// 7
{
	bgImage: null,
	bgVideo: "http://kim.kurasawa.fr/medicom/PlanS7.mp4",
	phrases: [
		{isDoctor: true, expression: "Le mieux serait de se revoir très vite pour bien suivre ces derniers éléments."},
		{isDoctor: false, expression: "D'accord..."},	
		{isDoctor: true, expression: "En sortant, prenez rendez-vous avec ma secrétaire. On se dit dans une quinzaine de jours ?"},
		{isDoctor: false, expression: "Oui, je ferai ça."},
		{isDoctor: true, expression: "On fera un bilan pour voir où cela en est et comment vous supportez le Cialis. Nous devons être sûrs que nous suivons au mieux vos soucis de circulation sanguine."}
	],
	buttons: [8]
},



// end
{}
];
exports.show = function(req, res){
	var p_number = req.param('number') || "";
	var number = 1;

	if (0 < p_number.length){
		number = Number(p_number);
	}
	var buttons = [];
	for (var i = 0; i < pages[number].buttons.length; i++){
		buttons.push({value: pages[number].buttons[i], content: button2pages[pages[number].buttons[i]]});
	}
	var showPar = {type: "plan",
		title: "Demo: treatment plan",
		bgImage: pages[number].bgImage,
		bgVideo: pages[number].bgVideo,
		phrases: pages[number].phrases,
		buttons: buttons};
	res.render('show', showPar);
}


