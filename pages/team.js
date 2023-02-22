import HeadSeo from '../components/HeadSeo'
import TeamList from '../components/teamList'
import { getTeamData } from '../helpers'

export default function Team({ members }) {
  return (
    <>
      <HeadSeo
        title="Team"
        url="/team"
        desc="Team defines the organization, Meet our team who are good in each field."
      />
      <div className="sectionbody">
        <div className="wrapper">
          <h1 className="pageHeader">Team.</h1>
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
