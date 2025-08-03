import {Link, Outlet} from "react-router-dom";
import logo from "../assets/logoNummis.svg"

export default function Layout() {
    return (
        <div className={'min-h-screen w-full bg-[#F8FAFC] text-[#1E293B] py-2'}>
            <header className={'flex gap-5 items-center p-5 bg-white/90 backdrop-blur-sm border-b border-[#E2E8F0] rounded-full sm:mx-5 sm:gap-10'}>
                <img className={'size-10'} src={logo} alt={'logo'} />
                <nav>
                    <ul className={'flex items-center text-sm sm:gap-5 gap-3 sm:text-lg'}>
                        <li className={'text-[#64748B] hover:text-[#1E293B]'}>
                            <Link to={'/'}>Dashboard</Link>
                        </li>
                        <li className={'text-[#64748B] hover:text-[#1E293B]'}>
                            <Link to={'/portfolio'}>Portfolio</Link>
                        </li>
                        <li className={'text-[#64748B] hover:text-[#1E293B]'}>
                            <Link to={'/projects'}>Projects</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className={'py-5 sm:px-8 px-4'}>
                <Outlet />
            </main>
        </div>
    )
}