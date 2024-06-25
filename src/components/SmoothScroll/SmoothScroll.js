import { useEffect, useState, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
const Scroll = () => {
  const scrollbarRef = useRef(null);
  const [executedElements, setExecutedElements] = useState(true);

  useEffect(() => {

    window.addEventListener('message', function(e) {
      var iframe = document.querySelector('#personio-iframe');
      var vsec = document.querySelector('.vacancy-cols');
      var eventName = e.data[0];
      var data = e.data[1];
      switch(eventName) {
          case 'setHeight':
              iframe.style.height = data + 'px';
              // vsec.style.height = data + 'px';
              break;
      }
  }, false);
  
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
      // const elementsWithAOS = document.querySelectorAll('[data-aos]');
      // elementsWithAOS.forEach((el) => {
      //   if (scrollbarRef.current.isVisible(el)) {
      //     el.classList.add('aos-animate');
      //   } else {
      //     el.classList.remove('aos-animate');
      //   }
      // });

      // Handle progress scrolling
      const elementwithbarcharts = document.querySelectorAll('.bar-charts');
      var stprog;
      elementwithbarcharts.forEach((el) => {
        if (scrollbarRef.current.isVisible(el)) {
          if (executedElements == true) {
            stprog = true;
            progressScrolling(el, stprog);
          }
        } else {
          stprog = false;
          setExecutedElements(el,stprog);
        }
      });

    };

    const progressScrolling = (el,stprog) => {
      const progressBars = el.querySelectorAll('.progress-bar');

      progressBars.forEach(bar => {
        if(stprog){
        var width = parseFloat(bar.getAttribute('datawidth'));
        }
        else{
        var width = 0;
        }
        const duration = 2000; // Animation duration in milliseconds
        //console.log(width);

        // Set initial width to 0 and then animate to specified width
        //bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = width + '%';
          //console.log(width);
        }, 10);
      });
      setExecutedElements(false);

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