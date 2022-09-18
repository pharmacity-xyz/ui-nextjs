import { NextPage } from "next";
import Image from "next/image";
import React from "react";

import person1 from "../public/images/person_1.jpg";
import person2 from "../public/images/person_2.jpg";
import person3 from "../public/images/person_3.jpg";

const introductions = [
  {
    title: "Why Us",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nisi magni in fugit, ad laudantium.",
  },

  {
    title: "History",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nisi magni in fugit, ad laudantium.",
  },
  {
    title: "Awards",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nisi magni in fugit, ad laudantium.",
  },
];

const teams = [
  {
    image: person1,
    name: "Elizabeth Graham",
  },
  {
    image: person2,
    name: "Patrick Marx",
  },
  {
    image: person3,
    name: "Mike Coolbert",
  },
];

const About: NextPage = () => {
  return (
    <div>
      <div className="py-5">
        <div className="container  px-4">
          <div className="grid grid-cols-3 gap-3">
            {introductions.map((introduction) => (
              <div className="w-full px-10 py-5">
                <span className=""></span>
                <h3 className="text-black font-sm text-2xl mb-2">
                  {introduction.title}
                </h3>
                <p>{introduction.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="text-center my-10">
          <h2 className="text-3xl underline">Team</h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {teams.map((person) => (
            <div className="w-full px-10 py-5 text-center">
              <span className=""></span>
              <Image src={person.image} width={200} height={200} />
              <h3 className="text-black font-sm text-lg mb-2">{person.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
