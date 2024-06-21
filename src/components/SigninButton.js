"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SigninButton = () => {
  const { data: session } = useSession();
  console.log('session', session)

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.email}</p>
        <p className="text-sky-600">{session.user.id}</p>
        <p className="text-sky-600">{session.user.displayName}</p>
        <p className="text-sky-600">{session.user.accessToken}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
        <Link href={"/panier"}>Panier</Link>
      </div>
    );
  }
  return (
   <Link href={"/signIn"}>Sign in</Link>
   
  );
};

export default SigninButton