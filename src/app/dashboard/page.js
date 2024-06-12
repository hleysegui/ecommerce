import { auth } from "../../../auth"
import UserAvatar from "../../components/UserAvatar"
 
export default function Dashboard({ session }) {
  return (
    <nav>
      <UserAvatar session={session} />
    </nav>
  )
}