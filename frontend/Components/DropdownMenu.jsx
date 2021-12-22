import Link from 'next/link'

export default function DropdownHeader(props) {
    return (
      <div className="dropdown ml-5">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <hr/>
              <Link href="/">
                <a className="nav-link text-light active" aria-current="page">Home</a>
              </Link>
            <hr/>
          </li>
          <li className="nav-item">
            <Link href="/games">
              <a className="nav-link text-light">Jogos</a>
            </Link>
            <hr/>
          </li>
          <li className="nav-item">
            <Link href="/gameregister">
              <a className="nav-link text-light">Cadastro</a>
              </Link>
            <hr/>
          </li>
          <li className="nav-item">
            <Link href="/cart">
              <a className="nav-link text-light">Carrinho</a>
              </Link>
            <hr/>
          </li>
        </ul>
      </div>
    )
}