import Link from "next/link"
import Navbar from "./components/Navbar"
import { getServerSession } from "next-auth"
import { authOptions } from "../app/api/auth/[...nextauth]/config";

async function MainPage() {

  const user = await getServerSession(authOptions)


  return (
    <main className="w-full h-screen">
      <Navbar />
      <section className="h-[80vh]">
        <div className="container mx-auto flex flex-col justify-center items-center p-20 gap-10 h-full">
          <h3 className="text-4xl">Welcome <span className="text-primary">{ user ? user?.user?.name: "Admin" }</span></h3>
          <Link href={user?.user ? "/dashboard":"/api/auth/signin"} className="btn btn-lg">{user?.user ? "Dashboard" : "Login"}</Link>
        </div>
      </section>
    </main>
  )
}

export default MainPage
