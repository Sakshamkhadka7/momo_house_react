import { useEffect, useState } from "react";

const useFetch=()=>{
 
    const [products,setProducts]=useState([]);
    const [isError,setIsError]=useState(false);
    const [loading,setLoading]=useState(false);

    const getProducts=async()=>{
    
        try {
            setLoading(true)
            let res=await fetch("https://dummyjson.com/recipes");
            res=await res.json();
            setProducts(res.recipes);
            setIsError(false)
            setLoading(false)

        } catch (error) {
            console.log(error)
            setIsError(true)
        }

    }

     
    useEffect(()=>{
        getProducts()
    },[]);


    return {products,loading,isError};


}

export default useFetch;