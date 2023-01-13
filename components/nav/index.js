import Link from 'next/link'
import Image from 'next/image'
import NavLink from '../navlink'
import { MdMenu, MdClose } from 'react-icons/md'
import styles from './nav.module.css'
import { useState } from 'react'
import logo from '../../public/logo.webp'

export default function Nav() {
  const [isMenu, setIsMenu] = useState(false)

  return (
    <>
      <nav className={styles.nav}>
        <div className="wrapper">
          <div className={styles.navWrapper}>
            <Link href="/" className={styles.logo}>
              <div className={styles.img}>
                <Image src={logo} alt="logo" placeholder="blur" />
              </div>
              <div>
                <span className={styles.can}>Can</span>WeBe!
              </div>
            </Link>
            <div className={styles.linkWrapper}>
              <NavLink link="/" content="Home" />
              <NavLink link="/team" content="Team" />
              <NavLink link="/products" content="Products" />
              <NavLink link="/blogs" content="Blogs" />
              <Link href="/form/contact" className={styles.contactBtn}>
                Contact
              </Link>
            </div>
            <div
              onClick={() => setIsMenu((prev) => !prev)}
              className={styles.menu}
            >
              {isMenu ? <MdClose /> : <MdMenu />}
            </div>
          </div>
        </div>
      </nav>
      {isMenu ? (
        // <div className={styles.sideMenuBg}>
        <div className={styles.sideMenu}>
          <div onClick={() => setIsMenu(false)}>
            <NavLink link="/" content="Home" />
          </div>
          <div onClick={() => setIsMenu(false)}>
            <NavLink link="/team" content="Team" />
          </div>
          <div onClick={() => setIsMenu(false)}>
            <NavLink link="/products" content="Products" />
          </div>
          <div onClick={() => setIsMenu(false)}>
            <NavLink link="/blogs" content="Blogs" />
          </div>
          <Link href="/form/contact" className={styles.contactBtn}>
            Contact
          </Link>
        </div>
      ) : // </div>
      null}
    </>
  )
}
