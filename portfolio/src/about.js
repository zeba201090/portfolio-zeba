import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


function About() {
  return (
    
      
   <AnchorLink href='#about'> <section id='about' className="relative bg-gradient-to-t from-black via-purple-900 to-purple-800 md:p-18 min-h-1/2 md:max-w-full"> 
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
      
        <div>
          
          <p className="text-4xl font-bold border-b-4 border-purple-500 p-2 inline">
            About Me
          </p>
          <p className="py-6 text-l"></p>
        </div>
       
       
        <div className="flex flex-col md:flex-row items-center z-40 md:mt-12">
          <div className="md:w-1/2 mb-4 md:mb-0 p-5 ">
            <img src="profile-pic.png" alt="Musarrat Zeba" className="md:w-60 md:h-60 rounded-full shadow-lg  md:mr-12" />
          </div>
          <div className="md:w-full md:pl-2">
          <p className="text-white text-lG mb-4 hover:scale-105 duration-300">
          I'm a Software Engineer with a passion for backend development and solving complex problems. I currently work remotely at <a href="https://cocoon.agency/about" className="text-blue-400 hover:underline">Cocoon, UK</a>, where I joined the team in February 2024, during my final semester at United International University. It’s been an amazing journey working with the MERN stack and diving into the latest technologies, from frontend to backend development.

          My journey into software engineering started with my deep curiosity and eagerness to learn. Throughout my studies, I’ve honed my skills in backend development, databases, and tackling challenging engineering problems. Now, at Cocoon, I’m continuing to grow, work on real-world projects, and contribute to building innovative solutions. I’m always excited to take on new challenges and keep learning, whether it’s through work, side projects, or exploring the newest tech trends.
        </p>

          </div>
          </div>
        </div>
     
    
    </section>
    </AnchorLink>
  );
}

export default About;
