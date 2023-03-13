import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
            type="text/css"
          />
      </Head>
      <body style={{ fontFamily: "Comfortaa, sans-serif" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
