import React, { Component } from 'react'
import EmployeeService from '../services/CustomerService'

class ListProductsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                products: []
        }
        this.addProducts = this.addProducts.bind(this);
        this.editProducts = this.editProducts.bind(this);
        this.deleteProducts = this.deleteProducts.bind(this);
    }

    deleteProducts(id){
        ProductsService.deleteProducts(id).then( res => {
            this.setState({products: this.state.products.filter(products => products.id !== id)});
        });
    }
    viewProducts(id){
        this.props.history.push(`/view-products/${id}`);
    }
    editProducts(id){
        this.props.history.push(`/add-products/${id}`);
    }

    componentDidMount(){
        ProductsService.getProducts().then((res) => {
            this.setState({ products: res.data});
        });
    }

    addProducts(){
        this.props.history.push('/add-products/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Products List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProducts}> Add Product</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Product Name</th>
                                    <th> Product Quantity</th>
                                    <th> Date Product Modified</th>
                                    <th> Date Product Created</th>
                                    <th> Product Price</th>
                                    <th> Barcode</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        products =>
                                        <tr key = {products.id}>
                                             <td> {products.productName} </td>
                                             <td> {products.productQuantity}</td>
                                             <td> {products.productModified}</td>
                                            <td> {products.productCreated} </td>
                                            <td> {products.productPrice}</td>
                                            <td> {products.productBarcode}</td>
                                             <td>
                                                 <button onClick={ () => this.editProducts(product.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProducts(products.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(products.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default <ListProducts></ListProducts>Component
