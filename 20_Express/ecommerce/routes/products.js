const express = require('express');
const router = express.Router();
const products = require('../utils/mocks/products');

const ProductsService = require('../services/products');
const productsService = new ProductsService();

router.get('/', async (req, res, next) => {
	const { tags } = req.query;
	try {
		const products = await productsService.getProducts({ tags });
		res.render('products', { products })
	} catch (error) {
		next(error)
	}
});

module.exports = router;