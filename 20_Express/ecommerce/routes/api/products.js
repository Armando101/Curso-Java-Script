const express = require('express');
const router = express.Router();
const productMock = require('../../utils/mocks/products');

router.get('/', function (req, res) {
	const { query } = req.query;

	res.status(200).json({
		data: productMock,
		message: 'products listed' 
	});	
});

router.get('/:prductId', function (req, res) {
	const { productId } = req.params;

	res.status(200).json({
		data: productMock[0],
		message: 'products retrived' 
	});	
});

router.post('/', function (req, res) {
	res.status(201).json({
		data: productMock[0],
		message: 'product created' 
	});	
});

router.put('/:prductId', function (req, res) {
	res.status(200).json({
		data: productMock[0],
		message: 'product updated' 
	});	
});

router.delete('/', function (req, res) {
	res.status(200).json({
		data: productMock[0],
		message: 'product deleted' 
	});	
});

module.exports = router;