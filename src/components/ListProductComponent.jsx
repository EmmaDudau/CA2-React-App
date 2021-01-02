import React, {Component} from 'react'
import ProductService from '../services/ProductService'
import 'font-awesome/css/font-awesome.min.css';
import OrderService from "../services/OrderService";

class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            selectedProducts: []

        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }


    addToCart(id) {
        this.setState(state => {
            const selectedProducts = this.state.selectedProducts.concat(id);
            return {
                selectedProducts
            };
        });
    };

    deleteProduct(id) {
        ProductService.deleteProduct(id).then(res => {
            this.setState({products: this.state.products.filter(product => product.id !== id)});
        });
    }

    viewProduct(id) {
        this.props.history.push(`/view-product/${id}`);
    }

    editProduct(id) {
        this.props.history.push(`/add-product/${id}`);
    }

    componentDidMount() {
        ProductService.getProducts().then((res) => {
            this.setState({products: res.data});
        });
    }

    addProduct() {
        this.props.history.push('/add-product/_add');
    }

    SubmitData = (event) =>{

        let data = {
            quantity : 1, //for now we hardcode the quantity, this should be impl later if required
            customerId: 1, //for now we hardcode the ID as we have an InMemory authentication
            productList : this.state.selectedProducts,

        }

        this.resetState();
        OrderService.createOrder(data).then(res => {
                console.log(res);
            })
    }

    resetState() {
        this.setState({
            selectedProducts:[]
        })
    }


    render() {
        return (
            <div>
                <h2 className="text-center mt-3">Product List</h2>
                <div className="row">
                    <div className="col-lg-12">
                        <button className="btn btn-primary float-left" onClick={this.addProduct}> Add Product</button>
                        {/*<button className="btnn float-right"><i className="fa fa-shopping-cart"/> {this.state.selectedProducts.length}</button>*/}

                        <div className="btnn-group float-right">
                            <button><i className="fa fa-shopping-cart"/> {this.state.selectedProducts.length}</button>
                            <button onClick={this.SubmitData}> <i className="fa fa-check-square"/>  Checkout</button>

                        </div>

                    </div>
                </div>


                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th> Barcode</th>
                            <th> Name</th>
                            <th> Price</th>
                            <th> Quantity</th>
                            <th> Date created</th>
                            <th> Date Modified</th>
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.products.map(
                                product =>
                                    <tr key={product.id}>
                                        <td> {product.productBarcode} </td>
                                        <td> {product.productName}</td>
                                        <td> {product.productPrice}</td>
                                        <td> {product.productQuantity}</td>
                                        <td> {product.productCreated}</td>
                                        <td> {product.productModified}</td>
                                        <td>
                                            <button onClick={() => this.editProduct(product.id)}
                                                    className="btn btn-info">Update
                                            </button>
                                            <button style={{marginLeft: "10px"}}
                                                    onClick={() => this.deleteProduct(product.id)}
                                                    className="btn btn-danger">Delete
                                            </button>
                                            <button style={{marginLeft: "10px"}}
                                                    onClick={() => this.viewProduct(product.id)}
                                                    className="btn btn-success">View
                                            </button>
                                            <button style={{marginLeft: "10px"}}
                                                    onClick={() => this.addToCart(product.id)}
                                                    className="btn btn-info">Add To Card
                                            </button>
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

export default ListProductComponent
