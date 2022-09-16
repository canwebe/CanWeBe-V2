import {
  FaFacebook,
  FaRegEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'
import styles from './socialBtn.module.css'

export default function SocialBtn({ type, link }) {
  const content = {
    facebook: <FaFacebook />,
    gmail: <FaRegEnvelope />,
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />,
  }

  return (
    <a className={styles.links} href={link} target='_blank' rel='noreferrer'>
      {content[type]}
    </a>
  )
}
