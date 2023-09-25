// src/components/ContactForm.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wq20f8u', 'template_ol4rdqg', e.target, 'At7512vyF-deLgKxp')
      .then((result) => {
        console.log('Email sent successfully:', result);
        // Add success message or other handling here
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        // Add error message or other handling here
      });

    // Clear form data
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Hide the form after submission
    setShowForm(false);
  };

  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        className="outline p-2 text-xl hover:scale-105 duration-300"
      >
        Contact Me
      </button>

      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          {/* Background overlay */}
          <div className="bg-black opacity-50 w-full h-full absolute"></div>
          

          {/* Contact Form */}
          
          <form onSubmit={handleSubmit} className="m-auto z-10">
            <div className="m-auto p-16 w-full h-full bg-zinc-900 z-50 gap-3 rounded-md animate-fadeIn">
            <div className="">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2   text-white hover:text-gray-400"
            >
              Close
            </button>
              <h1 className="mx-auto text-2xl font-bold p-2 text-white w-fit">
                Contact me today!
              </h1>
              <div className="p-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your Name"
                  className="w-full px-3 py-2 bg-white bg-opacity-20 backdrop-blur-m border rounded"
                  required
                />
              </div>
              <div className="p-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Your Email"
                  className="w-full px-3 py-2 bg-white bg-opacity-20 backdrop-blur-m border rounded"
                  required
                />
              </div>
              <div className="p-2">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your Message"
                  className="w-full px-3 py-4 border rounded bg-white bg-opacity-20 backdrop-blur-m"
                  required
                ></textarea>
              </div>
              <div className="md:mx-60">
                <button
                  type="submit"
                  className="bg-purple-500 text-white px-4 py-2 m-auto"
                >
                  Send
                </button>
              </div>
            </div>
            </div>
            </form>
          </div>
      
      )}
    </div>
  );
}


export default ContactForm;
