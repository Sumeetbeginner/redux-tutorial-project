
import React, {useEffect} from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';

// Import Action
import {setProducts} from '../redux/actions/productActions'

const ProductListing = () => {

  // gets data/state from the Redux store
  const products = useSelector((state) => state.allProducts)
  console.log(products);

  // dispatch : send actions to the Redux store
  const dispatch = useDispatch()

  const fetchProducts = async() => {
    const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
      console.log(err);
      
    })

    dispatch(setProducts(response.data));
    
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  console.log("Products : ", products);
  

  return (
    <div className='ui grid container'>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing