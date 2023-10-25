import { useRouter } from "next/router"
import { useMutation } from "@tanstack/react-query"
import { UserParamType, UserReponseType } from "./type"
import axios from "axios"
import { customCookie } from "@/libs/cookie/cookie"

export const useSigninMutation = () => {
    const router = useRouter()

    return useMutation(
        async (params: UserParamType) =>
            axios.post<UserReponseType>(`/`, {
                ...params,
            }),
        {
            onError: () => {
                console.log("login error")
            },
            onSuccess: res => {
                const { access_token, refresh_token, access_expires, refresh_expires, role } =
                    res.data
                console.log(router.pathname.split("/")[2])
                if (role !== router.pathname.split("/")[2]) {
                    console.log("권한 없음 돌아가")
                } else {
                    customCookie.set.token(
                        access_token,
                        refresh_token,
                        access_expires,
                        refresh_expires,
                    )
                    router.push("/dashboard")
                }
            },
        },
    )
}
