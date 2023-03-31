import Link from 'next/link'
import { Lobster } from 'next/font/google'

const lobster = Lobster({
    weight: '400',
    display: 'swap',
    subsets: ['latin']
})

export default function Nav() {
    return (
        <nav className={`${lobster.className} bg-light-blue-900 text-stroke-cool-gray-200 flex justify-center`}>
            <Link href={'/'}>
                <b>
                    Home
                </b>
            </Link>
            <Link href={'/about/'} className="underline">
                Sobre
            </Link>
            <Link href={'/faq/'} className="underline">
                FAQ
            </Link>
            <Link href={'/login/'} className="underline">
                Login
            </Link>
        </nav>
    )
}
