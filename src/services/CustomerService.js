import axios from 'axios';


const CUSTOMER_API_BASE_URL = "http://localhost:8080/customers";

class CustomerService {

    getCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL,
            // { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
        );
    }

    createCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL, customer,
            // { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
            );
    }

    getCustomerById(customerId){
        return axios.get(CUSTOMER_API_BASE_URL + '/' + customerId,
            // { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
            );
    }

    updateCustomer(customer, customerId){
        return axios.put(CUSTOMER_API_BASE_URL + '/' + customerId, customer,
            // { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
            );
    }

    deleteCustomer(customerId){
        return axios.delete(CUSTOMER_API_BASE_URL + '/' + customerId,
            // { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
            );
    }
}

export default new CustomerService()
