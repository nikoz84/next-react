import '@/styles/globals.css'
import GlobalStyle from '@/src/components/GlobalStyle'
import App from 'next/app'

class TheApp extends App {
    render() {
        const { Component, pageProps, router } = this.props
        return (
            <>
                <GlobalStyle />
                <Component {...pageProps} />
            </>
        )
    }
}

export default TheApp
