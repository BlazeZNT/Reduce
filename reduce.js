words = ["Hello", "Is", "it", "me", "youre"];

hehe = words.reduce(function (sum, next) {
	return sum + " " + next;
});

nums = [123, 3, 45, 7, 32, 42, 152, 3536];

chMin = nums.reduce(function (min, nextword) {
	// if (min > nextword) {
	// 	return min;
	// } else {
	// 	return nextword;
	// }
	return min > nextword ? nextword : min;
}, 1);
