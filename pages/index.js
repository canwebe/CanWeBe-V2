import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useCallback } from 'react'
import Modal from '../components/modal'
import ProjectScroll from '../components/projectScroller'
import TeamList from '../components/teamList'

import { FaChevronDown } from 'react-icons/fa'
import { getProjectList, getTestimonyData } from '../helpers'
import styles from '../styles/Home.module.css'

import LatestTech from '../components/svg/latestTech'
import FreeSvg from '../components/svg/freeSvg'
import Testimony from '../components/testimony'
import Footer from '../components/footer'
import useOffset from '../hooks/useOffset'
export default function Home({ data, testimonyData }) {
  const [isModal, setIsModal] = useState(false)
  const [isImgLoad, setIsImgLoad] = useState(false)
  const projectRef = useRef()
  const heroRef = useRef(null)

  // const scrollY = useOffset()
  // let progress = 0
  // const { current } = heroRef
  // if (current) {
  //   progress = Math.min(1, scrollY / current.clientHeight)
  // }

  const handleImg = useCallback(() => {
    setIsImgLoad(true)
  }, [])

  return (
    <>
      <Head>
        <title>Home | CanWeBe</title>
      </Head>
      <div className={styles.main}>
        <section
          className={styles.heroSection}
          // ref={heroRef}
          // style={{ transform: `translateY(-${progress * 20}vh)` }}
        >
          <div className={styles.videooverlay} />
          <video className={styles.video} autoPlay loop muted playsInline>
            <source src='/assets/bgvideo.mp4' type='video/mp4' />
          </video>
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
                  <Link href='/form/contact'>
                    <a className={styles.heroBtnContact}>Contact</a>
                  </Link>
                </div>
              </div>
              <div
                className={styles.heroRight}
                style={{ opacity: isImgLoad ? '1' : '0' }}
              >
                <Image
                  src='/logo.webp'
                  alt='logo'
                  layout='responsive'
                  width={500}
                  height={500}
                  onLoad={handleImg}
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
        <section ref={projectRef} className={styles.projectSection}>
          <div className='wrapper'>
            <h3 className='header'>Our Projects</h3>
            <ProjectScroll data={data} />
          </div>
        </section>
        <section className={styles.whyus}>
          <div className={styles.whyusleft}>
            <p className={styles.whyusleftp}>Why Us</p>
            <p className={styles.whyusleftsubp}>
              What make us different from others
            </p>
          </div>
          <div className={styles.whyusright}>
            <div className={styles.point1}>
              <div className={styles.point1Svg}>
                <LatestTech />
              </div>
              <h4 className={styles.point1H4}>Cutting Edge Tech</h4>
              <p className={styles.point1P}>
                We use latest tech stacks for our projects. Most of our project
                is PWA , Which is future of web app and our developers are
                skilled in latest tech and tools.
              </p>
            </div>
            <div className={styles.point2}>
              <p className={styles.problemQ}>
                What
                <br />
                type of
                <br />
                software we generally <br />
                build ?
              </p>
              <p className={styles.problemA}>
                We target general problems which will occur everyday in our
                life. Most of our app solves these everyday life problems. We
                follow the motto &quot; Tech for Good &quot;
              </p>
            </div>
            <div className={styles.point3}>
              <div className={styles.point3Svg}>
                <FreeSvg />
              </div>
              <h4 className={styles.point1H4}>Cost Free Products</h4>
              <p className={styles.point1P}>
                Most of our softwares are cost free and open sourced. Our app
                can easily accessible by most of general users with modern UI/UX
                and easy to use Interface.
              </p>
            </div>
          </div>
        </section>
        <Testimony data={testimonyData} />
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
            <h3 className='header'>Our Team</h3>
            <TeamList />
          </div>
        </section>
        <section className={styles.feedbackSection}>
          <div className='wrapper'>
            <div className={styles.feedbackCard}>
              <p>How was your experience with our services ?</p>
              <Link href='/form/review'>
                <a className={styles.feedbackBtn}>Rate Us</a>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
      {isModal && <Modal setIsModal={setIsModal} />}
    </>
  )
}

export async function getStaticProps() {
  const newdata = await getProjectList(6)
  const testimonyData = await getTestimonyData()
  const data = await JSON.parse(await JSON.stringify(newdata))
  // const data = []
  // const testimonyData = []
  return {
    props: {
      data,
      testimonyData,
    },
  }
}
