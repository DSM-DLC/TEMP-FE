import Head from "next/head"
import type { AppProps } from "next/app"
import { Global, ThemeProvider } from "@emotion/react"
import { useState } from "react"
import globalStyle from "../styles/globalStyle"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { theme } from "../styles/theme"

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: 0,
                        staleTime: 1000,
                        refetchInterval: 0,
                        refetchOnWindowFocus: false,
                    },
                },
            }),
    )
    return (
        <>
            <Head>
                <title>TEMP</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Global styles={globalStyle} />
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </QueryClientProvider>
        </>
    )
}
