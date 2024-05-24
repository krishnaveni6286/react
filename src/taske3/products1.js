import { Component } from "react";

class ProdInc extends Component {
  constructor() {
    super();
    this.state = {
      objects: [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: {
            rate: 3.9,
            count: 120,
          },
        },
        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 22.3,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          rating: {
            rate: 4.1,
            count: 259,
          },
        },
        {
          id: 3,
          title: "Mens Cotton Jacket",
          price: 55.99,
          description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          rating: {
            rate: 4.7,
            count: 500,
          },
        },
        {
          id: 4,
          title: "Mens Casual Slim Fit",
          price: 15.99,
          description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          rating: {
            rate: 2.1,
            count: 430,
          },
        },
      ],
    };
  }

  sortFunction = () => {
    let result = this.state.objects.sort((a, b) => a["price"] - b["price"]);
    console.log(result);
    this.setState({
      objects: result,
    });
  };

  childToParent = (data) => {
    alert("child to parent");
  };

  Increment = (data) => {
    let updated = this.state.objects.map((val) => {
      if (val.id === data.id) {
        return { ...val, price: val.price + 1};
      } else {
        return val;
      }
    });

    this.setState({
      objects: updated,
    });
  };

  decrement = (data) => {
    let newUpdated = this.state.objects.map((val) => {
      if (val.id === data.id) {
        return { ...val, price: val.price - 1 };
      } else {
        return val;
      }
    });

    this.setState({
      objects: newUpdated
    });
  };

  countHandler=(data)=>{
     

      let result=this.state.objects.map((eachObject)=>{
          if(eachObject.id===data.id){
              let newObject={...eachObject,rating:{
                  ...eachObject.rating,count:eachObject.rating.count+1
              }}
              return newObject
          }
          else{
              return eachObject
          }
      })

      this.setState({
          objects:result
      })
  }
  handleDelete = (data) => {
    let results= this.state.objects.filter((val) => {
       return val.id !== data.id;
    });
    console.log(results)
    this.setState({
      objects: results
    });
}


  render() {
    return (
      <>
        <button onClick={this.sortFunction}> click to sort by price</button>

        {this.state.objects.map((eachObject) => {
          return (
            <>
              <div key={eachObject.id}>
                <ProductListing
                  data={eachObject}
                  communication={this.childToParent}
                  Increment={this.Increment}
                  Decrement={this.decrement}
                  Counters={this.countHandler}
                  delete={this.handleDelete}
                />
                {/* \\passing values to parent to child */}
              </div>
            </>
          );
        })}
      </>
    );
  }
}
export default ProdInc;

class ProductListing extends Component {
  render() {
    return (
      <>
        <div>
        <h1>{this.props.data.title}</h1>
            <img src={this.props.data.image} height={100} width={100}></img>
         
          <h3>{this.props.data.price}</h3>
          <h3>count--{this.props.data.rating.count}</h3>
          <button onClick={()=>this.props.Counters(this.props.data)}>count</button>
          <button onClick={() => this.props.Decrement(this.props.data)}>
            -
          </button>
          {/* <button onClick={()=>this.props.communication(this.props.data)}>click to see the product</button> */}
          <button onClick={() => this.props.Increment(this.props.data)}>
            +
          </button>
          <button onClick={()=>this.props.delete(this.props.data)}>Delete</button>
          {/* //receiving data from here */}
        </div>
      </>
    );
  }
}
