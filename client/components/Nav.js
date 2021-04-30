import { useState } from 'react'
import Link from 'next/link'

const Nav = ({ pages }) => {
  const [isOpen, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!isOpen);
  }

  return (
    <>
      <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <Link href="/">
            <a class="navbar-item">
              <img src="/images/logo-caju-cozinha-independente-porto-alegre.png" alt="Caju Cozinha Independente" />
            </a>
          </Link>
          <a onClick={handleMenu} role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu has-text-centered" id="navbar-menu" className={isOpen ? 'is-flex-desktop' : 'is-hidden'}>
          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Produtos
              </a>
              <div class="navbar-dropdown">
                { pages.produtos.map(({ slug, titulo }) => {
                  return (
                    <Link href={`/${slug}`}>
                      <a class="navbar-item">
                        { titulo }
                      </a>
                    </Link>
                  )
                }) }
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Como funciona
              </a>
              <div class="navbar-dropdown">
              { pages.comoFunciona.map(({ slug, titulo }) => {
                  return (
                    <Link href={`/${slug}`}>
                      <a class="navbar-item">
                        { titulo }
                      </a>
                    </Link>
                  )
                }) }
              </div>
            </div>
            <Link href="/">
              <a class="navbar-item">
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