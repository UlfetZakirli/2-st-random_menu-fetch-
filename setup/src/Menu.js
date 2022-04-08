import React from 'react';

const Menu = ({items}) => {
  return <div className='section-center'>
    {items.map((menuItem)=>{
      const {id,title,img,desc,price}=menuItem;
      return(
        // <article key={id} className="menu-item">
        // <img src={img} alt={title} className='photo card-img-top'/>
        // <div className='item-info'> 
        // <header>
        //   <h4>{title}</h4>
        //   <h4 className='price'>${price}</h4>
        // </header>
        // <p  className='item-text'>{desc}</p>
        // <button className="btn btn-dark">
        //               Buy now
        //             </button>
        // </div>
        // </article>
        <div className="col-md-6 mb-4">
        <div className="card">
          <img src={img} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">${price}</h5>
            <p className="card-text">
          {desc}
            </p>
            <button className="btn btn-dark">
              Buy now
            </button>
          </div>
        </div>
      </div>

      );
    
    })}
  </div>;
};

export default Menu;
