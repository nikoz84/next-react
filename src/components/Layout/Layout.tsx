import Footer from './Footer'
import { ReactNode } from 'react'
import Nav from '@/src/components/Layout/Nav'
import Link from 'next/link'
import Image from 'next/image'
interface IProps {
    children: ReactNode
}

const Layout = ({ children }: IProps) => {
    return (
        <>
            <div className="drawer drawer-mobile">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col h-screen justify-between">
                    <header className="p-2 flex justify-between">
                        <Link href={`/`}>
                            <Image
                                priority
                                style={{ height: '63px', width: '190px'}}
                                src={`/logo.svg`}
                                alt="logo"
                                width={`190`}
                                height={`63`}
                            ></Image>
                        </Link>
                        <label
                            htmlFor="my-drawer-2"
                            className="btn btn-primary drawer-button lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-5 h-5 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </header>
                    <main className="mb-auto flex-grow">{children}</main>
                    <Footer />
                </div>

                <Nav></Nav>
            </div>
        </>
    )
}

export default Layout
