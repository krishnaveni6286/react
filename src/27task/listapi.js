import React, { Component } from "react";
import axios from "axios";

class ApiList extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
        };
    }

    ApiHandler = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                this.setState({
                    products: response.data
                });
            })
           
    };

    render() {
        return (
            <>
                <button onClick={this.ApiHandler}>onClick to get data</button>
                <div>
                   
                            {this.state.products.map((val) => (
                                <div key={val.id}>
                                    <li>{val.id}</li>
                                    <li>{val.title}</li>
                                    <li>{val.description}</li>
                                    <li>{val.price}</li>
                                    <li><img src={val.image} height={100} width={100}/></li>
                              </div>
                            ))}
                        
                </div>
            </>
        );
    }
}

export default ApiList;
