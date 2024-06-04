import { useState } from 'react';
import Link from 'next/link'

function NavMenu(props){
  const [NavMenu, SetNavMenu] = useState(false);
  const toggleMenu = () =>{
    SetNavMenu(!NavMenu);
  }
    return (
        <header className={`navbar navbar-expand-md navbar-light fixed-top cc-nav ${props.addedCLass } `}>
          <div className={`container ${NavMenu?'open-menu':''}`}>
<nav className="navbar navbar-expand-lg dynamic-Navbar">
<Link href="/" className="navbar-brand" >
  <img src="../../assets/images/logo.png" className='img-fluid' alt="Charge construct power on"/>
  </Link>
    <button className="navbar-toggler ms-auto" onClick={toggleMenu}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

    <div className={`collapse navbar-collapse home-nav ${NavMenu?'show':''}`} id="navbarColor01">
      <ul className="navbar-nav ms-auto align-items-center">
      <li className="nav-item">
        <Link href="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link href="/about">About</Link>
        </li>
        <li className="nav-item">
        <Link href="/career">Karriere</Link>
        </li>
        <li className="nav-item">
        <Link href="/quotation">Angebotsanfrage</Link>
        </li>
        <li className="nav-item">
        <Link href="/newsroom">Newsroom</Link>
        </li>
        <li className="nav-item">
        <Link href="/contact" className='main-btn border-6 cc-button cc-transbutton'>Kontakt</Link>
        </li>
      </ul>
      {/* <form className="form-inline">
        <input className="form-control mr-sm-2 hide" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </div>
  </nav>
  </div>
  </header>
  )
}

export default NavMenu;