import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/config";
import Image from "next/image";
import Link from "next/link";


async function Navbar() {

    const user = await getServerSession(authOptions)!
    
    

  return (
    
      <nav className="navbar p-10 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">NOORA</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
                      <div className="w-10 rounded-full">
                          {user ? (<Image src={`${user.user?.image!}`} width={40} height={40} alt="user profile" priority />):<p>??</p>}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
             {user && <li>
                <Link href={"/dashboard"}>Dashboard</Link>
              </li>}
              <li>
                          <Link href={`/api/auth/${user?.user ? "signout" : "signin"}`}>{!user?.user ? "Log In":"Log Out" }</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
