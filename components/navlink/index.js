import Link from 'next/link'
import styles from './navLink.module.css'
import cls from 'classnames'
import { useRouter } from 'next/router'
export default function NavLink({ link, content }) {
  const router = useRouter()

  return (
    <Link
      href={link}
      scroll={true}
      className={cls(
        styles.menu,
        router.pathname === link ? styles.active : ''
      )}
    >
      {content}
    </Link>
  )
}
