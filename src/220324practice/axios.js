


import axios from "axios";
import { useEffect, useState } from "react";

const AxiosComponent = () => {
    const [data, setData] = useState([]); // Change initial state to an empty array

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setData(response.data);
            })
          
    };

    return (
        <>
            {
                data.length > 0 ?
                    data.map((item) => (
                        <h4 key={item.id}>{item.title}</h4> // Added key prop for each item
                    )) :
                    null
            }
        </>
    );
};

export default AxiosComponent;
