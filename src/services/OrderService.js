import axios from 'axios';


const ORDER_API_BASE_URL = "http://localhost:8080/orders";

class OrderService {

    getOrders(){
        return axios.get(ORDER_API_BASE_URL,
            // { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
        );
    }

    createOrder(order){
        return axios.post(ORDER_API_BASE_URL, order,
            // { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
            );
    }

    getOrderById(orderId){
        return axios.get(ORDER_API_BASE_URL + '/' + orderId,
            // { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
            );
    }

    updateOrder(order, orderId){
        return axios.put(ORDER_API_BASE_URL + '/' + orderId, order,
            // { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
            );
    }

    deleteOrder(orderId){
        return axios.delete(ORDER_API_BASE_URL + '/' + orderId,
            // { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
            );
    }


}

export default new OrderService()
