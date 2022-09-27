import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import Counter from '../components/Counter'
import { BsTrashFill } from 'react-icons/bs'

import Slider from '../components/Slider'
import { ICart } from '../types'

const Cart = () => {
  // const [totalPrice, setTotalPrice] = useState(0)
  const [carts, setCarts] = useState<Array<ICart>>([{} as ICart])

  const { removeItem, cartDetails, clearCart, totalPrice } = useShoppingCart()

  return (
    <>
      <div className="flex mt-10">
        <div className="w-2/3 px-8 py-4 border-2 mx-4">
          <h1 className="text-2xl">Shopping Cart</h1>
          <p className="text-right">Price</p>
          <hr />
          {Object.values(cartDetails ?? {}).length === 0 && (
            <h1 className="py-4 text-2xl text-center">Your cart is empty.</h1>
          )}
          {Object.values(cartDetails ?? {}).map((cart, index) => (
            <div className="flex border-b-2 py-4" key={index}>
              <div className="w-2/6">
                {cart.image && (
                  <Image
                    src={cart.image}
                    alt={cart.name}
                    width="200"
                    height="200"
                    objectFit={'cover'}
                  />
                )}
              </div>
              <div className="w-3/6 items-center justify-end">
                <h1 className="mb-4">{cart.name}</h1>
                <h1 className="mb-4">{cart.category}</h1>
                <div className="flex justify-evenly">
                  <Counter id={cart.id} quantity={cart.quantity} />
                  <button onClick={() => removeItem(cart.id)}>
                    <BsTrashFill className="text-2xl text-red-600" />
                  </button>
                </div>
              </div>
              <div className="w-1/6 flex items-center justify-end">
                <h1>$ {cart.quantity * cart.price}</h1>
              </div>
            </div>
          ))}
          <h1 className="text-right">
            Subtotal ({Object.values(cartDetails ?? {}).length} items): $
            {totalPrice}
          </h1>
        </div>
        <div className="w-1/3 mx-4">
          <div className="border-2 p-2">
            <h1 className="text-xl font-medium pb-4">
              Subtotal ({Object.values(cartDetails ?? {}).length} items): $
              {totalPrice}
            </h1>
            <button
              className="bg-yellow-400 p-2 rounded-md w-full mb-4"
              disabled={Object.values(cartDetails ?? {}).length < 1}
            >
              Proceed to checkout
            </button>
            <button
              className="bg-red-400 p-2 rounded-md w-full"
              onClick={() => clearCart()}
              disabled={Object.values(cartDetails ?? {}).length < 1}
            >
              Clear cart
            </button>
          </div>
        </div>
      </div>
      <div className="my-20">
        <div className="my-10">
          <div className="flex justify-between items-center px-8">
            <h2 className="text-3xl">
              <strong className="text-[#75b239]">Featured Products</strong>
            </h2>
            <Link href="/">
              <a className="hover:underline">See all</a>
            </Link>
          </div>
          <div className="px-8 py-6">
            <hr />
          </div>
        </div>
        <Slider />
      </div>
    </>
  )
}

export default Cart
