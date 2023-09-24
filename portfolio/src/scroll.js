import { FaArrowAltCircleUp } from "react-icons/fa";
import React from "react";
import { useState, useEffect } from "react";

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      // Add a scroll event listener to check if the button should be visible
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    return (
      <>
        {isVisible && (
          <button
            className="fixed bottom-6 right-6 p-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 focus:outline-none animate-bounce"
            onClick={scrollToTop}
          >
            < FaArrowAltCircleUp />
          </button>
        )}
      </>
    );
  }
  
  export default ScrollToTopButton;