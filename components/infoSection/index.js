import styles from '../../styles/ProjectInfo.module.css'
import Image from 'next/image'
import { FaGithub, FaFacebook, FaYoutube } from 'react-icons/fa'

export default function InfoSection({ data }) {
  const btnName = {
    live: 'Visit Live',
    youtube: (
      <>
        Watch on <FaYoutube className={styles.icon} />
      </>
    ),
    facebook: (
      <>
        View on <FaFacebook className={styles.icon} />
      </>
    ),
    github: (
      <>
        Check on <FaGithub className={styles.icon} />
      </>
    ),
  }

  return (
    <div className={styles.photoDiv}>
      <div className={styles.infopart}>
        <div className={styles.techstack}>
          <h3 className={styles.techstackH3}>Technology Used</h3>
          <div className={styles.techstackWrapper}>
            {data.stack.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </div>
        <div className={styles.infoDiv}>
          <h3 className={styles.header}>Info</h3>
          <p className={styles.infoP}>{data.longinfo}</p>
          <div className={styles.btnWrapper}>
            {data.links.map((item, i) => (
              <a
                href={item.link}
                key={i}
                className={styles[item.name]}
                target='_blank'
                rel='noopener noreferrer'
              >
                {btnName[item.name]}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.imgpart}>
        {data.hdimg ? (
          <Image
            src={data.hdimg}
            width={2800}
            height={1575}
            alt={data.name}
            layout='responsive'
          />
        ) : (
          <iframe
            width='100%'
            height='100%'
            src={data.embed}
            title={data.name}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  )
}
