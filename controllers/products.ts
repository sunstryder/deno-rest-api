import { Product } from '../types.ts'

let products:Product[] = [
    { id: '1', name: 'product 1', description: 'Product description', price: 30.88 },
    { id: '2', name: 'product 2', description: 'Product description', price: 30.88 },
    { id: '3', name: 'product 3', description: 'Product description', price: 30.88 },
    { id: '4', name: 'product 3', description: 'Product description', price: 30.88 },
];

// @desc get all products
// @route GET /api/v1/products
const getProducts = ({response}:{response:any }) => {
    response.body = {
        success: true,
        data: products
    }
}

// @desc get single product
// @route GET /api/v1/products/:id
const getSingleProduct= ({response}:{response:any }) => {
    response.body = {
        success: true,
        data: products
    }
}

// @desc add one product
// @route PUT /api/v1/products/:id

const addProduct= ({response}:{response:any }) => {
    response.body = {
        success: true,
        data: products
    }
}

const updateProduct= ({response}:{response:any }) => {
    response.body = {
        success: true,
        data: products
    }
}

const deleteProduct= ({response}:{response:any }) => {
    response.body = {
        success: true,
        data: products
    }
}




export {getProducts, getSingleProduct, addProduct, updateProduct, deleteProduct}