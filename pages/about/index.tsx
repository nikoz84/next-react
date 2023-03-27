import Title from '@/src/components/Title'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <main className="p-10">
            <article>
                <h1 className={`text-3xl font-bold text-gray-900`}>
                    About page
                </h1>
                <Title asTag="h2">Título</Title>
                <p>Lorem ipsum</p>
            </article>
            <Link href="/">Go to home page</Link>
        </main>
    )
}
