import { useState } from 'react'
import Link from 'next/link'

const Nav = ({ pages }) => {
  const [isOpen, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!isOpen);
  }

  return (
    <>
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img src="/images/logo-caju-cozinha-independente-porto-alegre.png" alt="Caju Cozinha Independente" />
            </a>
          </Link>
          <a onClick={handleMenu} role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbar-menu" className={`navbar-menu has-text-centered ${isOpen ? 'is-flex' : 'is-hidden'}`}>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Produtos
              </a>
              <div className="navbar-dropdown">
                { pages.produtos.map(({ slug, titulo }) => {
                  return (
                    <Link href={`/${slug}`} key={slug}>
                      <a className="navbar-item" onClick={handleMenu}>
                        { titulo }
                      </a>
                    </Link>
                  )
                }) }
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Como funciona
              </a>
              <div className="navbar-dropdown">
              { pages.comoFunciona.map(({ slug, titulo }) => {
                  return (
                    <Link href={`/${slug}`} key={slug}>
                      <a className="navbar-item" onClick={handleMenu}>
                        { titulo }
                      </a>
                    </Link>
                  )
                }) }
              </div>
            </div>
            <Link href="/">
              <a className="navbar-item">
                Manifesto
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav