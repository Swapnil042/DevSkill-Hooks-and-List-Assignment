import React,{useState} from 'react';
import './App.css';
import ProductPage from './ProductPage';
import ProductDetails from './ProductDetails';

function App() {
  const [productClicked, setProductClicked]= useState('');

  const onProductClicked = (data)=>{
    setProductClicked(data);
  }

  const onBackClicked = ()=>{
    setProductClicked('');
  }
  return(
    <div className="App">
      {productClicked === '' ? <ProductPage onProductClicked={onProductClicked}/> 
                            : <ProductDetails details={productClicked} onBack={onBackClicked}/>}
    </div>
  );
}

export default App;
