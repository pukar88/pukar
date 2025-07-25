import React, {useEffect,useState} from "react" ;
import "./Product.css"
// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
import axios from"axios"
const Product = () => {
    const [products, setProducts] = useState([]);
    const[loading, setLoading]=useState(true);
    const[error,setError]=useState("")
    // useEffect(() => {
    //     fetch('https://dummyjson.com/products')
    //     .then(response => response.json())
    //     .then((data) => {
    //         console.log(data.products);
    //         setProducts(data.products);

            
    //     })
    //     .catch((err) => console.error(err));

//     }, []);

//   return (
//     <div className="product-container">
//         {products.length>0 &&
//         products.map((product) => (
//             <div className="product-card" key={product.id}>
//                 <h1>{product.title}</h1>
//                 <img src={product.images} alt={product.title} />
//                 <p>{product.description}</p>

//             </div>

    //     ))}
//     // </div>
//   )
// }
const getData = async()=>{
    try{
        const res=await axios.get("https://dummyjson.com/products");
        console.log(res.data);
        setProducts(res.data.products);
    }catch(error){
        console.log(error)
        setError("error on fetching data")
    }finally{
        setLoading(false);
    }
    }

useEffect(()=>{
    getData()
},[])
if (loading) return <p>Loading...</p>
if(error) return <p style={{color:"red"}}>{error}</p>;
}
export default Product