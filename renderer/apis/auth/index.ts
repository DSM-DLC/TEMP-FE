import { useMutation } from "react-query"
import { authInstance } from ".."
import { IAuthorization } from "../type"

export const useRefreshToken = async (refreshToken: string) => {
    const response = await authInstance.put<IAuthorization>(`/refresh`, null, {
        headers: {
            "refreshToken": `${refreshToken}`,
        },
    })
    return response.data
}

export const useLogoutMutation = () => {
    const response = async (refreshToken: string) => {
        const { data } = await authInstance.delete(`/logout`, {
            headers: {
                "refreshToken": `${refreshToken}`,
            },
        })
        return data
    }
    return useMutation(response)
}