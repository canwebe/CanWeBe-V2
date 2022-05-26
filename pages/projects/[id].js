import { useRouter } from 'next/router'
import { getAdditionalData, getProjectList } from '../../helpers'
import styles from '../../styles/ProjectInfo.module.css'
import { FaArrowLeft } from 'react-icons/fa'
import InfoSection from '../../components/infoSection'
import Contributor from '../../components/contributor'
import ProjectReviewSection from '../../components/projectReviewSection'
import Head from 'next/head'

export default function ProjectInfo({ data }) {
  const router = useRouter()

  return data ? (
    <>
      <Head>
        <title>{data.name} | CanWeBe</title>
      </Head>
      <div className='sectionbody'>
        <div className={styles.topBar}>
          <div className={`${styles.topBarWrapper} wrapper`}>
            <button className={styles.gobackBtn} onClick={() => router.back()}>
              <FaArrowLeft /> Go Back
            </button>
            <p className={styles.projectName}>{data.name}</p>
          </div>
        </div>
        {/* <div className='wrapper'> */}
        <div className={`${styles.mainSection} wrapper`}>
          <InfoSection data={data} />
          {data?.contributor && <Contributor data={data.contributor} />}
          <ProjectReviewSection reviews={data.review} name={data.name} />
        </div>
        {/* </div> */}
      </div>
    </>
  ) : (
    <h1 className={styles.nodata}>No data Found</h1>
  )
}

export async function getStaticProps(context) {
  const data = await getAdditionalData(context.params.id)
  return {
    props: { data },
  }
}

export async function getStaticPaths() {
  const data = await getProjectList()
  const projectArray = data.map((item) => ({ params: { id: item.id } }))

  return {
    paths: projectArray,
    fallback: true,
  }
}
