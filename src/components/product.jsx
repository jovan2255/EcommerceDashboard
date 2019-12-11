import React from 'react';
import './product.styles.css'
export const Product = props => (
 
    <div className='product-container container-fluid'>
        <h1>{props.item.name}</h1>
        <p>{props.item.category}</p>
        <img  src={props.item.imageurl}/>
    </div>

)