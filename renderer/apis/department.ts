import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { DepartmentType } from "./type"

export const useDepartment = () => {
    const fetcher = async () => {
        const response = await axios.get<DepartmentType[]>("http://localhost:8080/department")
        return response.data
    }

    return useQuery({
        queryKey: ["department"],
        queryFn: fetcher,
    })
}
