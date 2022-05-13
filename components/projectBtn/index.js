import styles from './projectBtn.module.css'
import { FaYoutube, FaGithub } from 'react-icons/fa'
import cls from 'classnames'
export default function ProjectBtn({ type, small }) {
  const name = {
    view: 'Visit Live',
    youtube: 'Watch on Youtube',
    github: 'View on Github',
    fb: 'View on Facebook',
  }

  const icon = {
    youtube: <FaYoutube />,
    github: <FaGithub />,
  }
  return small ? (
    <button
      className={type === 'youtube' ? styles.youtubeSmall : styles.githubSmall}
    >
      {icon[type]}
    </button>
  ) : (
    <button className={styles[type]}>{name[type]}</button>
  )
}
