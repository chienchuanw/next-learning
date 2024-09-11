import React from 'react'
import AddToCart from '../AddToCart'

// The name of "styles" can be anything, but it's recommended to use styles for recognition
// Because we use Tailwindcss instead of CSS module, so this line is now unused.
import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'>
      <AddToCart />
    </div>
  )
}

export default ProductCard