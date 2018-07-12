var path = document.querySelector(".n");
var pathLengthN = path.getTotalLength();
var path = document.querySelector(".c");
var pathLengthC = path.getTotalLength();
var path = document.querySelector(".tt");
var pathLengthTT = path.getTotalLength();
var path = document.querySelector(".tb");
var pathLengthTB = path.getTotalLength();
var path = document.querySelector(".u");
var pathLengthU = path.getTotalLength();

console.log(pathLengthN);console.log(pathLengthC);
console.log(pathLengthTT);console.log(pathLengthTB);
console.log(pathLengthU);

function NPress(element_id)
{
	$("#n-top").css("animation","opacity 1s linear forwards");
	$(".n").css("animation", "dashN 2s linear forwards");
}

$(document).ready(function(){
	$(document).keypress(function(e){
		switch(e.which)
		{
			case 110: NPress('#n-top');
				NPress(".n");
			break;
		}
	}); });

function CPress(element_id)
{
	$("#c-top").css("animation","opacity 1s linear forwards");
	$(".c").css("animation", "dashC 2s linear forwards");
}

$(document).ready(function(){
	$(document).keypress(function(e){
		switch(e.which)
		{
			case 99: CPress('#c-top');
				CPress(".c");
			break;
		}
	});});

function TPress(element_id)
{
	$("#t-top").css("animation","opacity 1s linear forwards");
	$(".tt").css("animation", "dashTT 1s linear forwards");
	$(".TTT").css("animation", "dashTT 1s linear forwards");
	$(".tb").css("animation", "dashTB 1s linear forwards");
	$(".TBB").css("animation", "dashTB 1s linear forwards");
	$(".tb").css("animation-delay", "1s");
	$(".TBB").css("animation-delay", "1s");
}

$(document).ready(function(){
	$(document).keypress(function(e){
		switch(e.which)
		{
			case 116: TPress('#t-top');
				TPress(".tt"); TPress(".TTT");
				TPress(".tb"); TPress(".TBB");
			break;
		}
	});});

function UPress(element_id)
{
	$("#u-top").css("animation","opacity 1s linear forwards");
	$(".u").css("animation", "dashU 2s linear forwards");
}

$(document).ready(function(){
	$(document).keypress(function(e){
		switch(e.which)
		{
			case 117: UPress('#u-top');
				UPress(".u");
			break;
		}
	});});


// N: 110
// C: 99
// T: 116
// U: 117