import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class CustomerService {

    getCustomer(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createCustomer(customer){
        return axios.post(EMPLOYEE_API_BASE_URL, customer);
    }

    getCustomerById(customerId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + customerId);
    }

    updateCustomer(customer, customerId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + customerId, customer);
    }

    deleteCustomer(customerId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + customerId);
    }
}

export default new CustomerService()