import axios from "axios";
import { Component } from "react";

class ApiClassBased extends Component {
  constructor() {
    super();
    this.state = {
      ApiCall: [],
    };
  }
  ApiHandler = () => {
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
      this.setState({
        ApiCall: response.data,
      });
    });
  };
  render() {
    return (
      <>
        <button onClick={this.ApiHandler}>click</button>
        <div>
          {this.state.ApiCall.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              
             
              <img src={item.image } height={100} width={100}/>
              <h3>{item.price}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default ApiClassBased;

