/* eslint-disable no-restricted-globals */
import React from 'react'
import {Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Product from './Product';
import {removeProductAction} from '../actions';
import {removeProduct as backendRemoval} from '../fetch';
import './styles/Product.css';

function Store(props) {
  const dispatch = useDispatch()
  const products = useSelector(state=> state.products);
  const user_id = useSelector(state => state.userDetails.id)

  function removeProduct(productDetails){
    if(confirm('Are you sure you want to remove this product?')){
      dispatch(removeProductAction(productDetails));
      backendRemoval(user_id, productDetails.id, data => {
        data.status === 200 ? console.log('the data has been removed') : console.log('');
      });
    }
  }

  if(products){
    return (
      <div className = 'store'>
        <h5 className = 'text-center'>Your Products</h5>
        <div className = 'productsGrid'>
          <div className = 'product' onClick = {event => alert(event)}>
            <p className = 'plus'>+</p>
          </div>
        {products.map((product, index) => <Product productRemover = {productDetails => removeProduct(productDetails)} key = {index} productDetails ={product} view = 'store'/>)}
        </div>
      </div>
    )
  }
  return <Redirect to = '/login'/>
}

export default Store
