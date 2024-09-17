import "./global.scss"
import Head from 'next/head';

export const metadata = {

    title: "Todo",
    description: "Basic todo application.",
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                url: "/favicon-dark.ico",
                href: "/favicon-dark.ico"
            },
            {
                media: "(prefers-color-scheme: dark)",
                url: "/favicon-light.ico",
                href: "/favicon-light.ico"
            }
        ],
    },
}

export default function RootLayout({ children }) {

    return (

        <html lang="en">
            <Head>
                <title>Todo</title>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </Head>
            <body>
                { children }
            </body>
        </html>
    )
}