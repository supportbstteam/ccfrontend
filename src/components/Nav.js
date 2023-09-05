import Link from 'next/link'

function NavMenu(props){
    return (
        <header className={`navbar navbar-expand-md navbar-light fixed-top cc-nav ${props.addedCLass}`}>
          <div className='container'>
<nav className="navbar navbar-expand-lg dynamic-Navbar">
<Link href="/" className="navbar-brand" >
  <img src="../../assets/images/logo.png" className='img-fluid' alt="Charge construct power on"/>
  </Link>
    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

    <div className="collapse navbar-collapse home-nav" id="navbarColor01">
    <button className="border-6 cc-button cc-transbutton" type="button">Kundengruppen</button>
    
      <ul className="navbar-nav ms-auto align-items-center">
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
        <Link href="#" className='border-6 cc-button'>Kontakt</Link>
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