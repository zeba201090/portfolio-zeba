import React from 'react';

import certificate from "./assets/certificate.jpg";
import hack from "./assets/hack.jpg";
import mongodb from "./assets/mongodb.jpg";
import certificate2 from "./assets/certificate2.jpg";
import cse from "./assets/cse.jpeg";
import techkriti from "./assets/techkriti.jpeg";
import ContactForm from './contact';


import AnchorLink from 'react-anchor-link-smooth-scroll';
function Achievements() {

  const techs = [
    
    {
      id: 1,
      src: mongodb,
      title: "MONGO DB FOR NODE.JS DEVELOPERS",
      link: "https://learn.mongodb.com/c/5jhqx9OJSK2a9uc7H4FPlg",
    },
    
    {
      id: 2,
      src: hack,
      title: "NODE.JS INTERMEDIATE",
      style: "",
      link: "https://www.hackerrank.com/certificates/777affe28ee3",

    },
    {
      id: 3,
      src: certificate,
      title: "NODE.JS BASIC",
      style: "",
      link: "https://www.hackerrank.com/certificates/56e0e9a662c7",

    },
    {
      id: 4,
      src: certificate2,
      title: "JAVASCRIPT BASIC",
      style: "",
      link: "https://www.hackerrank.com/certificates/7a297dc8a8e4",

    },
    {
      id: 5,
      src: cse,
      title: "CSE PROJECT SHOW 2022",
      style: "",
      link: "",


    },
    // {
    //   id: 6,
    //   src: techkriti,
    //   title: "TECHKRITI 2023",
    //   style: "",
    // },    

    ];
  return (

    
    
      
   
   <section id='certificate' className="relative bg-gradient-to-b to-purple-900 via-black from-purple-900 p-15 min-h-1/2 md:w-full"> 
   <AnchorLink href='#certificate'> 
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
      </AnchorLink>

      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full-screen  text-white">
      
        <div>
          
          <p className="text-4xl font-bold border-b-4 border-purple-500 p-2 inline">
            Ceritifactes
          </p>
        </div>
         
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-12">

          {techs.map(({ id, src, title, style,link }) => (
           <a href={link} ><div
              key={id}
              className={`shadow-lg bg-transparent hover:scale-125 duration-700 py-2 rounded-lg ${style} md:w-full md:h-full z-40 md:mt-2 `}
            >
              
              <img src={src} alt="" className="md:w-full  mx-auto " />
              <p className="mt-4">{title}</p>
            </div>
             </a>
          ))}
        </div>
        </div>
    </section>
    
  );
}

export default Achievements ;
