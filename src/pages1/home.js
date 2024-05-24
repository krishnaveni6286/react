import { useEffect, useState } from "react";
import Header from "../navbar/header";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import useAxios from "../customhooks/useaxios";
import { BASE_PROD_URL, endPoints } from "../endpoints/endpoints";

const HomeComponent=()=>{
  // const [data]=useAxios("https://fakestoreapi.com/products")  //custom hook axios is used 
  const [data]=useAxios(`${BASE_PROD_URL}${endPoints.products}`)
  // const[data,setData]=useState([])
  // useEffect(()=>{
  //   axios.get("https://fakestoreapi.com/products")
  //   .then(response=>{
  //     if(response.status==200){
  //     setData(response.data)
  //     }
  //   })
  //   .catch(err=>console.log(err))
  // },[])
  const [day,setDay]=useState(null)
  useEffect(()=>{
   setDay(getGreeting())
    // console.log(new Date().getHours)
    //  setDay(getToday)
  },[])

  function getToday(){
    let day;
    console.log(new Date().getDay())

    switch(new Date().getDay()){
      case 0:
        day="SUNDAY"
        break
        case 1:
          day="MONDAY"
          break
          case 2:
            day="TUESDAY"
            break
            case 3:
              day="WEDNESDAY"
              break
              case 4:
                day="THURSDAY"
                break
                case 5:
                  day="FRIDAY"
                  break
                  case 6:
                    day="SATYRDAY"
                    break
                   default:
                    day=null 
    }
    return day
  }

  function getGreeting(){
    const timeInHours=new Date().getHours()
    let greeting;
    if(timeInHours>6 && timeInHours<11){
      greeting="GOOD MORNING"
    }
   else if(timeInHours>=11 && timeInHours<16){
      greeting="GOOD AFTERNOON"
    }
    else if(timeInHours>=16 && timeInHours<18){
      greeting="GOOD Evening"
    }
    else{
      greeting="GOOD NIGHT"
    }
    return greeting
  }
    return(
        <>
      <Header/>
      <h1>i am home screen</h1>
      {
        data.map((eachObject)=>{
          return(
            <>
            <h2>{day}</h2>
            <CustomCard data={eachObject}/>
            </>
          )
        })
      }
        
        </>
        
    )
}
export default HomeComponent;




function CustomCard(props) {
  const {data:{image,category,price,description,title,id}}=props
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{height:100,width:100}} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <button  >
          <Link to={`/${category}/${id}`}>Navigate
          </Link>
          </button>
      </Card.Body>
    </Card>
  );
}

