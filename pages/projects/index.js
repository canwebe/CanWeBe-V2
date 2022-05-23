import AllProjects from '../../components/allprojects'
import Featured from '../../components/featured'
import TopRelease from '../../components/topRelease'

export default function Projects() {
  return (
    <div className='wrapper sectionbody'>
      <h1 className='pageHeader'>Projects.</h1>
      <Featured />
      <TopRelease />
      <AllProjects />
    </div>
  )
}
