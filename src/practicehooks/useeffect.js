import React, { useState, useEffect } from 'react';

const Example = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
                 const response = await fetch('https://fakestoreapi.com/products');
                const jsonData = await response.json();
                setData(jsonData);
            
        };

        fetchData();
    }, []); // Empty dependency array to fetch data only once when the component mounts

    return (
        <div>
            <h1>Productsyytt</h1>
            <ul>
                {data.map((product) => (
                    <li >{product.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Example;




