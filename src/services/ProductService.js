import axios from 'axios';


const PRODUCT_API_BASE_URL = "http://localhost:8080/products";

class ProductService {

    getProducts(){
        return axios.get(PRODUCT_API_BASE_URL,
            // { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
        );
    }

    createProduct(product){
        return axios.post(PRODUCT_API_BASE_URL, product,
            // { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
            );
    }

    getProductById(productId){
        return axios.get(PRODUCT_API_BASE_URL + '/' + productId,
            // { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
            );
    }

    updateProduct(product, productId){
        return axios.put(PRODUCT_API_BASE_URL + '/' + productId, product,
            // { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
            );
    }

    deleteProduct(productId){
        return axios.delete(PRODUCT_API_BASE_URL + '/' + productId,
            // { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
            );
    }
}

export default new ProductService()
