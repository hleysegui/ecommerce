import Image from "next/image";
import styles from "./page.module.css";
import { SignIn } from "../../components/sign-in";
import { auth } from "../../auth";

export default async function Home() {

  const session = await auth()

  if(session) {
    return(
      <p>{JSON.stringify(session.user)}</p>
    )
  }

  return (
   <SignIn />
  );
}