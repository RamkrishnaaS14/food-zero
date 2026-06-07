import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'
import logoImg from '@assets/images/Logo.png'

const Header = ({ isOverlay = false }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`${styles.header} ${isOverlay ? styles.headerOverlay : ''}`}>
      <div className={styles.headerRow}>
        <div className={styles.logoArea}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logoImg} alt="Food Zero Logo" />
            </Link>
          </div>
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <FaBars />
          </button>
        </div>
        <div className={styles.menuRight}>
          <a href="tel:+868523460000" className={styles.phone}>
            +86 852 346 000
          </a>
          <Link to="/reservations" className={styles.reservationsBtn}>
            Reservations
          </Link>
        </div>
      </div>

      <div className={`${styles.menuContent} ${menuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.wrapper}>
          <button
            className={styles.closeBtn}
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <FaTimes />
          </button>
          <nav>
            <ul className={styles.navMenu}>
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                  }
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/main"
                  className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                  }
                  onClick={closeMenu}
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <span className={styles.navTitle}>Blogs</span>
                <ul className={styles.subNavMenu}>
                  <li>
                    <NavLink
                      to="/blog/1-column"
                      className={({ isActive }) =>
                        isActive ? `${styles.subNavLink} ${styles.navLinkActive}` : styles.subNavLink
                      }
                      onClick={closeMenu}
                    >
                      1 Column
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blog/2-columns"
                      className={({ isActive }) =>
                        isActive ? `${styles.subNavLink} ${styles.navLinkActive}` : styles.subNavLink
                      }
                      onClick={closeMenu}
                    >
                      2 Columns
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blog/sidebar-post"
                      className={({ isActive }) =>
                        isActive ? `${styles.subNavLink} ${styles.navLinkActive}` : styles.subNavLink
                      }
                      onClick={closeMenu}
                    >
                      Sidebar Post
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                  }
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                  }
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
