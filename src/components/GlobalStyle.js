import localFont from 'next/font/local'

const pressStart = localFont({
    src: '../../public/fonts/PressStart-Regular.woff2',
})

const comfortaa = localFont({
    src: [
        {
            path: '../../public/fonts/Comfortaa/static/Comfortaa-Regular.woff2',
            style: 'regular',
            weight: '400',
        },
        {
            path: '../../public/fonts/Comfortaa/static/Comfortaa-Medium.woff2',
            style: 'medium',
            weight: '500',
        },
        {
            path: '../../public/fonts/Comfortaa/static/Comfortaa-Light.woff2',
            style: 'ligth',
            weight: '200',
        },
        {
            path: '../../public/fonts/Comfortaa/static/Comfortaa-SemiBold.woff2',
            style: 'semi-bold',
            weight: '600',
        },
        {
            path: '../../public/fonts/Comfortaa/static/Comfortaa-Bold.woff2',
            style: 'bold',
            weight: '700',
        },
    ],
})

export default function GlobalStyle() {
    return (
        <style global jsx>{`
            :root {
                --font-family: ${comfortaa.style.fontFamily}, sans-serf;
                --logo: ${pressStart.style.fontFamily};
                --normal-font: 400;
                --bold-font: 700;
                --bolder-font: 900;
                --bg-color: #fcfcfc;
                --primary-color: #4756df;
                --secondary-color: #ff7235;
                --primary-shadow: #8b8eaf;
                --secondary-shadow: #a17a69;
                --bottom-margin: 0.5rem;
                --bottom-margin-2: 1rem;
                --line-height: 1.7rem;
                --transition: 0.3s;
            }
            /* Variables fin */

            html {
                scroll-behavior: smooth;
            }

            /* CSS Resets */
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            ul {
                list-style-type: none;
            }

            a {
                text-decoration: none;
                color: var(--primary-color);
            }

            a:hover {
                color: var(--secondary-color);
            }

            body {
                font-family: var(--font-family);
            }
            .logo {
                font-family: var(--logo);
            }
            .active {
                font-weight: bold;
            }
        `}</style>
    )
}
