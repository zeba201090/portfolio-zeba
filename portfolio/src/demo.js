import React from 'react';

import Eventpro from "./assets/Eventpro.png";
import Autocare from "./assets/AutoCare.jpg";
import express from "./assets/ex.png";



import AnchorLink from 'react-anchor-link-smooth-scroll';
function Achievements() {

   

  const techs = [
    
   
    
    {
      id: 2,
      src: Eventpro,
      title: "UIU EventPro : Event Management Platform for University",
      style: "shadow-purple-500 w",
      desciption: "Node.js, Express.js, MongoDB, RESTFUL APIs, EJS, Bkash Sandbox, Bootstrap, HTML, CSS, "
      
    },
    {
      id: 3,
      src: Autocare,
      title: "AutoCare : Vehicle Servicing Platform",
      style: "shadow-purple-500 ",
      desciption: "PHP, MySQL, HTML, CSS, Bootstrap, JavaScript, Ajax",
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
      <p className="text-4xl font-bold border-b-4 border-purple-500 p-2 inline">
            My Projects
          </p>
       
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 text-center py-8 px-8 sm:px-12">

          {techs.map(({ id, src, title, style,desciption }) => (
            
            <div
              key={id}
              className={`shadow-lg  bg-white bg-opacity-20 backdrop-blur-m  drop-shadow-lg hover:scale-110 duration-500 py-2 rounded-lg ${style} md:w-full md:h-full p-10 z-50 md:mt-2  `}
            >

               <p className="mt-2 font-bold text-xl  ">{title}</p>
               <div className=' '>
               <div  className='p-5'> 
              </div>
              <div>
                <img src={src} alt="" className="md:w-full md:h-fit mx-auto p-3" />
              <h3 className="md:mt-6 md:w-full md:h-20 backdrop-blur-m bg-purple-900 backdrop-blur-m p-2  ">{desciption}</h3>
              <p className='  '>
I used MongoDB to design a reliable schema and database to store user info, bookings, payments, and events. I created the user interface with HTML, CSS, and EJS templates, connecting it to the backend using RESTful APIs. The backend, built with Node.js and Express.js, focused on making it easy to create, read, update, and delete data through these APIs. We integrated bKash Sandbox for online payments, NodeMailer for email confirmations, and generated dynamic PDFs for bills and tickets. I also ensured security with input validation and proper error handling of corner cases in the backend. I have also created documentation guides for users, admins, and developers, including a detailed API guide.</p>

              </div>
              </div>
             

             
            </div>
           
          ))}
        </div>
        </div>
    </section>
    </AnchorLink>
  );
}

export default Achievements ;
