import axios from "axios"
import router from "next/router"
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
            const access_token =
                typeof window !== "undefined" && window.localStorage.getItem("accessToken")
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
                        typeof window !== "undefined" &&
                            window.localStorage.removeItem("accessToken")
                        const beforeRefresh =
                            typeof window !== "undefined" &&
                            window.localStorage.getItem("refreshToken")
                        if (!beforeRefresh) throw error

                        const response = await axios.put<IAuthorization>(
                            `${TEMPBaseURL}/auth/refresh`,
                            {},
                            {
                                headers: {
                                    "Refresh-Token": `Bearer ${beforeRefresh}`,
                                },
                            },
                        )

                        const { accessToken, refreshToken } = response.data
                        typeof window !== "undefined" &&
                            window.localStorage.setItem("accessToken", accessToken)
                        typeof window !== "undefined" &&
                            window.localStorage.setItem("refreshToken", refreshToken)
                        if (config.headers) config.headers.Authorization = `Bearer ${accessToken}`

                        return axios(config)
                    } catch (error) {
                        if (
                            error.response.data.status === 400 ||
                            error.response.data.status === 403 ||
                            error.response.data.status === 401
                        ) {
                            router.push("/home")
                            typeof window !== "undefined" &&
                                window.localStorage.removeItem("accessToekn")
                            typeof window !== "undefined" &&
                                window.localStorage.removeItem("refreshToken")
                        }
                    }
                } else return Promise.reject(error)
            } else return Promise.reject(error)
        },
    )
})
