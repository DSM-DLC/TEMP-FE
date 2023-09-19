import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"
import { css, Global } from "@emotion/react"

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
