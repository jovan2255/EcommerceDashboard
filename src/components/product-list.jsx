import React from 'react';
import { Product } from './product';
import './product-list.styles.css'


export const ProductList = props =>(

  <div className='product-list overflow-auto container-fluid'>
     {props.items.map(item => (
      <Product key={item.id} item = {item} />
      
    ))}</div>

);