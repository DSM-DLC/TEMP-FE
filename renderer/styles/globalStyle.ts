import { css } from "@emotion/react"

const globalStyle = css`
    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    * {
        box-sizing: border-box;
        font-family: "Noto Sans KR", sans-serif !important;
    }

    #__next {
        width: 100%;
        height: 100%;
    }
    *::-webkit-scrollbar {
        width: 8px;
    }
    *::-webkit-scrollbar-thumb {
        height: 30%;
        background: #9e9e9e;
        border-radius: 10px;
    }

    :root {
        --white: #ffffff;
        --black: #000000;

        /* gray */

        /* red */

        /* green */

        /* blue */
    }
`

export default globalStyle
