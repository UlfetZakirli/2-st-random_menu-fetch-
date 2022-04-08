import React, { useState, useEffect, useRef } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allcategories=['all',...new Set(items.map((item)=>item.category))];
//console.log(allcategories);

function App() {
  const [menuItems,setMenuItems]=useState(items);
  const[categories,setCategories]=useState(allcategories);
  const [product,setProduct]=useState('');
  const getProduct=()=>{
    fetch('./src/data.js')
    .then(res=>res.json())
  }



  const filterItems=(category)=>{
    if(category==="all"){
      setMenuItems(items);
      return;

    }
    const newItems=items.filter((item)=>item.category===category);
    setMenuItems(newItems);
  };


  return <main>
    <section className='menu section'>
      <div className='title'>
        <h2>my Products</h2>
      <button className='mb-4' onClick={getProduct}>Get Product</button>

        <div className='underline'></div>
      </div>
  <Categories categories={categories} filterItems={filterItems}/>
  <Menu items={menuItems}/>
    </section>
  </main>;
}

export default App;
