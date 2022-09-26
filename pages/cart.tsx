import Image from 'next/image'
import React from 'react'

import carts from '../datas/cart.json'

const Cart = () => {
  return (
    <div className="flex">
      <div className="w-2/3">
        <h1 className="text-2xl">Shopping Cart</h1>
        <p className="text-right">Price</p>
        <hr />
        {carts.map((cart) => (
          <div>
            <Image src={cart.image} alt={cart.name} width={100} height={100} />
          </div>
        ))}
      </div>
      <div className="w-1/3"></div>
    </div>
  )
}

export default Cart
