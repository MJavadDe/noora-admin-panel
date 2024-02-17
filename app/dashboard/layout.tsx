import type { Metadata } from "next";
import DashboardNavbar from "./components/DashboardNavbar";
import './style.css'
import { Alexandria } from "next/font/google";

export const metadata: Metadata = {
    title: "Admin Panel",
    description: "...",
    robots:{index:false,follow:false}
};
  

const alexandriaFont = Alexandria({
    weight: ["300", "400"],
    subsets: ["arabic"]
})

async function DashboardLayout({children}:{children: React.ReactNode}) {
    return (
        
        <section className={`${alexandriaFont.className} container overflow-auto bg-primary mx-auto h-[90vh] mt-[5vh] rounded-3xl shadow-md shadow-gray-700 flex flex-col sm:flex-row p-5 gap-5 items-center`}>
            <DashboardNavbar />
            {children}
        </section>
    )
}

export default DashboardLayout
