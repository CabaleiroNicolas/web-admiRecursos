"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import styles from "./header.module.css"
import Image from "next/image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>
              <span className={styles.logoText}>
                <div>DreamCash</div>
            </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <Link href="#" className={styles.navLink}>
              Productos
            </Link>
            <Link href="#" className={styles.navLink}>
              Beneficios
            </Link>
            <Link href="#" className={styles.navLinkActive}>
              Nosotros
            </Link>
            <Link href="#" className={styles.navLink}>
              Ayuda
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className={styles.desktopCta}>
            <button className={styles.buttonOutline}>Iniciar sesión</button>
            <button className={styles.buttonPrimary}>Descargá la app</button>
          </div>

          {/* Mobile menu button */}
          <div className={styles.mobileMenuButton}>
            <button onClick={toggleMenu} className={styles.menuButton}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            <Link href="#" className={styles.mobileNavLink} onClick={toggleMenu}>
              Productos
            </Link>
            <Link href="#" className={styles.mobileNavLink} onClick={toggleMenu}>
              Beneficios
            </Link>
            <Link href="#" className={styles.mobileNavLinkActive} onClick={toggleMenu}>
              Nosotros
            </Link>
            <Link href="#" className={styles.mobileNavLink} onClick={toggleMenu}>
              Ayuda
            </Link>
            <div className={styles.mobileCta}>
              <button className={styles.buttonOutlineFull}>Iniciar sesión</button>
              <button className={styles.buttonPrimaryFull}>Descargá la app</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
