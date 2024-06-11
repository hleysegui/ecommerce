import { signIn } from "@/../../auth"
 
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("GitHub", {redirectTo: "/dashboard"} )
      }}
    >
      <button type="submit">Login</button>
    </form>
  )
} 