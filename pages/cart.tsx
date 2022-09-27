import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import Slider from '../components/Slider'
import cartsData from '../datas/cart.json'
import { ICart } from '../types'

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [carts, setCarts] = useState<Array<ICart>>([{} as ICart])

  useEffect(() => {
    let tempTotalPrice = 0
    if (totalPrice === 0) {
      cartsData.map((cart) => {
        tempTotalPrice += cart.price
      })
    } else {
      carts.map((cart) => {
        tempTotalPrice += cart.price
      })
    }
    setTotalPrice(tempTotalPrice)
    setCarts(cartsData)
  }, [])

  const updatePrice = (event, id) => {
    let quantity = event.target.value
    let tempCarts = carts
    console.log(id)

    tempCarts.map((cart) => {
      if (id === cart.id) {
        cart.quantity = quantity
      }
    })

    setCarts(tempCarts)
  }

  return (
    <>
      <div className="flex mt-10">
        <div className="w-2/3 px-8 py-4 border-2 mx-4">
          <h1 className="text-2xl">Shopping Cart</h1>
          <p className="text-right">Price</p>
          <hr />
          {carts.map((cart, index) => (
            <div className="flex border-b-2 py-4" key={index}>
              <div className="w-1/3">
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
              <div className="w-1/3 items-center justify-end">
                <h1 className="mb-4">{cart.name}</h1>
                <h1 className="mb-4">{cart.category}</h1>
                <div className="flex gap-4">
                  <select
                    className="h-8 px-4  bg-gray-300 rounded-md"
                    onChange={() => updatePrice(event, cart.id)}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <p>|</p>
                  <button className="px-4 rounded-lg hover:bg-red-500">
                    Delete
                  </button>
                </div>
              </div>
              <div className="w-1/3 flex items-center justify-end">
                <h1>$ {cart.quantity * cart.price}</h1>
              </div>
            </div>
          ))}
          <h1 className="text-right">
            Subtotal ({carts.length} items): ${totalPrice}
          </h1>
        </div>
        <div className="w-1/3">
          <div className="border-2 p-2">
            <h1 className="text-xl font-medium pb-4">
              Subtotal ({carts.length} items): ${totalPrice}
            </h1>
            <button className="bg-yellow-400 p-2 rounded-md w-full">
              Proceed to checkout
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
