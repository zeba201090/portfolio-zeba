import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wq20f8u', 'template_ol4rdqg', e.target, 'At7512vyF-deLgKxp')
      .then((result) => {
        console.log('Email sent successfully:', result);
    
        setShowSuccess(true);

        
        setTimeout(() => {
          setShowSuccess(false);
        }, 7000); 
      })
      .catch((error) => {
        console.error('Email send failed:', error);
      
      });

  
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="z-10">
        <div className="p-10 w-full h-full gap-3 mr-0">
          <div className="">
            <div className="p-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="w-full px-3 py-2 bg-white bg-opacity-20 backdrop-blur-m border"
                required
              />
            </div>
            <div className="p-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Your Email"
                className="w-full px-3 py-2 bg-white bg-opacity-20 backdrop-blur-m border"
                required
              />
            </div>
            <div className="p-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your Message"
                className="w-full px-3 py-4 border bg-white bg-opacity-20 backdrop-blur-m"
                required
              ></textarea>
            </div>
            <div className="">
              {showSuccess && (
                <div className='bg-purple-950 shadow-md shadow-purple-700 w-fit p-5 rounded-sm my-5 mx-auto'>
                  <h2 className='text-l'>Email sent successfully! </h2>
                </div>
              )}
              <button
                type="submit"
                className="bg-purple-500 text-white px-4 py-2 m-auto w-full"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
