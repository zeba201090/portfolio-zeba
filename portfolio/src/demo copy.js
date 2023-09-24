import React from 'react';

import node from "./assets/node.png";
import javascript from "./assets/javascript.png";

import express from "./assets/ex.png";
import mongoDB from "./assets/mongoDB.png";
import php from "./assets/php.png";
import mysql from "./assets/mysql.png";

import AnchorLink from 'react-anchor-link-smooth-scroll';
function Achievements() {

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
    ];
  return (

    
    
      
   <AnchorLink href='#about'> <section id='about' className="relative bg-gradient-to-t from-black via-purple-900 to-purple-800 p-20 min-h-1/2 md:w-full"> 
    <div className=" animate-pulse max-w-full ">
    {Array.from({ length: 100 }, (_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full  "
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
          
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            My Skills
          </p>
          <p className="py-6 text-l">These are the technologies I've worked with</p>
        </div>
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-12">

          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-lg bg-transparent hover:scale-110 duration-500 py-2 rounded-lg ${style} md:w-45 md:h-38 z-50 md:mt-2 `}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
        </div>
    </section>
    </AnchorLink>
  );
}

export default Achievements ;
