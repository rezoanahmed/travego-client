import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import { FiLogOut } from "react-icons/fi"

const Navbar = () => {

    // dark mode
    const darkMode = () => {
        return document.querySelector("html").attributes['class'].value = "dark";
    }
    const lightMode = () => {
        return document.querySelector("html").attributes['class'].value = "light";
    }



    const { user, logout } = useAuth();
    const handleLogout = () => {
        logout()

    }
    const links = <>
        <NavLink to='/' className="font-semibold text-gray-600 hover:text-travego sm:py-6 dark:text-blue-500">Home</NavLink>
        <NavLink to='/services' className="font-semibold text-gray-600 hover:text-travego sm:py-6 dark:text-blue-500">Services</NavLink>

        <NavLink to='/about' className="font-semibold text-gray-600 hover:text-travego sm:py-6 dark:text-blue-500">About</NavLink>
        <NavLink to='/contact' className="font-semibold text-gray-600 hover:text-travego sm:py-6 dark:text-blue-500">Contact</NavLink>

    </>

    const dashboard = <div className="flex flex-col">
        <NavLink to='/mybookings' className="font-semibold text-gray-600 hover:text-travego p-2 dark:text-blue-500">My Bookings</NavLink>
        <NavLink to='/myschedules' className="font-semibold text-gray-600 hover:text-travego p-2 dark:text-blue-500">My Schedules</NavLink>
        <NavLink to='/manage' className="font-semibold text-gray-600 hover:text-travego p-2 dark:text-blue-500">Manage Services</NavLink>
        <NavLink to='/add' className="font-semibold text-gray-600 hover:text-travego p-2 dark:text-blue-500">Add Service</NavLink>
    </div>
    return (
        <div>
            <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
                <nav className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
                    <div className="flex items-center justify-between">
                        <Link to='/'>
                            <img src="https://i.ibb.co/WxKpkfJ/travego-logo.png" className="h-[25px] md:h-[50px]" alt="travego-logo" />
                        </Link>
                        <div className="sm:hidden">
                            <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                                <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
                            {links}

                            {user ?
                                <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                                    <button type="button" className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 ">
                                        Dashboard
                                        <svg className="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                                        </svg>
                                    </button>

                                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
                                        {dashboard}
                                    </div>
                                </div>
                                :
                                <></>
                            }

                            <div>
                                {
                                    user ?
                                        <div className="flex justify-center items-center gap-2">
                                            <div className="flex-shrink-0 group block">
                                                <div className="flex items-center">
                                                    <img className="inline-block flex-shrink-0 h-[3rem] w-[3rem] rounded-full" src={user.photoURL} />
                                                    <div className="ml-3">
                                                        <h3 className="font-semibold text-gray-800 dark:text-white">{user.displayName}</h3>
                                                        <p className="text-xs text-gray-400">{user.email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <FiLogOut onClick={handleLogout} className="text-2xl" title="Log Out"></FiLogOut>

                                        </div>
                                        :
                                        <Link to='/login' className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-travego sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" href="#">
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                            </svg>
                                            Log in
                                        </Link>
                                }
                            </div>
                            <div>
                                
                                    <button onClick={()=>darkMode()} type="button" className="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" data-hs-theme-click-value="dark">
                                        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                                    </button>
                                    <button onClick={()=>lightMode()} type="button" className="hs-dark-mode-active:block hidden hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" data-hs-theme-click-value="light">
                                        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 8a2 2 0 1 0 4 4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                                    </button>
                               
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;