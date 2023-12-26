import { useMutation, useQuery } from "@tanstack/react-query"
import { infoInstance } from ".."
import { IInfoDetail, IInfoDetailData, IInfoDetailParam, IInfoList, IInfoParam } from "./type"
import toast from "react-hot-toast"

export const useInfoListMutation = () => {
    const response = async ({ page, birthDate, name, sort }: IInfoParam) => {
        const { data } = await infoInstance.get<IInfoList>(`/find`, {
            params: {
                page: page,
                birthDate: birthDate,
                name: name,
                sort: sort,
            },
        })
        return data
    }
    return useMutation(["InfoList"], response)
}

export const useInfoDetailQuery = ({ name, birthDate, address, detailData }: IInfoDetailParam) => {
    const response = async () => {
        const { data } = await infoInstance.get<IInfoDetailData>(`/detail`, {
            params: {
                name: name,
                birthDate: birthDate,
                address: address,
            },
        })
        return data
    }
    return useQuery(["InfoDetail", name, birthDate, address], response, { initialData: detailData })
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
            toast.error("인적사항 업로드 실패")
        },
        onSuccess: () => {
            toast.success("인적사항 업로드 성공")
        },
    })
}

export const useInfoUpdateMutation = () => {
    const response = async (param: IInfoDetailData) => {
        const { data } = await infoInstance.patch(`update`, param)
        return data
    }

    return useMutation(response, {
        onError: () => {
            toast.error("인적사항 수정 실패")
        },
        onSuccess: () => {
            toast.success("인적사항 수정 성공")
        },
    })
}
