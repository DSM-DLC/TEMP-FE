import { useRouter } from "next/router"
import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { customCookie } from "@/libs/cookie/cookie"
import { IAuthorization } from "../type"
import { IUserLoginParam, IUserProfile } from "./type"
import { TEMPBaseURL, userInstance } from ".."

export const useUserLoginMutation = () => {
    const router = useRouter()

    const response = async (param: IUserLoginParam) => {
        const { data } = await axios.post<IAuthorization>(`${TEMPBaseURL}/user/login`, param)
        return data
    }
    return useMutation(response, {
        onError: () => {
            console.log("login error")
        },
        onSuccess: res => {
            console.log("로그인 성공")
            const { accessToken, refreshToken } = res
            customCookie.set.token(accessToken, refreshToken)
            router.push("/user/dashBoard")
        },
    })
}

export const useUserProfileQuery = () => {
    const response = async () => {
        const { data } = await userInstance.get<IUserProfile>(`/profile`)
        return data
    }
    return useQuery(['UserProfile'], response)
}

export const useUserProfileMutation = () => {
    const response = async (param: IUserProfile) => {
        const { data } = await userInstance.patch(`/profile/update`, param)
        return data
    }
    return useMutation(response, {
        onError: () => {
            console.log("수정 실패")
        },
        onSuccess: () => {
            console.log("수정 성공")
        },
    })
}