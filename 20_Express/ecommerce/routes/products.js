const express = require('express');
const router = express.Router();

const products = [
	{
		name: "Red shoes",
		price: 75
	},
	{
		name: "Black bike",
		price: 300	
	}
];

router.get('/', (req, res) => {
	res.render('products', { products })
});

module.exports = router;