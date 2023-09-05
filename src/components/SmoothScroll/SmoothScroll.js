import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

const Scroll = () => {
  const scrollbarRef = useRef(null);

  useEffect(() => {
    const options = {
      damping: 0.07,
    };

    // Initialize the scrollbar on the document body using the ref
    scrollbarRef.current = Scrollbar.init(document.body, options);

    // Add a listener to handle animations
    const handleScroll = () => {
      const scrollY = scrollbarRef.current.scrollTop;

      if (scrollY === 0) {
        // Do something when scroll is at the top
      } else {
        // Do something when scroll is not at the top
      }

      // Check if an element with 'data-aos' attribute is visible
      const elementsWithAOS = document.querySelectorAll('[data-aos]');
      elementsWithAOS.forEach((el) => {
        if (scrollbarRef.current.isVisible(el)) {
          el.classList.add('aos-animate');
        } else {
          el.classList.remove('aos-animate');
        }
      });
    };

    scrollbarRef.current.addListener(handleScroll);

    return () => {
      if (scrollbarRef.current) {
        scrollbarRef.current.destroy();
      }
    };
  }, []); // Add dependencies if needed

  // Render something if necessary
  return null;
};

export default Scroll;
