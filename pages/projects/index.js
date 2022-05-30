import AllProjects from '../../components/allprojects'
import Featured from '../../components/featured'
import TopRelease from '../../components/topRelease'
import { getColData, getProjectList } from '../../helpers'
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
  let data = []
  let featured = []
  try {
    const jsondata = await getProjectList()
    data = await JSON.parse(JSON.stringify(jsondata))
    featured = await getColData('featured')
  } catch (error) {
    console.log(error)
  }

  return {
    props: { data, featured: featured[0] },
  }
}
