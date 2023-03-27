import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="m-3 bg-light-blue-900 text-stroke-cool-gray-200">
            <Link href={'/'} className="mr-5 underline bold">
                Home
            </Link>
            <Link href={'/about/'} className="mr-5 underline">
                Sobre
            </Link>
            <Link href={'/faq/'} className="underline mr-5">
                FAQ
            </Link>
            <Link href={'/login/'} className="underline mr-5">
                Login
            </Link>
        </nav>
    )
}
