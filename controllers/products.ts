import { Product } from '../types.ts'
import {v4} from 'https://deno.land/std/uuid/mod.ts'

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
const getSingleProduct= ({params, response}:{params: {id:string}, response:any }) => {
    const product: Product | undefined = products.find((product) => product.id === params.id)
    if (product) {
        response.status = 200
        response.body = {
            success: true,
            data:product
        }
    } else {
        response.status = 404
        response.body = {
            success: false,
            msg: 'Nothing found here buddy'
        }
    }
}

const addProduct = async ({ request, response }: { request: any, response: any }) => {
    const body = await request.body()
    console.log("🚀 ~ file: products.ts ~ line 41 ~ addProduct ~ body", body)
    if (!request.hasBody) {
        response.status = 400
        response.body = {
            success: false,
            msg: 'No data in request'
        }
    } else {
        const product: Product= body.value
        console.log("🚀 ~ file: products.ts ~ line 50 ~ addProduct ~ product", product)
        product.id = v4.generate()
        products.push(product)
        response.status = 201
        response.body = {
            success: true,
            data:product
        }
    }
}

const updateProduct= ({response}:{response:any }) => {
    response.body = 'update'
}

const deleteProduct= ({response}:{response:any }) => {
    response.body = 'delete'
}




export {getProducts, getSingleProduct, addProduct, updateProduct, deleteProduct}