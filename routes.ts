import { Router } from 'https://deno.land/x/oak/mod.ts';
import {getProducts, addProduct, getSingleProduct} from './controllers/products.ts'

const router = new Router();

router.get('/api/v1/products', getProducts)

export default router
