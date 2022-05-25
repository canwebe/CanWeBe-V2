import AllProjects from '../../components/allprojects'
import Featured from '../../components/featured'
import TopRelease from '../../components/topRelease'
import { getFeaturedItem, getProjectList } from '../../helpers'
import Head from 'next/head'

export default function Projects({ data, featured }) {
  return (
    <>
      <Head>
        <title>Projects | CanWeBe</title>
      </Head>
      <div className='sectionbody'>
        <div className='wrapper'>
          <h1 className='pageHeader'>Projects.</h1>
        </div>
        <div className='wrapper'>
          <Featured data={featured} />
        </div>
        <TopRelease data={data.filter((item) => item.top)} />
        <div className='wrapper'>
          <AllProjects data={data} />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const jsondata = await getProjectList()
  const data = await JSON.parse(await JSON.stringify(jsondata))
  const featured = await getFeaturedItem()
  // const data = []
  // const featured = []
  return {
    props: { data, featured },
  }
}
