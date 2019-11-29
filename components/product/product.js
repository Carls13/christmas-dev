import React from 'react';

import './product.css';
import PaypalButton from './../paypal-button/PaypalButton';

const Product = ({ product }) => {
	const { title, description, price, image, id } = product;
	const item = [{
	    name: title,
	    description,
	    quantity: '1',
	    price: '20',
	    currency: 'USD'
  }];
	return (
   <div className="col-12 col-lg-4 text-center product  p-3">
   		<img src={image} className="mb-2"/>
   		<h4><b>{title}</b></h4>
   		<h5>{`PRICE: $${price}`}</h5>
   		<p>{description}</p>
   	 	<PaypalButton total={20.00}
   		              items={item}
   		              id={`item-${id}`}
   		               />
   </div>
)}

export default Product;