import styles from './projectBtn.module.css'
import { FaYoutube, FaGithub } from 'react-icons/fa'
export default function ProjectBtn({ type, small, link }) {
  const name = {
    view: 'Visit Live',
    youtube: 'Watch This',
    github: 'Github Repo',
    fb: 'View This',
  }

  const icon = {
    youtube: <FaYoutube />,
    github: <FaGithub />,
  }
  return small ? (
    <a
      target='_blank'
      rel='noreferrer'
      href={link}
      className={type === 'youtube' ? styles.youtubeSmall : styles.githubSmall}
    >
      {icon[type]}
    </a>
  ) : (
    <a target='_blank' rel='noreferrer' href={link} className={styles[type]}>
      {name[type]}
    </a>
  )
}
