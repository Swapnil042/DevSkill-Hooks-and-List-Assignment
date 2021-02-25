import React,{useEffect} from 'react';

const ProductDetails = (props)=>{

    useEffect(()=>{
        props.loaderClose(false);
    },[])

    return(
        <div style={{marginTop: '100px'}}>
            <h3>Product Details</h3>
            <p><b>Product Name: </b>{props.details.name}</p>
            <p><b>Price: </b>{props.details.price}</p>
            <p><b>Details: </b>{props.details.description}</p>
            <p><b>Category: </b>{props.details.category}</p>
        </div>
    );
}

export default ProductDetails;