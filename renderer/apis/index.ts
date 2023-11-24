import axios from "axios"
import router from "next/router"
import { customCookie } from "@/libs/cookie/cookie"
import { IAuthorization } from "./type"

export const TEMPBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL

export const authInstance = axios.create({
    baseURL: `${TEMPBaseURL}/auth`,
})

export const userInstance = axios.create({
    baseURL: `${TEMPBaseURL}/user`,
})

export const adminInstance = axios.create({
    baseURL: `${TEMPBaseURL}/admin`,
})

export const infoInstance = axios.create({
    baseURL: `${TEMPBaseURL}/info`,
})

export const departInstance = axios.create({
    baseURL: `${TEMPBaseURL}/department`,
})

const instanceArr = [userInstance, adminInstance, infoInstance, departInstance, authInstance]

instanceArr.map(instance => {
    instance.interceptors.request.use(
        config => {
            const access_token = customCookie.get.access_token()
            access_token && (config.headers!["Authorization"] = `Bearer ${access_token}`)
            return config
        },
        error => {
            return Promise.reject(error)
        },
    )
    instance.interceptors.response.use(
        config => {
            return config
        },
        async error => {
            if (axios.isAxiosError(error) && error.response) {
                const { config, response } = error
                if (response.status === 403) {
                    try {
                        customCookie.remove.access_token()
                        const beforeRefresh = customCookie.get.refresh_token()
                        if (!beforeRefresh) throw error

                        const response = await axios.put<IAuthorization>(
                            `${TEMPBaseURL}/auth/refresh`,
                            {},
                            {
                                headers: {
                                    "refresh-token": `${beforeRefresh}`,
                                },
                            },
                        )

                        const { accessToken, refreshToken } = response.data
                        customCookie.set.token(accessToken, refreshToken)
                        if (config.headers) config.headers.Authorization = `Bearer ${accessToken}`

                        return axios(config)
                    } catch (error) {
                        if (
                            error.response.data.status === 400 ||
                            error.response.data.status === 403
                        ) {
                            router.push("/home")
                            customCookie.remove.access_token()
                            customCookie.remove.refresh_token()
                        }
                    }
                } else return Promise.reject(error)
            } else return Promise.reject(error)
        },
    )
})
