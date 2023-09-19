import { getCookie, deleteCookie, setCookie } from "cookies-next"

export const customCookie = {
    get: {
        access_token: () => getCookie("access_token"),
        refresh_token: () => getCookie("refresh_token"),
    },
    set: {
        token: (access: string, refresh: string, accessExpires: string, refreshExpires: string) => {
            const date = new Date()
            date.setDate(date.getDate() + 5)

            setCookie("access_token", access, { expires: new Date(accessExpires) })
            setCookie("refresh_token", refresh, { expires: new Date(refreshExpires) })
        },
    },
    remove: {
        access_token: () => deleteCookie("access_token"),
        refresh_token: () => deleteCookie("refresh_token"),
    },
} as const
