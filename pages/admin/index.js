import styles from '../../styles/Admin.module.css'

export default function Admin() {
  const handleDeploy = async () => {
    alert('Please build when there is important part to update!')
    const passcode = prompt('Enter the passcode?')
    if (passcode === process.env.NEXT_PUBLIC_ADMIN_KEY) {
      const data = await fetch(
        `https://api.vercel.com/v1/integrations/deploy/${process.env.NEXT_PUBLIC_DEPLOY_KEY}`
      )
      alert('Rebuild successfull')
    } else {
      alert("You are not a CWB's Developer, Go away!!!!")
    }
  }
  return (
    <div className='sectionbody'>
      <div className='wrapper'>
        <button className={styles.btnDeploy} onClick={handleDeploy}>
          Deploy Build
        </button>
      </div>
    </div>
  )
}
