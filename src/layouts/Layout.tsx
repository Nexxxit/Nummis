import {Link, Outlet} from "react-router-dom";
import logo from "../assets/logoNummis.svg"

export default function Layout() {
    return (
        <div className={'min-h-screen w-full'}>
            <header className={'flex gap-5 items-center p-5 sm:gap-10'}>
                <img className={'size-10'} src={logo} alt={'logo'} />
                <nav>
                    <ul className={'flex items-center gap-5 text-lg'}>
                        <li className={'hover:text-[#939393]'}>
                            <Link to={'/'}>Dashboard</Link>
                        </li>
                        <li className={'hover:text-[#939393]'}>
                            <Link to={'/portfolio'}>Portfolio</Link>
                        </li>
                        <li className={'hover:text-[#939393]'}>
                            <Link to={'/projects'}>Projects</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}