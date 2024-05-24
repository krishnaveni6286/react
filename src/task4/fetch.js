import axios from "axios";
import { Component } from "react";

class FetchBased extends Component {
  constructor() {
    super();
    this.state = {
      ApiCall: [],
    };
  }
  componentDidMount() {
    // axios.get("https://fakestoreapi.com/products")
    fetch("https://fakestoreapi.com/products")
    .then(response=>response.json)
    .then((response) => {
      this.setState({
        ApiCall: response.data,
      });
    });
  };
  render() {
    return (
      <>
        <button onClick={this.componentDidMount}>click</button>
        <div>
          {this.state.ApiCall.map((item) => {
            <div key={item.id}>
              <h3>{item.title}</h3>
              
             
              <img src={item.image } height={100} width={100}/>
              <h3>{item.price}</h3>
              <p>{item.description}</p>
            </div>
  })}
        </div>
      </>
    );
  }
}
export default FetchBased;

