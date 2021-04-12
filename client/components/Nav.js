import { useState } from 'react'
import Link from 'next/link'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)

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
        <div class="navbar-menu has-text-centered" id="navbar-menu" className={isOpen ? 'is-flex' : 'is-hidden'}>
          <div class="navbar-end">
            <Link href="/como-funciona">
              <a class="navbar-item">
                Como funciona
              </a>
            </Link>
            <Link href="/">
              <a class="navbar-item">
                Manifesto
              </a>
            </Link>
            <Link href="/requeijao">
              <a class="navbar-item">
                Requeijão
              </a>
            </Link>
            <Link href="/molho-vermelho-shock">
              <a class="navbar-item">
                Molho Vermelho Shock
              </a>
            </Link>
            <Link href="/molho-caju">
              <a class="navbar-item">
                Molho Caju!
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav