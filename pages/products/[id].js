import { getColData, getProjectList } from '../../helpers'
import styles from '../../styles/ProjectInfo.module.css'
import InfoSection from '../../components/infoSection'
import ProjectReviewSection from '../../components/projectReviewSection'
import GoBackpageBtn from '../../components/goBackPageBtn'
import HeadSeo from '../../components/HeadSeo'

export default function ProjectInfo({ data, id }) {
  return data ? (
    <>
      <HeadSeo
        title={data?.name || 'Project Name'}
        url={'/projects/' + id}
        desc={data?.longinfo}
      />
      <div className="sectionbody">
        <div className={styles.topBar}>
          <div className={`${styles.topBarWrapper} wrapper`}>
            <GoBackpageBtn />
            <p className={styles.projectName}>{data.name}</p>
          </div>
        </div>
        {/* <div className='wrapper'> */}
        <div className={`${styles.mainSection} wrapper`}>
          <InfoSection data={data} />
          <ProjectReviewSection reviews={data.review} name={data.name} />
        </div>
        {/* </div> */}
      </div>
    </>
  ) : (
    <h1 className={styles.nodata}>No data Found</h1>
  )
}

export async function getStaticProps({ params: { id } }) {
  const colname = `projects/${id}/additional`
  const [data] = await getColData(colname)
  return {
    props: { data, id },
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
