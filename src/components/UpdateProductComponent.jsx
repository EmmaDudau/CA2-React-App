import React, { Component } from 'react'
import EmployeeService from '../services/CustomerService';
import ProductsService from "../services/ProductsService";

class UpdateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            productName: '',
            productModified: '',
            productCreated: '',
            barcode: '',
            productQuantity: 0,
            productPrice: 0.0
        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeProductQuantityHandler = this.changeProductQuantityHandler.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }

    componentDidMount(){
        ProductsService.getProductById(this.state.id).then( (res) =>{
            let product = res.data;
            this.setState({productName: product.productName,
                productQuantity: product.productQuantity,
                productModified : product.productModified,
                productCreated: product.productCreated,
                productPrice : product.productPrice,
                productBarcode: product.productBarcode
            });
        });
    }

    updateProducts = (p) => {
        p.preventDefault();
        let product = {productName: this.state.productName, productQuantity: this.state.productQuantity, productModified: this.state.productModified,
            productCreated: this.state.productCreated, productPrice: this.state.productPrice, productBarcode: this.state.productBarcode};
        console.log('product => ' + JSON.stringify(product));
        console.log('id => ' + JSON.stringify(this.state.id));
        ProductsService.updateProducts(product, this.state.id).then( res => {
            this.props.history.push('/products');
        });
    }

    changeProductNameHandler= (event) => {
        this.setState({productName: event.target.value});
    }

    changeProductQuantityHandler= (event) => {
        this.setState({productQuantity: event.target.value});
    }

    changeProductPriceHandler= (event) => {
        this.setState({productPrice: event.target.value});
    }

    cancel(){
        this.props.history.push('/product');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Products</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Name: </label>
                                            <input placeholder="Product Name" name="productName" className="form-control"
                                                   value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Quantity: </label>
                                            <input placeholder="Product Quantity" name="productQuantity" className="form-control"
                                                   value={this.state.productQuantity} onChange={this.changeProductQuantityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Price: </label>
                                            <input placeholder="Product Price" name="productPrice" className="form-control"
                                                   value={this.state.productPrice} onChange={this.changeProductPriceHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateProducts}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateProductComponent
