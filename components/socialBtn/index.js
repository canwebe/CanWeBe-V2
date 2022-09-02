import {
  FaFacebook,
  FaRegEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'
import styles from './socialBtn.module.css'

export default function SocialBtn({ type, link, large }) {
  const content = {
    facebook: <FaFacebook />,
    gmail: <FaRegEnvelope />,
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />,
  }

  return (
    <a
      className={`${styles.links} ${large ? 'large' : ''}`}
      href={link}
      target='_blank'
      rel='noreferrer'
    >
      {content[type]}
    </a>
  )
}
