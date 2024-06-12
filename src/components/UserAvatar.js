import { auth } from "../../auth"
import Image from "next/image"
import SigninButton from "./SigninButton"
 
export default async function UserAvatar() {
  const session = await auth()
 
  if (!session.user) return null
 
  return (
    <div>
      <Image src={session.user.image} width="300" height="300" />
      <p>{session.user.name}</p>
      <p>{session.user.id  }</p>
      <p>{session.user.email}</p>
      <SigninButton/>
    </div>
  )
}