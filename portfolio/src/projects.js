import React from 'react';
import ReadMore from './readMore';
import Eventpro from "./assets/Eventpro.png";
import Autocare from "./assets/AutoCare.jpg";
import portfolio from "./assets/portfolio.jpg";
import todo from "./assets/todo.jpg";



import AnchorLink from 'react-anchor-link-smooth-scroll';


function Projects() {

   

  const techs = [
    
   
    
    {
      id: 2,
      src: Eventpro,
      title: "UIU EventPro : Event Management Platform for University",
      style: "shadow-purple-500 w",

      desciption: "Node.js, Express.js, MongoDB, RESTFUL APIs, EJS, Bkash Sandbox, Bootstrap, HTML, CSS, ",
      detail : "I used MongoDB to design a reliable schema and database to store user info, bookings, payments, and events. I created the user interface with HTML, CSS, and EJS templates, connecting it to the backend using RESTful APIs. The backend, built with Node.js and Express.js, focused on making it easy to create, read, update, and delete data through these APIs. I integrated bKash Sandbox for online payments, NodeMailer for email confirmations, and generated dynamic PDFs for bills and tickets. I also ensured security with input validation and proper error handling of corner cases in the backend. The code is written following MVC . I have also created documentation guides for users, admins, and developers, including a detailed API guide.",
      link: "https://github.com/zeba201090/UIU-EventPro",
    },
    {
      id: 3,
      src: Autocare,
      title: "AutoCare : Vehicle Servicing Platform",
      style: "shadow-purple-500 ",
      desciption: "PHP, MySQL, HTML, CSS, Bootstrap, JavaScript, Ajax",
      detail : "This porject is built using raw PHP along with bootstrap, HTML and CSS. It is a vehicle servicing platform where users can book services for their vehicles. Vendors can add services, manage bookings, and view orders. I have used MySQL database to store user info, bookings, and services. I have created the user interface with HTML, CSS, and Bootstrap templates, connecting it to the backend using PHP. The project has a marketplace which has features of e-commerce stores like cart, checkout, order summary etc. The vendors or service providers can also accept and decline to orders and can also view the orders. Car owners gets frequent reminders about taking services,and these features are all done with SQL queries with PHP.",
      link: "https://github.com/zeba201090/AutoCare-System",
    },

    { id: 4,
      src: portfolio,
      title: "Portfolio Website",
      style: "shadow-purple-500 ",
      desciption: "React.js, Tailwind",
      detail: "This is my portfolio website. I have used React.js and Tailwind CSS to build this website. It is a fully responsive website on any device. I have used React Hooks and Tailwind CSS to make this website more interactive. This project is displayed to showcase my frontend skills.",
      link: "https://github.com/zeba201090/portfolio-zeba",

    
    },
    {
      id: 5,
      src: todo,
      title: "Todo App",
      style: "shadow-purple-500 ",
      desciption: "MongoDB, Express.js, React.js, Node.js, HTML, CSS",
      detail: "This is a simple Todo App using MERN. I have used axios library to connect the server and client side. The to-do tasks are saved in the database and fetched from the database. RESTful APIs are also used.",
      link: "https://github.com/zeba201090/practice_mern",
    }
 
    ];
    return (
      <section id='projects' className="relative bg-gradient-to-t from-black to-purple-900 p-15 min-h-1/2 md:w-full">
         <div className=" animate-pulse max-w-full  overflow-hidden">


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
         My Projects
        </p>
        <p className="py-6 text-l"></p>
      </div>
      <div> <h1>
  The projects you see here are from my early side projects as a student. Now, I work remotely with <span class="font-bold">MERN stack</span> technologies for well-known brands in the <span class="font-bold">UK</span>, <span class="font-bold">US</span>, and <span class="font-bold">Canada</span>. My main focus is on building <span class="font-bold">configurable systems</span> and <span class="font-bold">authentication solutions</span> for a variety of clients, including <span class="font-bold">government product sellers</span>. Each project involves careful <span class="font-bold">system and database architecture</span> to ensure the solutions are both efficient and scalable. In addition to backend work, I also explore <span class="font-bold">AR/VR development</span> and <span class="font-bold">3D modeling</span>, creating immersive experiences and visualizing complex data in creative ways. I’m always working to optimize performance, ensuring that systems are <span class="font-bold">fast, reliable, and secure</span>, even when managing large amounts of data.
</h1>

                 </div>
          <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 text-center sm:py-8 sm:px-12">
          
            {techs.map(({ id, src, title, style, desciption, detail,link }) => (
              <div
                key={id}
                className={`shadow-lg bg-white bg-opacity-20 backdrop-blur-m drop-shadow-lg hover:scale-110 duration-700 py-2 rounded-lg ${style} md:w-full md:h-full  p-8 z-50 md:mt-2`}
              >
                 <p className="mt-2 font-bold text-xl">{title}</p>
                <div className=" ">
                  
                  <div>
                  <a href={link}>  <img src={src} alt="" className="md:w-full md:h-full mx-auto p-3" /> </a>
                    
                    <h3 className="md:mt-6 md:w-full md:h-fit backdrop-blur-m bg-purple-900 backdrop-blur-m p-2 rounded-xl md:text-sm">
                      {desciption}
                    </h3>
                    <p className='md:h-fit md:w-fit'>
                      <ReadMore>{detail}</ReadMore>
                    </p>
                  </div>
                </div>
              </div>
            
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;