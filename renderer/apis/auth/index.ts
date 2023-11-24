import { useMutation } from "@tanstack/react-query"
import { authInstance } from ".."
import { useRouter } from "next/router"

export const useLogoutMutation = () => {
    const router = useRouter()
    const response = async (refreshToken: string) => {
        const { data } = await authInstance.delete(`/logout`, {
            headers: {
                "refresh-token": `${refreshToken}`,
            },
        })
        return data
    }
    return useMutation(response, {
        onSuccess: () => {
            router.push("/home")
        },
    })
}
