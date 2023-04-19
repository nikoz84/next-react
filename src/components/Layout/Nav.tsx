import Link from 'next/link'
import Image from 'next/image'
import routes from '@/src/utils/routes'
import ActiveLink from '../ActiveLink/ActiveLink'

export default function Nav() {
    function openMenu() {
        console.log('open menu')
    }
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <span className="logo self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        <Image
                            src={`/logo.png`}
                            height={`50`}
                            width={`180`}
                            alt="logo image"
                        ></Image>
                    </span>
                </Link>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                    onClick={openMenu}
                >
                    <span className="sr-only">Open Menu</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {routes.map((route, index) => {
                            return (
                                <li key={index}>
                                    {
                                        <ActiveLink href={route.path}>
                                            {route.label}
                                        </ActiveLink>
                                    }
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
