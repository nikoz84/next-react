import localFont from 'next/font/local'

const comfortaa = localFont({src: [
    { 
        path: '../../public/fonts/Comfortaa/static/Comfortaa-Regular.woff2',
        style: 'regular',
        weight: '400' 
    },
    { 
        path: '../../public/fonts/Comfortaa/static/Comfortaa-Medium.woff2',
        style: 'medium',
        weight: '500' 
    },
    { 
        path: '../../public/fonts/Comfortaa/static/Comfortaa-Light.woff2',
        style: 'ligth',
        weight: '200' 
    },
    { 
        path: '../../public/fonts/Comfortaa/static/Comfortaa-SemiBold.woff2',
        style: 'semi-bold',
        weight: '600' 
    },
    { 
        path: '../../public/fonts/Comfortaa/static/Comfortaa-Bold.woff2',
        style: 'bold',
        weight: '700' 
    }
]})


export default function GlobalStyle() {
    return (
        <style global jsx>{`
            html,
            body {
                padding: 0;
                margin: 0;
                font-family: ${comfortaa.style.fontFamily};
            }

            * {
                box-sizing: border-box;
            }
        `}</style>
    )
}
