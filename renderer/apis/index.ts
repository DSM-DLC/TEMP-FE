import axios from "axios"
import router from "next/router"
import { customCookie } from "@/libs/cookie/cookie"

const TEMPBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL

const userInstance = axios.create({
    baseURL: `${TEMPBaseURL}/user`,
})

const adminInstance = axios.create({
    baseURL: `${TEMPBaseURL}/amdin`,
})

const infoInstance = axios.create({
    baseURL: `${TEMPBaseURL}/info`,
})

const instanceArr = [userInstance, adminInstance, infoInstance]

instanceArr.map(instance => {
    instance.interceptors.request.use(
        config => {
            const access_token = customCookie.get.access_token
            access_token && (config.headers!["Authorization"] = `Bearer ${access_token}`)
            return config
        },
        error => {
            return Promise.reject(error)
        },
    )
    instance.interceptors.response.use(
        config => {
            return Promise.reject(config)
        },
        async error => {
            if (axios.isAxiosError(error) && error.response) {
                const { config, response } = error
                if (response.status === 403) {
                    try {
                        customCookie.remove.access_token()
                        const beforeRefresh = customCookie.get.refresh_token()
                        if (!beforeRefresh) throw error

                        const response = await axios.put(
                            `${TEMPBaseURL}/auth/login`,
                            {},
                            {
                                headers: {
                                    "Refresh-Token": `Bearer ${beforeRefresh}`,
                                },
                            },
                        )

                        const { access_token, refresh_token } = response.data
                        customCookie.set.token(access_token, refresh_token, "12h", "5d")
                        if (config.headers) config.headers.Authorization = `Bearer ${access_token}`

                        return axios(config)
                    } catch (e) {
                        if (
                            error.response.data.status === 403 ||
                            error.response.data.status === 404
                        ) {
                            router.push("/")
                            customCookie.remove.access_token()
                            customCookie.remove.refresh_token()
                        }
                    }
                } else return Promise.reject(error)
            } else return Promise.reject(error)
        },
    )
})
