import Title from '@/src/components/Title'
import { AppProps } from 'next/app'
import Link from 'next/link'

export default function PageStatic(props: AppProps) {
    return (
        <main className="p-10">
            <article>
                <h1 className={`text-3xl font-bold text-gray-900`}>
                    Auth Static
                </h1>
                <Title asTag="h2">Título</Title>
                <pre>{JSON.stringify(props, null, 2)}</pre>
            </article>
            <Link href="/">Go to home page</Link>
        </main>
    )
}
