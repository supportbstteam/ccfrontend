import { useEffect, useRef } from 'react'
import NavMenu from '@/components/Nav'
import Footer from '@/components/Footer'
import Head from 'next/head'
import '../../public/assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'aos/dist/aos.css';
import Scroll from './SmoothScroll/SmoothScroll'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function Layout({ children,title,viewClass }) {

  return (
      <>
     
         <Head>
        <title>{title}</title>
      </Head>
        <NavMenu addedCLass={viewClass}/>
         <Scroll/>
       <main>
        {children}
        </main>
        <Footer/>
        </>
  )
}

Layout.defaultProps = {
  title: 'Charge Construct',
  description: '',
  viewClass : 'innerpages'
}
