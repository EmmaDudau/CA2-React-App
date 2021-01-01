import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ViewProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            product: {}
        }
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( res => {
            this.setState({product: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View product Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Barcode: </label>
                            <div> { this.state.product.productBarcode }</div>
                        </div>
                        <div className = "row">
                            <label> Name: </label>
                            <div> { this.state.product.productName }</div>
                        </div>
                        <div className = "row">
                            <label> Price: </label>
                            <div> { this.state.product.productPrice }</div>
                        </div>
                        <div className = "row">
                            <label> Quantity: </label>
                            <div> { this.state.product.productQuantity }</div>
                        </div>
                        <div className = "row">
                            <label> Date Created: </label>
                            <div> { this.state.product.productCreated }</div>
                        </div>
                        <div className = "row">
                            <label> Date Modified: </label>
                            <div> { this.state.product.productModified }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewProductComponent
