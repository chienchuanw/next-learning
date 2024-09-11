import React from 'react'
import AddToCart from '../AddToCart'

// The name of "styles" can be anything, but it's recommended to use styles for recognition
import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <AddToCart />
    </div>
  )
}

export default ProductCard