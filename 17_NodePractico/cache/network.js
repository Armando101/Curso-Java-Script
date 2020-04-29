const express = require('express');

const response = require('../network/response');
const store = require('../store/redis');

const router = express.Router();

router.get('/:table', list);
router.get('/:table/:id', get);
router.put('/:table', upsert);

async function list(req, res, next) {
	const datos = await store.list(req.params.table);
	response.success(req, res, datos, 200);
}

async function get(req, res, next) {
	const datos = await store.get(req.params.table, req.params.id);
	response.success(req, res, datos, 200);
}
async function insert(req, res, next) {
	const datos = await store.insert(req.params.table, req.body);
	response.success(req, res, datos, 200);
}
async function upsert(req, res, next) {
	const datos = await store.upsert(req.params.table, req.body);
	response.success(req, res, datos, 200);
}

module.exports = router;