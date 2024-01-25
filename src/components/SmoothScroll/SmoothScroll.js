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
    var elements = document.getElementsByClassName('navbar-light');
    // Add a listener to handle animations
    const handleScroll = () => {
      const scrollY = scrollbarRef.current.scrollTop;

      if (scrollY === 0) {
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.position = 'relative';
        }
        
      } else {
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.position = '';
        }
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

      // const elementsWithiframe = document.querySelectorAll('progress-bar');
      // elementsWithiframe.forEach((el) => {
      //   if (scrollbarRef.current.isVisible(el)) {
      //     el.classList.add('overfollow-scroll');
      //   } else {
      //     el.classList.remove('overfollow-scroll');
      //   }
      // });

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