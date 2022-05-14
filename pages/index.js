import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react'
import Modal from '../components/modal'
import ProjectScroll from '../components/projectScroller'
import TeamList from '../components/teamList'
import TestimonyGrid from '../components/testimonyGrid'
import { getProjectList } from '../helpers'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  const [isModal, setIsModal] = useState(false)
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
                  src='/logo.webp'
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
            <p className={styles.maintainenceP}>
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
        {/* <section className={styles.testimonySection}>
          <div className='wrapper'>
            <h3 className={styles.testimonyH3}>
              What do people feel about us !!
              <TestimonyGrid />
            </h3>
          </div>
        </section> */}
        <section className={styles.fundSection}>
          <div className='wrapper'>
            <div className={styles.fundContent}>
              <p className={styles.fundP}>Want us to help, Buy us a coffee</p>
              <button
                onClick={() => setIsModal(true)}
                className={styles.fundBtn}
              >
                help
              </button>
            </div>
          </div>
        </section>
        <section className={styles.teamSection}>
          <div className='wrapper'>
            <h3 className={styles.header}>Our Team</h3>
            <TeamList />
          </div>
        </section>
        <section className={styles.feedbackSection}>
          <div className='wrapper'>
            <div className={styles.feedbackCard}>
              <p>How was your experience with our services ?</p>
              <a
                href='https://xtrvl3ys9ze.typeform.com/to/jGwX9FWH'
                target='_blank'
                rel='noreferrer'
                className={styles.feedbackBtn}
              >
                Rate Us
              </a>
            </div>
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
      {isModal && <Modal setIsModal={setIsModal} />}
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
