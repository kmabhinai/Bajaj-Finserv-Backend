exports.getReq = (req, res) => {
	res.json({ operation_code: 1 });
};

exports.postReq = (req, res) => {
	try {
		const data = req.body.data || [];
		console.log(req);

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
			user_id: "Iddamakanti_Venketswar_Reddy_03082003",
			email: "ir7470@srmist.edu.in",
			roll_number: "RA2111003011469",
			numbers: numbers,
			alphabets: alphabets,
			highest_lowercase_alphabet: maxLower ? [maxLower] : [],
		});
	} catch (error) {
		res.json({ is_success: false, error: error.message });
	}
};
