import { useRouter } from "next/router"
import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { IAuthorization } from "../type"
import { IUserLoginParam, IUserPasswordParam, IUserProfile } from "./type"
import { TEMPBaseURL, userInstance } from ".."
import toast from "react-hot-toast"

export const useUserLoginMutation = () => {
    const router = useRouter()

    const response = async (param: IUserLoginParam) => {
        const { data } = await axios.post<IAuthorization>(`${TEMPBaseURL}/user/login`, param)
        return data
    }
    return useMutation(response, {
        onError: () => {
            toast.error("로그인 실패")
        },
        onSuccess: res => {
            toast.success("로그인 성공")
            const { accessToken, refreshToken } = res
            if (typeof window !== "undefined") {
                window.localStorage.setItem("accessToken", accessToken)
                window.localStorage.setItem("refreshToken", refreshToken)
            }
            router.push("/user/dashBoard")
        },
    })
}

export const useUserProfileQuery = () => {
    const response = async () => {
        const { data } = await userInstance.get<IUserProfile>(`/profile`)
        return data
    }
    return useQuery(["UserProfile"], response)
}

export const useUserProfileMutation = () => {
    const router = useRouter()
    const response = async (param: IUserProfile) => {
        const { data } = await userInstance.patch(`/profile/update`, param)
        return data
    }
    return useMutation(response, {
        onError: () => {
            toast.error("수정 실패")
        },
        onSuccess: () => {
            toast.success("수정 성공")
            router.push("/home")
        },
    })
}

export const useAdminPasswordMutation = () => {
    const response = async (param: IUserPasswordParam) => {
        const { data } = await userInstance.patch(`password`, param)
        return data
    }
    return useMutation(response, {
        onError: () => {
            toast.error("비번 변경 실패")
        },
        onSuccess: () => {
            toast.success("비번 변경 성공")
        },
    })
}
