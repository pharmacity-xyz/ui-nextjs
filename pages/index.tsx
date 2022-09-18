import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "../components/SwiperSlide";

import img1 from "../public/images/hero_bg_2.jpg";

const instroductions = [
  {
    title: "Free Delivery",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum voluptates excepturi neque labore .",
    loadMore: "/free",
  },
  {
    title: "New Medicine Everyday",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum voluptates excepturi neque labore .",
    loadMore: "/new-medicine-everyday",
  },
  {
    title: "Medicines Guaranteed",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum voluptates excepturi neque labore .",
    loadMore: "/medicines-guranteed",
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <div className="w-full h-1/4">
        <Image src={img1} width={500} height={200} layout="responsive" />
      </div>
      <div className="py-5">
        <div className="container  px-4">
          <div className="grid grid-cols-3 gap-3">
            {instroductions.map((introduction) => (
              <div className="w-full text-center border rounded-md p-3">
                <span className=""></span>
                <h3 className="text-[#75b239] font-medium text-xl">
                  {introduction.title}
                </h3>
                <p>{introduction.detail}</p>
                {/* <p>
                <Link href={introduction.loadMore} className="d-fkex align-items-center">
                  <span className="mr-2">Learn more</span>{" "}
                  <span className="icon-keyboard_arrow_right"></span>
                </Link>
              </p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="my-10">
          <div className="text-center">
            <h2 className="text-3xl">
              Pharmacy <strong className="text-[#75b239]">Products</strong>
            </h2>
          </div>
        </div>
        <SwiperSlide />
      </div>
    </div>
  );
};

export default Home;
