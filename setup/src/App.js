import React, { useState, useEffect, useRef } from 'react';
import items from './data';


function App() {
  const [product,setProduct]=useState('');

  const getProduct=()=>{
    fetch('http://localhost:8000/products')
    .then(res=>res.json())
    .then((data)=>{

      let randomNum=Math.floor(Math.random()*data.length);
      setProduct(data[randomNum]);
    });
  };

  useEffect(()=>{
    getProduct();
  },[]);

  return <main>
<section className='menu section'>
  <div className="title">
    <h2>my Products</h2>
    <div className="product">
      <div className="btnContainer">
        <button className='btn' onClick={getProduct}>Get Product</button>
      </div>
    </div>
    <div className="underline"></div>
    <div className="col-md-2 mb-4">
      <div className="card">
        <img src={product.img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">${product.price}</h5>
          <p className="card-text">
            {product.desc}
          </p>
          <button className='btn btn-dark'>Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</section>

  </main>
}

export default App;
