import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Counter from '../components/Counter'
import { BsTrashFill } from 'react-icons/bs'

import { FeaturedProductsSlider } from '../components/Slider'
import { ICart } from '../types'
import Layout from '../components/Layout'
import { useAuth } from '../context/authContextProvider'
import { deleteCartApi, getCartsApi } from '../services/cart/cartServices'
import { AxiosRequestConfig } from 'axios'
import { IReturnCart } from '../services/cart/types'
import { toast } from 'react-toastify'
import { checkoutApi } from '../services/checkout/checkoutServices'

const Cart = () => {
  const [carts, setCarts] = useState<Array<IReturnCart>>([{} as IReturnCart])
  const [totalPrice, setTotalPrice] = useState(0)

  const fetchCarts = async () => {
    try {
      let token = localStorage.getItem('token')
      const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
      }
      const res = await getCartsApi(config)
      setCarts(res.data)

      let total = 0
      if (res.data.length > 0) {
        res.data.forEach((cartElement) => {
          total += cartElement.price
        })
      }

      setTotalPrice(total)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteCartProduct = async (productId) => {
    try {
      let token = localStorage.getItem('token')
      const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
      }
      await deleteCartApi(productId, config)

      await fetchCarts()
      toast('Deleted')
    } catch (error) {
      console.error(error)
    }
  }

  const handleCheckout = async () => {
    try {
      let token = localStorage.getItem('token')
      const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
      }
      const res = await checkoutApi(config)

      // @ts-ignore
      window.open(res as string)
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchCarts()
  }, [])

  return (
    <Layout title="Cart">
      <div className="flex mt-10">
        <div className="w-2/3 px-8 py-4 border-2 mx-4">
          <h1 className="text-2xl">Shopping Cart</h1>
          <p className="text-right">Price</p>
          <hr />
          {carts.length === 0 && (
            <h1 className="py-4 text-2xl text-center">Your cart is empty.</h1>
          )}
          {carts.map((cart) => (
            <div className="flex border-b-2 py-4" key={cart.productId}>
              <div className="w-2/6">
                {cart.imageUrl && (
                  <Image
                    src={cart.imageUrl}
                    alt={cart.productName}
                    className=""
                    width={200}
                    height={200}
                  />
                )}
              </div>
              <div className="w-3/6 items-center justify-end">
                <h1 className="mb-4">{cart.productName}</h1>
                <div className="flex justify-evenly">
                  <button onClick={() => deleteCartProduct(cart.productId)}>
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
            Subtotal ({carts.length} items): ${totalPrice}
          </h1>
        </div>
        <div className="w-1/3 mx-4">
          <div className="border-2 p-2">
            <h1 className="text-xl font-medium pb-4">
              Subtotal ({carts.length} items): ${totalPrice}
            </h1>
            <button
              className="bg-green-400 p-2 rounded-md w-full mb-4"
              onClick={() => handleCheckout()}
              disabled={carts.length < 1}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cart
