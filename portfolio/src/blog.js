import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import blog from './assets/blog.png';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    
      
   <section id='blog' className="relative bg-gradient-to-t from-black via-purple-900 to-black md:p-18 min-h-1/2 md:max-w-full"> 
    <div className=" animate-pulse max-w-full ">
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
      
       
       
       <div className='h-3/4' >
          
          <p className="text-4xl font-bold border-b-4 border-purple-500 p-2 inline">
            My Blog
          </p>
          <div className="flex flex-col md:flex-row items-center  z-40 md:mt-12 text-center justify-center mx-auto px-4 outline-2 bg-black  w-auto h-full p-6 rounded-md hover:scale-105 duration-300"> 
        
          <img  href='https://zeba201090.github.io/zebaBlog/' src={blog} alt="" className="w-20 "  />

          <a href='https://zeba201090.github.io/zebaBlog/' className="py-6 text-xl font-semibold "> Join me in the world of software development! Explore coding adventures, tips, and experiences on my blog. Click here to start the journey. Click To My Blogging Page Now!   </a>
          
          </div>
          
        </div>
     
       
{/*        
        <div className="flex flex-col md:flex-row items-center z-40 md:mt-12">
          <div className="md:w-1/2 mb-4 md:mb-0 p-5 ">
            <img src="demo.png" alt="Musarrat Zeba" className="md:w-60 md:h-60 rounded-full shadow-lg  md:mr-12" />
          </div>
          <div className="md:w-full md:pl-2">
            <p className="text-white text-xl mb-4 hover:scale-105 duration-300   ">
              I am a CSE student at United International University, and my passion lies in the field of software engineering. My eagerness to learn and stay updated with the latest technology trends has allowed me to develop an impressive skillset in backend development. My problem-solving capabilities are strong, and I am always eager to contribute to software engineering projects through work or internship opportunities.
            </p>
          </div>
          </div> */}
        </div>
     
    
    </section>
   
  );
}

export default Blog;
