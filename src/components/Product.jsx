/* eslint-disable no-restricted-globals */
import React from 'react';
import './styles/Product.css';
import {Close} from '@material-ui/icons';
import {motion} from 'framer-motion';
import {backendAPI} from '../fetch';
import {useSelector} from 'react-redux';

const Product = ({productDetails, view, manage, self}) =>{
  const products = useSelector(store => store.products);

  function advertiseProduct(event){
    alert(JSON.stringify(productDetails));
  }
  const incart = () => products.findIndex(product => product.id === productDetails.id) !== -1;

  return(
    <motion.div key ={productDetails.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1}} exit={{ opacity: 0.5, scale: 0.5 }} className = 'product'>
      <div className="overlay"></div>
      {self ? <Close onClick = {()=>manage(productDetails, 'remove_from_cart')}/> : ''}
      <div className="background" style = {{backgroundImage: `url(${backendAPI}${productDetails.image})`}}></div>
      <div className="content">
        <p>{productDetails.id}</p>
        <h5>{productDetails.name}</h5>
        <h5>${productDetails.price}</h5>
        <h5><strong>x</strong>{productDetails.currentStock}</h5>
        <button className = 'btn btn-danger btn-sm' disabled = {incart() && !self} onClick = {()=>manage(productDetails, 'add_to_cart')}>{view === 'store' ? 'Remove from Store' : self  ? "Remove From Cart" : incart() ? "In Cart" : "Add to Cart"}</button>
        {view === 'store' ? <button className = 'btn btn-sm btn-primary' onClick = {advertiseProduct}>Advertise Product</button> : ''}
      </div>
    </motion.div>
  )
}

export default Product