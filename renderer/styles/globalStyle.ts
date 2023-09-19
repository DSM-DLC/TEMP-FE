import { css } from "@emotion/react"

export const colors = {
    white: "var(--white)",
    black: "var(--black)",
    red: "var(--red)",
    green: "var(--green)",
    gray50: "var(--gray50)",
    gray100: "var(--gray100)",
    gray200: "var(--gray200)",
    gray300: "var(--gray300)",
    gray400: "var(--gray400)",
    gray500: "var(--gray500)",
    gray600: "var(--gray600)",
    gray700: "var(--gray700)",
    gray800: "var(--gray800)",
    gray900: "var(--gray900)",
    blue50: "var(--blue50)",
    blue100: "var(--blue100)",
    blue200: "var(--blue200)",
    blue300: "var(--blue300)",
    blue400: "var(--blue400)",
    blue500: "var(--blue500)",
    blue600: "var(--blue600)",
    blue700: "var(--blue700)",
    blue800: "var(--blue800)",
    blue900: "var(--blue900)",
}

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
        --red: #e84045;
        --green: #07ed03;

        /* gray */
        --gray50: #fafafa;
        --gray100: #f5f5f5;
        --gray200: #eeeeee;
        --gray300: #e0e0e0;
        --gray400: #bdbdbd;
        --gray500: #9e9e9e;
        --gray600: #757575;
        --gray700: #616161;
        --gray800: #424242;
        --gray900: #212121;

        /* blue */
        --blue50: #ebf3ff;
        --blue100: #d0e2ff;
        --blue200: #9ec5fe;
        --blue300: #9ec5fe;
        --blue400: #3d8bfd;
        --blue500: #0d6efd;
        --blue600: #0b58ca;
        --blue700: #084298;
        --blue800: #052c65;
        --blue900: #031633;
    }
`

export default globalStyle
