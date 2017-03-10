$(document).ready(function () {
	$("#button").on("click", function (e) {
		e.preventDefault();

		var a = parseFloat($("#a").val());
		var b = parseFloat($("#b").val());

		var totalAdded = add(a, b);
		var totalMultiplied = multiply(a, b);
		var totalSubtracted = subtract(a, b);
		var totalDivided = divide(a, b);

		$("#answer1").val(totalAdded);
		$("#answer2").val(totalMultiplied);
		$("#answer3").val(totalSubtracted);
		$("#answer4").val(totalDivided);
	})
});

function add(a, b) {
	var totalAdded = (a + b);
	return totalAdded;
}

function multiply(a, b) {
	var totalMultiplied = (a * b);
	return totalMultiplied;
}

function subtract(a, b) {
	var totalSubtracted = (a - b);
	return totalSubtracted;
}

function divide(a, b) {
	var totalDivided = (a / b);
	return totalDivided;
}
