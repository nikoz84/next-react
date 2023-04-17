import Nav from './Nav'
import Footer from './Footer'
import { ReactNode } from 'react'

interface IProps {
    children: ReactNode
}

const Layout = ({ children }: IProps) => {
    return (
        <>
            <Nav />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
