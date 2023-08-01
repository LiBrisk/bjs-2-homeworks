"use strict"

function solveEquation(a, b, c) {
	let discriminant = b ** 2 - 4 * a * c;
	if (discriminant < 0) {
		return [];
	} else if (discriminant === 0) {
		const root = -b / (2 * a);
		return [root];
	} else {
		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [root1, root2];
	}
}

	function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	        let percentMonth = percent / 100 / 12;
	        let creditSum = amount - contribution;
	        let monthPay = creditSum * (percentMonth + (percentMonth / (((1 +percentMonth) ** countMonths) - 1)));
	        let totalPayment = monthPay * countMonths;
	        let roundedTotalPayment = Math.round(totalPayment * 100) / 100;
	        return roundedTotalPayment;

	}