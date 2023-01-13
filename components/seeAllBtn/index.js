import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import styles from './seeAllBtn.module.css'

export default function SeeAllBtn({ name }) {
  return (
    <div className={styles.seeMoreDiv}>
      <Link href={`/${name}`} className={styles.seeMoreBtn}>

        <FaChevronRight className={styles.btnSvg} />See All
      </Link>
    </div>
  );
}
