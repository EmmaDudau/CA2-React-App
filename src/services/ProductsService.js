import axios from 'axios';

const PRODUCTS_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class ProductsService {

    getProduct(){
        return axios.get(PRODUCTS_API_BASE_URL);
    }

    createProduct(products){
        return axios.post(PRODUCTS_API_BASE_URL, products);
    }

    getProductById(productId){
        return axios.get(PRODUCTS_API_BASE_URL + '/' + productId);
    }

    updateProducts(product, productId){
        return axios.put(PRODUCTS_API_BASE_URL + '/' + productId, customer);
    }

    deleteProduct(productId){
        return axios.delete(PRODUCTS_API_BASE_URL + '/' + productId);
    }
}

export default new ProductsService()