import React, {Component} from 'react'
import ProductService from '../services/ProductService';

class CreateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            productBarcode: '',
            productName: '',
            productPrice: '',
            productQuantity: '',
            productCreated: '',
            productModified: '',
            input: {},
            errors: {}

        }
        this.changeProductBarcodeHandler = this.changeProductBarcodeHandler.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    // step 3
    componentDidMount() {
        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            ProductService.getProductById(this.state.id).then((res) => {
                let product = res.data;
                this.setState({
                    productBarcode: product.productBarcode,
                    productName: product.productName,
                    productPrice: product.productPrice,
                    productQuantity: product.productQuantity,
                    productCreated: product.productCreated,
                    productModified: product.productModified
                });
            });
        }
    }

    saveOrUpdateProduct = (e) => {
        e.preventDefault();

        if(this.validate()) {
            console.log(this.state);

            let input = {};
            input["productBarcode"] = "";
            input["productQuantity"] = "";
            input["comment"] = "";
            this.setState({input: input});

            let product = {
                productBarcode: this.state.productBarcode, productName: this.state.productName, productPrice: this.state.productPrice,
                productQuantity: this.state.productQuantity, productCreated: this.state.productCreated, productModified: this.state.productModified
            };
            console.log('product => ' + JSON.stringify(product));

            // step 5
            if (this.state.id === '_add') {
                ProductService.createProduct(product).then(res => {
                    this.props.history.push('/products');
                });
            } else {
                ProductService.updateProduct(product, this.state.id).then(res => {
                    this.props.history.push('/products');
                });
            }
        }
    }

    changeProductBarcodeHandler = (event) => {
        this.setState({productBarcode: event.target.value});
    }

    changeProductNameHandler = (event) => {
        this.setState({productName: event.target.value});
    }

    changeProductPriceHandler = (event) => {
        this.setState({productPrice: event.target.value});
    }

    changeProductQuantityHandler = (event) => {
        this.setState({productQuantity: event.target.value});
    }

    changeProductCreatedHandler = (event) => {
        this.setState({productCreated: event.target.value});
    }

    changeProductModifiedHandler = (event) => {
        this.setState({productModified: event.target.value});
    }

    cancel() {
        this.props.history.push('/products');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Product</h3>
        } else {
            return <h3 className="text-center">Update Product</h3>
        }
    }


    validate(){
        let errors = {};
        let isValid = true;

        // if (!this.state.productBarcode) {
        //     isValid = false;
        //     errors["productBarcode"] = "Please enter your name.";
        // }
        //
        // if (!this.state.productQuantity) {
        //     isValid = false;
        //     errors["productQuantity"] = "Please enter your productQuantity ProductPrice.";
        // }

        // if (typeof this.state.productQuantity !== "undefined") {
        //     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        //     if (!pattern.test(this.state.productQuantity)) {
        //         isValid = false;
        //         errors["productQuantity"] = "Please enter valid productQuantity productPrice.";
        //     }
        // }

        this.setState({
            errors: errors
        });

        return isValid;
    }



    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }

                            <form onSubmit={this.handleSubmit}>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label> BarCode: </label>
                                        <input placeholder="Barcode" name="productBarcode" className="form-control"
                                               value={this.state.productBarcode}  onChange={this.changeProductBarcodeHandler}/>
                                        <div className="text-danger">{this.state.errors.productBarcode}</div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label> Product Name: </label>
                                        <input placeholder="Product Name" name="productName" className="form-control"
                                               value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                    </div>
                                </div>
                                <div class="form-row">

                                    <div class="form-group col-md-6">
                                        <label> Product Price: </label>
                                        <input placeholder="Price" name="productPrice" className="form-control"
                                               value={this.state.productPrice} onChange={this.changeProductPriceHandler}/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label> Product Quantity: </label>
                                        <input placeholder="Quantity" name="productQuantity" className="form-control"
                                               value={this.state.productQuantity} onChange={this.changeProductQuantityHandler}/>
                                        <div className="text-danger">{this.state.errors.productQuantity}</div>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label> Date Created: </label>
                                        <input type="Date" placeholder="Date Created" name="productCreated" className="form-control"
                                               max="3000-12-31" min="1000-01-01" value={this.state.productCreated} onChange={this.changeProductCreatedHandler}/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label> Created Date: </label>
                                        <input placeholder="Date modified" type="date" name="productModified" max="3000-12-31"
                                               min="1000-01-01" value={this.state.productModified}
                                               onChange={this.changeProductModifiedHandler} className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group ">
                                <button class="btn btn-success btn float-left" onClick={this.saveOrUpdateProduct}>Save</button>
                                <button class="btn btn-danger btn float-right" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default CreateProductComponent
