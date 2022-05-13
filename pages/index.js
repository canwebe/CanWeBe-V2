import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import ProjectScroll from '../components/projectScroller'
import TeamList from '../components/teamList'
import { getProjectList } from '../helpers'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  const projectRef = useRef()
  return (
    <>
      <Head>
        <title>Home | CanWeBe</title>
      </Head>
      <div className={styles.main}>
        <section className={styles.heroSection}>
          <div className='wrapper'>
            <div className={styles.heroDiv}>
              <div className={styles.heroLeft}>
                <p className={styles.heroSubline}>
                  A Software Development Organization
                </p>
                <h1 className={styles.heroH1}>
                  Welcome to <span className={styles.canwebe}>CanWeBe</span>
                </h1>
                <p className={styles.subpara}>
                  We assist you to remodel your everyday problems into modern
                  techy solution.We help the society by presenting cost-free
                  cutting edge apps and applications.
                </p>
                <div className={styles.heroBtnDiv}>
                  <button
                    className={styles.heroBtnProjects}
                    onClick={() => projectRef.current.scrollIntoView()}
                  >
                    Our Projects
                  </button>
                  <a
                    href='https://xtrvl3ys9ze.typeform.com/to/T7w8fzfY'
                    target='_blank'
                    rel='noreferrer'
                    className={styles.heroBtnContact}
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className={styles.heroRight}>
                <Image
                  src='/Unt.png'
                  alt='logo'
                  layout='responsive'
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.maintainence}>
          <div className='wrapper'>
            <p>
              We are on maintainence wait for our full website to back online
            </p>
          </div>
        </section>
        <section className={styles.projectSection}>
          <div className='wrapper'>
            <h3 ref={projectRef} className={styles.header}>
              Our Projects
            </h3>
            <ProjectScroll data={data} />
          </div>
        </section>
        <section className={styles.teamSection}>
          <div className='wrapper'>
            <h3 className={styles.header}>Our Team</h3>
            <TeamList />
          </div>
        </section>
        <footer>
          <div className='wrapper'>
            <p>
              All rights are reserved by CanWeBe! {new Date().getFullYear()}{' '}
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const newdata = await getProjectList()
  const data = await JSON.parse(await JSON.stringify(newdata))
  return {
    props: {
      data,
    },
  }
}
