import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

class ApiState extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                this.setState({
                    products: response.data
                });
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }

    render() {
        return (
            <>
                {this.state.products.map((val) => (
                    <div key={val.id}>
                        <Card>
                            <ul>
                                <li>{val.id}</li>
                                <li>{val.title}</li>
                                <li>{val.description}</li>
                                <li>{val.price}</li>
                                <li><img src={val.image} alt={val.title} height={100} width={100}/></li>
                            </ul>
                        </Card>
                    </div>
                ))}
            </>
        );
    }
}

export default ApiState;


