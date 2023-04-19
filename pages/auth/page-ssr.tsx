import Layout from '@/src/components/Layout/Layout'
import Title from '@/src/components/Title/Title'
import { tokenService } from '@/src/utils/services/Auth/tokenService'
import { AppProps } from 'next/app'
import Link from 'next/link'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

export default function PageSSR(props: AppProps) {
    return (
        <Layout>
            <main className="p-10">
                <article>
                    <h1 className={`text-3xl font-bold text-gray-900`}>
                        Auth SSR
                    </h1>
                    <Title asTag="h2">Título</Title>
                </article>
                <Link href="/">Go to home page</Link>
            </main>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
    //const session = await authService.getSession(ctx)

    return {
        props: {},
    }
}
