import Head from 'next/head'
import TeamList from '../components/teamList'
import { getTeamData } from '../helpers'

export default function Team({ members }) {
  return (
    <>
      <Head>
        <title>Team | CanWeBe</title>
      </Head>
      <div className="sectionbody">
        <div className="wrapper">
          <h1 className="pageHeader">Our Team.</h1>
          <p className="teamsectionP">
            Meet our team who are good in each field. Helen Keller - &quot;Alone
            we can do so little; together we can do so much&quot;
          </p>
        </div>
        <TeamList teamData={members} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  let members = []

  try {
    members = await getTeamData()
  } catch (error) {
    console.log(error)
  }
  return {
    props: {
      members,
    },
  }
}
