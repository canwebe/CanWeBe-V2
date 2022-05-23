import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa'

import styles from './footer.module.css'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.infoSection}>
        <div className='wrapper'>
          <div>
            <h2 className={styles.teamName}>CanWeBe!</h2>
            <div className={styles.teamSocialWrapper}>
              <a
                className={styles.facebook}
                href='https://www.facebook.com/TeamCanWeBe'
                target='_blank'
                rel='noreferrer'
              >
                <FaFacebook />
              </a>
              <a
                className={styles.instagram}
                href='https://www.instagram.com/canwebeofficial/'
                target='_blank'
                rel='noreferrer'
              >
                <FaInstagram />
              </a>
              <a
                className={styles.linkedin}
                href='https://www.linkedin.com/company/canwebe'
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedin />
              </a>
              <a
                className={styles.youtube}
                href='https://www.youtube.com/channel/UCZQme48ejS0QY3C4JmWgI4Q'
                target='_blank'
                rel='noreferrer'
              >
                <FaYoutube />
              </a>
              <a
                className={styles.twitter}
                href='https://twitter.com/teamcanwebe'
                target='_blank'
                rel='noreferrer'
              >
                <FaTwitter />
              </a>
            </div>
            <h4>contact@canwebe.tech</h4>
            <p className={styles.teamPara}>
              CanWeBe is a software development organization which is founded by
              a group of students.We here at canwebe mainly developed softwares
              to solve daily life problems, Other than this we have a team of
              varius skilled person from different different field of work. We
              collaborate and brainstorm on ideas and deliver easy to use
              software to general users free of cost.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div className='wrapper'>
          <p className={styles.bottomFooterP}>
            All rights are reserved by CanWeBe! {new Date().getFullYear()}{' '}
          </p>
        </div>
      </div>
    </footer>
  )
}
