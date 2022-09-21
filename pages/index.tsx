import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Slider from '../components/Slider'

import scheduleVaccineImg from '../public/images/schedule_vaccine.png'
import fluShotsAreHereImg from '../public/images/flu_shots_are_here.png'
import doctorImg from '../public/images/doctor.png'

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex items-center bg-[#F5f5f0] py-8 px-10">
        <h1 className="text-4xl w-1/3">COVID-19</h1>
        <div className="flex justify-around w-2/3">
          <div className="text-center">
            <Image src={scheduleVaccineImg} width="100" height="100" />
            <h5>Medicine</h5>
          </div>
          <div className="text-center">
            <Image src={fluShotsAreHereImg} width="100" height="100" />
            <h5>Vaccination</h5>
          </div>
          <div className="text-center">
            <Image src={doctorImg} width="100" height="100" />
            <h5>Doctor</h5>
          </div>
        </div>
      </div>
      <div className="bg-[#f8f9fa]">
        <div className="my-10">
          <div className="flex justify-between items-center px-8">
            <h2 className="text-3xl">
              <strong className="text-[#75b239]">Featured Products</strong>
            </h2>
            <Link href="">See all</Link>
          </div>
        </div>
        <Slider />
      </div>
      <div className="bg-[#f8f9fa]">
        <div className="my-10">
          <div className="flex justify-between items-center px-8">
            <h2 className="text-3xl">
              <strong className="text-[#75b239]">Categories</strong>
            </h2>
            <Link href="">See all</Link>
          </div>
        </div>
        <Slider />
      </div>
      <div className="bg-green-500 text-white text-center py-10 my-5">
        <h1 className="w-full text-3xl">Sign up for discount up to 55 % OFF</h1>
        <p className="w-full py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum
          voluptates excepturi neque labore
        </p>
        <button className="border border-white px-5 py-1 rounded-md">
          SIGN UP
        </button>
      </div>
    </div>
  )
}

export default Home
