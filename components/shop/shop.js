import React from 'react';

import { SHOP as shopData } from './products-data';
import Product from './../product/product';

const Shop = () => {
	const products = shopData.products;

	return (
   <div className="row" id="shop">
   		{
   			products.map((product) => {
   				return (<Product product={product} />)
   			})
   		}	
   </div>)
}

export default Shop;