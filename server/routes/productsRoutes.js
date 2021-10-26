const { Router } = require('express');
const {
  getProducts, createProducts, deleteProducts, updateProducts, getProductsById,
} = require('../controller/productsController');

const router = Router();

// aqui vai as requisições

router.get('/products', getProducts);
router.post('/products', createProducts);
router.put('/products/:productId', updateProducts);
router.get('/products/:productId', getProductsById);
router.delete('/products/:productId', deleteProducts);

module.exports = router;
