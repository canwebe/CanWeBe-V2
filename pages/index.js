import Head from 'next/head'
import Image from 'next/image'
import { useRef, useEffect, useState, useContext, useCallback } from 'react'
import Modal from '../components/modal'
import ProjectScroll from '../components/projectScroller'
import TeamList from '../components/teamList'
import TestimonyGrid from '../components/testimonyGrid'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaChevronDown,
} from 'react-icons/fa'
import { getProjectList } from '../helpers'
import styles from '../styles/Home.module.css'

import LatestTech from '../components/svg/latestTech'
import FreeSvg from '../components/svg/freeSvg'
import { ScrollContext } from '../context/parralexContext'
export default function Home({ data }) {
  const [isModal, setIsModal] = useState(false)
  const [isImgLoad, setIsImgLoad] = useState(false)
  const [arrowStyle, setArrowStyle] = useState({
    opacity: '0',
    transform: 'translateY(0)',
  })
  const projectRef = useRef()
  const heroRef = useRef(null)
  const scrollY = useContext(ScrollContext)
  let progress = 0
  const { current } = heroRef
  if (current) {
    progress = Math.min(1, scrollY / current.clientHeight)
  }

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
          ref={heroRef}
          style={{ transform: `translateY(-${progress * 20}vh)` }}
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
            <FaChevronDown className={styles.downArrow} />
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
            <h3 className={styles.header}>Our Projects</h3>
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
        <section className={styles.infoSection}>
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
                CanWeBe is a software development organization which is founded
                by a group of students.We here at canwebe mainly developed
                softwares to solve daily life problems, Other than this we have
                a team of varius skilled person from different different field
                of work. We collaborate and brainstorm on ideas and deliver easy
                to use software to general users free of cost.
              </p>
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
  const newdata = await getProjectList(6)
  const data = await JSON.parse(await JSON.stringify(newdata))
  return {
    props: {
      data,
    },
  }
}
