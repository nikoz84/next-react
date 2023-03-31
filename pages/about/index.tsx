import Title from '@/src/components/Title'
import Link from 'next/link'
import { NextPage } from 'next'

interface Props {
    userAgent?: string;
}


const AboutPage: NextPage<Props> = ({userAgent})=> {
    return (
        <main className="p-10">
            <article>
                <h1 className={`text-3xl font-bold text-gray-900`}>
                    About page
                </h1>
                <Title asTag="h2">Título</Title>
                <p>{userAgent}</p>
            </article>
            <Link href="/">Go to home page</Link>
        </main>
    )
} 

AboutPage.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
}

export default AboutPage