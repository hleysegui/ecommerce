import Image from "next/image";
import styles from "./page.module.css";
import { auth } from "../../auth";
import SigninButton from "@/components/SigninButton";

export default async function Home() {

  return (
    <SigninButton/>
  )
}