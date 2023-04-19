import Layout from '@/src/components/Layout/Layout'
import Title from '@/src/components/Title/Title'
import Link from 'next/link'

export default function FaqPage() {
    return (
        <Layout>
            <main className="p-10">
                <article>
                    <h1 className={`text-3xl font-bold text-gray-900`}>
                        Faq page
                    </h1>
                    <Title asTag="h2">Título</Title>
                    <p>Lorem ipsum</p>
                </article>
                <Link href="/">Go to home page</Link>
            </main>
        </Layout>
    )
}
