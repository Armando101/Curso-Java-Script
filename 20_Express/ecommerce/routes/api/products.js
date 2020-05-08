const express = require('express');
const router = express.Router();
const ProductsService = require('../../services/products');

const validation = require('../../utils/middlewares/validationHandler')
const { 
	productIdSchema,
  productTagSchema,
  createProductSchema,
  updateProductSchema
	} = require('../../utils/schemas/products');

const productsService = new ProductsService();

router.get('/', async function (req, res, next) {
	const { tags } = req.query;

	try {
		// Simulamos un error
		// throw new Error('This is an error from API');
		const products = await productsService.getProducts({ tags });
		res.status(200).json({
			data: products,
			message: 'products listed' 
		});	
	} catch (error) {
		next(error);
	}

});

router.get('/:productId', async function (req, res, next) {
	const { productId } = req.params;

	try {
		const product = await productsService.getProduct({ productId });

		res.status(200).json({
			data: product,
			message: 'products retrived' 
		})
	} catch (error) {
		next(error);
	}

});

router.post('/', validation(createProductSchema), async function (req, res, next) {
	const { body: product } = req;

	// console.log("REQ: ", req.body);

	try {
		const productcreated = await productsService.createProduct({ product });

		res.status(201).json({
			data: productcreated,
			message: 'product created' 
		});
	} catch (error) {
		next(error);
	}
});

router.put('/:productId', validation({ productId: productIdSchema }, "params"), validation(updateProductSchema), async function (req, res, next) {
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

router.delete('/:productId', async function (req, res, next) {
	const { productId } = req.params;
	
	try {
		const productDeleted = await productsService.updateProduct({ productId });

		res.status(200).json({
			data: productDeleted,
			message: 'product deleted' 
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;