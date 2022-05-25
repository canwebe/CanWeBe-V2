import { useRouter } from 'next/router'
export default function ProjectInfo() {
  const router = useRouter()
  return (
    <div className='wrapper sectionbody'>
      <h1 className='pageHeader'>Project Information.</h1>
      <p>On Maintainence</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  )
}
