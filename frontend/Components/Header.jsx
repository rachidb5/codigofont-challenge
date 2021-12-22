import Link from 'next/link'
import Img from 'next/image';
import LogoImg from '../assets/LogoImg.svg';
import Context from '../Context/Context';
import { useContext } from 'react';

function Header () {
  const { menu, setMenu }= useContext(Context);
  function menuDropper() {
    setMenu(!menu);
    console.log(menu)
  }
    return (
      <nav className="navbar bg-dark navbar-expand-lg d-flex justify-content-between">
        <Link href="/">
          <span className="navbar-brand">
            <Img
              src={ LogoImg }
              alt="Logo"
              width={106}
              height={48}
              />
          </span>
        </Link>  
        <button
            className="navbar-toggler navbar-dark"
            type="button" data-toggle="collapse"
            data-target="#navbarNavDropdown" 
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            onClick={() => menuDropper()}
            aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
               </Link>
            </li>
            <li className="nav-item">
            <Link href="/games">
              <a className="nav-link text-light" href="#">Jogos</a>
              </Link>
            </li>
            <li className="nav-item">
            <Link href="/gameregister">
              <a className="nav-link text-light" href="#">Cadastro</a>
              </Link>
            </li>
            <li className="nav-item">
            <Link href="/cart">
              <a className="nav-link text-light" href="#">Carrinho</a>
              </Link>
            </li>
          </ul>
      </div>
    </nav>
    )
}

export default Header;