/* export default function Page() {
    return <p>Dashboard Page</p>;
}
 */
import { auth } from "../../../auth"
import UserAvatar from "../../../components/UserAvatar"
 
export default function Dashboard({ session }) {
  return (
    <nav>
      <UserAvatar session={session} />
    </nav>
  )
}
 
/* export async function getServerSideProps(ctx) {
  const session = await auth(ctx)
 
  return {
    props: {
      session,
    },
  }
} */