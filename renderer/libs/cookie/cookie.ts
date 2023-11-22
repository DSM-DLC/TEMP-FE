import { getCookie, deleteCookie, setCookie } from "cookies-next"

export const customCookie = {
    get: {
        access_token: () => getCookie("access_token"),
        refresh_token: () => getCookie("refresh_token"),
    },
    set: {
        token: (access: string, refresh: string) => {
            const accessDate = new Date()
            accessDate.setHours(accessDate.getHours() + 1)

            const refreshDate = new Date()
            refreshDate.setDate(refreshDate.getDate() + 1)

            setCookie("access_token", access, { expires: accessDate })
            setCookie("refresh_token", refresh, { expires: refreshDate })
        },
    },
    remove: {
        access_token: () => deleteCookie("access_token"),
        refresh_token: () => deleteCookie("refresh_token"),
    },
} as const
