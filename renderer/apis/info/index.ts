import { useMutation, useQuery } from "@tanstack/react-query"
import { infoInstance } from ".."
import { IInfoDetail, IInfoList, IInfoParam } from "./type"

export const useInfoListMutation = () => {
    const response = async ({ page, birthDate, name }: IInfoParam) => {
        const { data } = await infoInstance.get<IInfoList>(
            `/find?page=${page}&name=${name}&birthDate=${birthDate}`,
        )
        return data
    }
    return useMutation(["InfoList"], response)
}

export const useInfoDetailQuery = (id: string) => {
    const response = async () => {
        const { data } = await infoInstance.get<IInfoDetail>(`/detail?id=${id}`)
        return data
    }
    return useQuery(["InfoDetail"], response)
}

export const useInfoDeleteMutation = () => {
    const response = async (id: string) => {
        const { data } = await infoInstance.delete(`/delete`, {
            data: {
                id: id,
            },
        })
        return data
    }
    return useMutation(response)
}

export const useInfoUploadMutation = () => {
    const response = async (param: IInfoDetail) => {
        const { data } = await infoInstance.post(`upload`, param)
        return data
    }
    return useMutation(response, {
        onError: () => {
            console.log("인적사항 업로드 성공")
        },
        onSuccess: () => {
            console.log("인적사항 업로드 실패")
        },
    })
}