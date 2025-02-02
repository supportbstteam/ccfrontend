import { useEffect, useState } from 'react'
import NavMenu from '@/components/Nav'
import Footer from '@/components/Footer'
import Head from 'next/head'
import ContactDetails from '@/components/GeneralDetails/ContactDetails'
import '../../public/assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'aos/dist/aos.css';
import Aos from 'aos';

export const metadata = {
  title: 'Charge Construct | Power On!',
  description: 'Generated by create next app',
};

const isVisible = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const handleAOS = () => {
  const elementsWithAOS = document.querySelectorAll('[data-aos]');
  elementsWithAOS.forEach((el) => {
    if (isVisible(el)) {
      const progressBars = el.querySelectorAll('.progress-bar');
      progressBars.forEach((progressBar) => {
        const dataWidth = progressBar.getAttribute('datawidth');
        progressBar.style.width = `${dataWidth}%`;
      });
      el.classList.add('aos-animate');
    } else {
      el.classList.remove('aos-animate'); // Optional: Remove class if element is not visible
    }
  });
};

const debounce = (func, delay) => {
  let timeoutId;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

const Layout = ({ children, title, metaDescription, viewClass }) => {
  useEffect(() => {
    Aos.init({ duration: 2700 });
    Aos.refresh();
    //window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to apply styles on page load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = debounce(() => {
    // const scrollPosition = window.scrollY;
    // const smoothScroll = document.getElementsByClassName('bar-charts');
    // smoothScroll.style.transform = `translate3d(0, -${scrollPosition}px, 0)`;

    
    handleAOS();
  }, 100);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription ? metaDescription : 'Charge Construct'} />
        <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon.png" />
      </Head>
      <div className="smooth-scroll" id="smoothScroll">
        <NavMenu addedCLass={viewClass} />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

Layout.defaultProps = {
  title: 'Charge Construct',
  description: '',
  viewClass: 'innerpages',
};

export default Layout;
