function checkExam2(array1, array2) {
	var count = 0;
	for (var i = 0; i < array1.length; i++) {
		if (array2[i] === "") {
			count += 0;
		} else if (array1[i] === array2[i]) {
			count += 4;
		} else if (array1[i] !== array2[i]) {
			count += -1;
		}
	}

	return count < 0 ? 0 : count;
}

exports.checkExam = function (array1, array2) {
	var reducer = array2.reduce(
		function (points, currAnswer) {
			if (currAnswer === "") {
				points += 0;
			} else if (currAnswer) {
				points += 4;
			}
		}, 0
	);
}