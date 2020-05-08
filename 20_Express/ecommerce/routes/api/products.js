const express = require('express');
const router = express.Router();
const ProductsService = require('../../services/products');

const productsService = new ProductsService();

router.get('/', async function (req, res, next) {
	const { tags } = req.query;

	try {
		const products = await productsService.getProducts({ tags });
		res.status(200).json({
			data: products,
			message: 'products listed' 
		});	
	} catch (error) {
		next(error);
	}

});

router.get('/:productId', async function (req, res) {
	const { productId } = req.params;

	try {
		const products = await productsService.getProduct({ productId });

		res.status(200).json({
			data: products,
			message: 'products retrived' 
		})
	} catch (error) {
		next(error);
	}

});

router.post('/', async function (req, res) {
	const { body: product } = req;

	try {
		const products = await productsService.createProduct({ product });

		res.status(201).json({
			data: product,
			message: 'product created' 
		});
	} catch (error) {
		next(error);
	}
});

router.put('/:productId', async function (req, res) {
	const { productId } = req.params;
	const { body: product } = req;

	try {
		const productUpdate = await productsService.updateProduct({ productId, product });

		res.status(200).json({
			data: productUpdate,
			message: 'product updated' 
		});
	} catch (error) {
		next(error);
	}
});

router.delete('/:productId', async function (req, res) {
	const { productId } = req.params;
	
	try {
		const product = await productsService.updateProduct({ productId });

		res.status(200).json({
			data: product,
			message: 'product deleted' 
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;