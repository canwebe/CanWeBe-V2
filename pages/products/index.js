import AllProjects from '../../components/allprojects'
import Featured from '../../components/featured'
import TopRelease from '../../components/topRelease'
import { getColData, getProjectList } from '../../helpers'
import HeadSeo from '../../components/HeadSeo'

export default function Projects({ data, featured }) {
  return (
    <>
      <HeadSeo
        title="Products"
        url="/products"
        desc="List of Some of the projects done by CanWeBe!. Other projects yet to come Stay tuned with CWB."
      />
      <div className="sectionbody">
        <div className="wrapper">
          <h1 className="pageHeader">Products.</h1>
        </div>
        <div className="wrapper">
          <Featured data={featured} />
        </div>
        <TopRelease data={data.filter((item) => item.top)} />
        <div className="wrapper">
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
