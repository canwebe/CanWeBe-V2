import Head from 'next/head'
import TeamList from '../components/teamList'
import { getTeamData } from '../helpers'
import styles from '../styles/Team.module.css'

export default function Team({ boardMembers, members }) {
  return (
    <>
      <Head>
        <title>Team | CanWeBe</title>
      </Head>
      <div className='sectionbody'>
        <div className='wrapper'>
          <h1 className='pageHeader'>Team.</h1>
        </div>
        <div>
          <div className={styles.sticky}>
            <div className='wrapper'>
              <h3 className='header'>Board Members</h3>
            </div>
          </div>
          <TeamList teamData={boardMembers} />
        </div>
        <div>
          <div className={styles.sticky}>
            <div className='wrapper'>
              <h3 className='header'>Members</h3>
            </div>
          </div>
          <TeamList teamData={members} />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  let boardMembers = []
  let members = []

  try {
    boardMembers = await getTeamData('boardMember')
    members = await getTeamData()
  } catch (error) {
    console.log(error)
  }
  return {
    props: {
      boardMembers,
      members,
    },
  }
}
