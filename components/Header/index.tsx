import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsCart4, BsSearch } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { useShoppingCart } from 'use-shopping-cart'

import Dropdown from '../Dropdown'

export const Header = () => {
  const [userId, setUserId] = useState<string | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    setUserId(localStorage.getItem('userId'))
    setToken(localStorage.getItem('token'))
  }, [userId, token])

  const { cartDetails } = useShoppingCart()
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 sticky top-0 z-50">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <Link href="/">
          <span className="font-semibold text-xl tracking-tight cursor-pointer">
            BookShop
          </span>
        </Link>
      </div>
      <div className="w-full block lg:flex lg:items-center lg:w-auto">
        <div className="flex gap-4">
          {userId === null && token === null ? (
            <div>
              <Link href="/login">
                <a className="flex text-sm px-4 py-2 leading-none bg-blue-400 border rounded text-black border-black mt-4 lg:mt-0">
                  SIGN IN or SIGN UP
                </a>
              </Link>
            </div>
          ) : (
            <>
              <Dropdown />
              <div className="">
                <Link href="/cart">
                  <a className="flex text-sm px-4 py-2 leading-none border rounded text-black border-black mt-4 lg:mt-0">
                    <BsCart4 />
                    Cart
                  </a>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
