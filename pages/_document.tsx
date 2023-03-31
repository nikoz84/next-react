import Nav from '@/src/components/nav'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* eslint-disable-next-line @next/next/next-script-for-ga */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-NQN7NBL045"
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                        
                          gtag('config', 'G-NQN7NBL045');

                      `,
                    }}
                ></script>
            </Head>
            <body>
                <Nav />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
