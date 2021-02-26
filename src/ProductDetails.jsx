import React,{useEffect, useState} from 'react';
import Spinner from './Spinner';

const ProductDetails = (props)=>{

    const [loader, setLoader]= useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false);
        },2000);
    },[])

    return(
        <>
            {loader === true ? <Spinner/> : (<div style={{margin: 'auto', maxWidth: '40%', border: '2px solid grey', boxShadow: '5px 5px grey', borderRadius: '5px', padding: '20px' }}>
                                            <h3>Product Details</h3>
                                            <p><b>Product Name: </b>{props.details.name}</p>
                                            <p><b>Price: </b>{props.details.price}</p>
                                            <p><b>Details: </b>{props.details.description}</p>
                                            <p><b>Category: </b>{props.details.category}</p>
                                            <button className="button" onClick={props.onBack}>Go Back</button>
                                        </div>)}
        </>
    )
}

export default ProductDetails;