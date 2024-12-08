import React from 'react';

import css from "./assets/css.png";
import node from "./assets/node.png";
import javascript from "./assets/javascript.png";
import reactImage from "./assets/react.png";
import express from "./assets/ex.png";
import mongoDB from "./assets/mongoDB.png";
import php from "./assets/php.png";
import mysql from "./assets/mysql.png";
import Cplus from "./assets/C++.png";
import git from "./assets/git.png";
import tailwind from "./assets/tailwind.png";
import nextjs from "./assets/nextjs.png";
import docker from "./assets/docker.png";
import linux from "./assets/linux.png";
import shopify from "./assets/shopify.png";
import azure from "./assets/azure.png";  
import shadcn from "./assets/shadcn.png";  
import stripe from "./assets/stripe.png";




import AnchorLink from 'react-anchor-link-smooth-scroll';


const Skills = () => {
  

  const techs = [
    
   
    
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: node,
      title: "Node.js",
      style: "shadow-green-500",
    },
    
    
  
    {
      id: 7,
      src: express,
      title: "Express.js",
      style: "shadow-gray-400 ",
    },
    {
      id: 8,
      src: mongoDB,
      title: "MongoDB",
      style: "shadow-green-500 ",
    },

    {
      id: 13,
      src: docker,
      title: "Docker",
      style: "shadow-blue-600 ",
    },

     {
      id: 10,
      src: mysql,
      title: "MySQL",
      style: "shadow-indigo-500",

     },
     { id: 9,
      src: php,
      title: "PHP",
      style: "shadow-purple-500  ",

     },

    {
      id: 6,
      src: git,
      title: "Git",
      style: "shadow-red-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-300 ",
    },

    {
      id: 0,
      src: nextjs,
      title: "Next.js",
      style: "shadow-red-700",

    },
      
      {
        id: 1,
        src: css,
        title: "CSS",
        style: "shadow-blue-400",
      },

      {
        id: 11,
        src: Cplus,
        title: "C++",
        style: "shadow-blue-400",
      },

      {
        id: 12,
        src: linux,
        title: "Linux",
        style: "shadow-yellow-400",
      },
      {
        id: 13,
        src: shopify,
        title: "Shopify",
        style: "shadow-green-400",
      },
      {
        id: 14,
        src: azure,
        title: "Azure",
        style: "shadow-blue-500",  // Add a style color for Azure
      },
      {
        id: 15,
        src: shadcn,
        title: "ShadCN",
        style: "shadow-gray-500",  
      },
      {
        id: 16,
        src: stripe,
        title: "Stripe",
        style: "shadow-purple-500",  
      },



    
  ];

  return (

  
    
        <section id='skills' className="relative bg-gradient-to-t from-purple-900 to-black  p-20 w-full h-full-screen">
    <div id='skills' className=" animate-pulse max-w-full overflow-hidden ">
    {Array.from({ length: 100 }, (_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full overflow-hidden  "
        style={{
          top: Math.random() * 100 + '%',
          left: Math.random() * 100 + '%',
          animationDuration: Math.random() * 5 + 5 + 's',
          animationDelay: Math.random() + 's',
        }}
      ></div>
      
      ))}
      </div>
      
      
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full-screen  text-white">
      
        <div>
          
          <p className="text-4xl font-bold border-b-4 border-purple-500 p-2 inline">
            My Skills
          </p>
          <p className="py-6 text-l">These are the technologies I've worked with</p>
        </div>

        <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-12">

          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-lg  bg-white bg-opacity-5 backdrop-blur-s hover:scale-110 duration-500 py-2 rounded-lg ${style} md:w-45 md:h-38 z-30 md:mt-2 `}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
        
      </div>
     
    </section>
    
  );
};
export default Skills;
