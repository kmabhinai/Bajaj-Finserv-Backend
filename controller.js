exports.getReq = (req, res) => {
	res.json({ operation_code: 1 });
};

exports.postReq = (req, res) => {
	try {
		const data = req.body.data.data || [];
		const numbers = [];
		const alphabets = [];
		let maxLower = "";
		console.log(data);
		let regex = /^[a-zA-Z]+$/;
		data.forEach((item) => {
			if (!isNaN(item)) {
				numbers.push(item);
			} else if (typeof item === "string" && regex.test(item)) {
				alphabets.push(item);
				if (item === item.toLowerCase() && (!maxLower || item > maxLower)) {
					maxLower = item;
				}
			}
		});

		res.json({
			is_success: true,
			user_id: "Kambhampati_Manjunadha_Abhinai_17112003",
			email: "manjunadha.abhinai2021@vitstudent.ac.in",
			roll_number: "21BCE2533",
			numbers: numbers,
			alphabets: alphabets,
			highest_lowercase_alphabet: maxLower ? [maxLower] : [],
		});
	} catch (error) {
		res.json({ is_success: false, error: error.message });
	}
};
