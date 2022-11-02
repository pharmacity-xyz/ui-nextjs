import Link from 'next/link'
import React from 'react'
import { BsCart4, BsSearch } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { useShoppingCart } from 'use-shopping-cart'
import { useAuth } from '../../context/authContextProvider'
import Dropdown from '../Dropdown'

export const Header = () => {
  const { user } = useAuth()

  const { cartDetails } = useShoppingCart()
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 sticky top-0 z-50">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <Link href="/">
          <span className="font-semibold text-xl tracking-tight cursor-pointer">
            MedicalEquipmentShop
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/">
          <button className="px-4 bg-orange-400 h-8">Home</button>
        </Link>
        <Link href="/shop">
          <button className="px-4 bg-orange-400 h-8">Shop</button>
        </Link>
        <Link href="/about">
          <button className="px-4 bg-orange-400 h-8">About</button>
        </Link>
      </div>
      <div className="w-full block lg:flex lg:items-center lg:w-auto">
        <div className="flex gap-4">
          {user === null ? (
            <div>
              <Link href="/login">
                <a className="flex text-sm px-4 py-2 leading-none bg-[#52BA2D] border rounded text-black border-black mt-4 lg:mt-0">
                  LOGIN or SIGNUP
                  <BiUser />
                </a>
              </Link>
            </div>
          ) : (
            <div>
              {/* <button className="flex text-sm px-4 py-2 leading-none bg-[#52BA2D] border rounded text-black border-black mt-4 lg:mt-0">
                <BiUser />
              </button> */}
              <Dropdown />
            </div>
          )}
          <div className="">
            <Link href="/cart">
              <a className="flex text-sm px-4 py-2 leading-none border rounded text-black border-black mt-4 lg:mt-0">
                <BsCart4 />
                Cart {Object.values(cartDetails ?? {}).length}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
