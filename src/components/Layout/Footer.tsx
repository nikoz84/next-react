import Link from 'next/link'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="footer p-10 bg-indigo-950 text-neutral-content">
            <div>
                <span className="footer-title">
                    <span className="mr-5">© {year}</span>
                    <Link href="/" className="hover:underline link link-accent">
                        NikozDev
                    </Link>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}
