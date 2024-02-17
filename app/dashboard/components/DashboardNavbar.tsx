"use client";

import Link from "next/link";
import { useMediaQuery } from "react-responsive";


function DashboardNavbar() {

    



  return (
    <header className="sm:h-full -mt-5 sm:mt-0">
      <nav className="h-full">
        <ul className="menu h-full flex-row sm:flex-col bg-base-200 w-56 rounded-box sm:rounded-3xl rounded-t-none">
          <li className="flex-row sm:flex-col">
            <details open>
              <summary>محصولات</summary>
              <ul>
                <li>
                  <Link href={"/dashboard/products?"}>همه محصولات</Link>
                </li>
                <li>
                  <Link href={"/dashboard/products/add"}>اضافه کردن محصول</Link>
                </li>
                <li>
                  <Link href={"/dashboard/products/remove"}>حذف کردن محصول</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
           <Link href={"/api/auth/signout"}>خروج</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default DashboardNavbar;
