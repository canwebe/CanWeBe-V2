import Link from 'next/link'
import Image from 'next/image'
import NavLink from '../navlink'
import { MdMenu, MdClose } from 'react-icons/md'
import styles from './nav.module.css'
import { useState } from 'react'
export default function Nav() {
  const [isMenu, setIsMenu] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className='wrapper'>
        <div className={styles.navWrapper}>
          <Link href='/'>
            <a className={styles.logo}>
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
            </a>
          </Link>
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
            {isMenu ? <MdClose /> : <MdMenu />}
          </div>
        </div>
      </div>
      {isMenu && (
        <div className={styles.sideMenuBg}>
          <div className='wrapper'>
            <div className={styles.sideMenu}>
              <div onClick={() => setIsMenu(false)}>
                <NavLink link='/' content='Home' />
              </div>
              <div onClick={() => setIsMenu(false)}>
                <NavLink link='/projects' content='Projects' />
              </div>
              <div onClick={() => setIsMenu(false)}>
                <NavLink link='/blogs' content='Blogs' />
              </div>

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
