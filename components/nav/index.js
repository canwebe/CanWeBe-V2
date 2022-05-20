import Link from 'next/link'
import Image from 'next/image'
import NavLink from '../navlink'
import { FaStream } from 'react-icons/fa'
import styles from './nav.module.css'
import { useState } from 'react'
export default function Nav() {
  const [isMenu, setIsMenu] = useState(false)
  return (
    <nav className={styles.nav}>
      <div className='wrapper'>
        <div className={styles.navWrapper}>
          <div className={styles.logo}>
            <div className={styles.img}>
              <Image
                src='/logo.webp'
                alt='logo'
                width={70}
                height={70}
                layout='responsive'
              />
            </div>
            <div>
              <span className={styles.can}>Can</span>WeBe!
            </div>
          </div>
          <div className={styles.linkWrapper}>
            <NavLink link='/' content='Home' />
            <NavLink link='/projects' content='Projects' />
            <NavLink link='/blogs' content='Blogs' />
            <a
              target='_blank'
              rel='noreferrer'
              href='https://xtrvl3ys9ze.typeform.com/to/T7w8fzfY'
              className={styles.contactBtn}
            >
              Contact
            </a>
          </div>

          <div
            onClick={() => setIsMenu((prev) => !prev)}
            className={styles.menu}
          >
            <FaStream />
          </div>
        </div>
      </div>
      {isMenu && (
        <div className={styles.sideMenuBg}>
          <div className='wrapper'>
            <div className={styles.sideMenu}>
              <NavLink link='/' content='Home' />
              <NavLink link='/projects' content='Projects' />
              <NavLink link='/blogs' content='Blogs' />
              <a
                target='_blank'
                rel='noreferrer'
                href='https://xtrvl3ys9ze.typeform.com/to/T7w8fzfY'
                className={styles.contactBtn}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
