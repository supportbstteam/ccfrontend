import { useEffect, useState, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

const Scroll = () => {
  const scrollbarRef = useRef(null);
  const [executedElements, setExecutedElements] = useState([]);

  useEffect(() => {
    const options = {
      damping: 0.07,
    };

    scrollbarRef.current = Scrollbar.init(document.body, options);
    const elementsWithAOS = document.querySelectorAll('[data-aos]');

    const handleScroll = () => {
      const scrollY = scrollbarRef.current.scrollTop;
      const elements = document.getElementsByClassName('navbar-light');

      // Handle navbar position
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.position = scrollY === 0 ? 'relative' : '';
      }

      // Check if an element with 'data-aos' attribute is visible
      elementsWithAOS.forEach((el) => {
        if (scrollbarRef.current.isVisible(el)) {
          el.classList.add('aos-animate');
        } else {
          el.classList.remove('aos-animate');
        }
      });

      // Handle progress scrolling
      const elementwithbarcharts = document.querySelectorAll('.bar-charts');
      elementwithbarcharts.forEach((el) => {
        if (scrollbarRef.current.isVisible(el)) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    };

    const progressScrolling = (el) => {
      const progressBars = el.querySelectorAll('.progress-bar');

      progressBars.forEach(bar => {
        const width = parseFloat(bar.style.width);
        const duration = 2000; // Animation duration in milliseconds
        console.log(width);

        // Set initial width to 0 and then animate to specified width
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = width + '%';
        }, 100);
      });
    };

    scrollbarRef.current.addListener(handleScroll);

    return () => {
      if (scrollbarRef.current) {
        scrollbarRef.current.destroy();
      }
    };
  }, []);

  return null;
};

export default Scroll;
