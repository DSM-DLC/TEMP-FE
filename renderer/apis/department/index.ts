import { useQuery } from "@tanstack/react-query"
import { departInstance } from ".."
import { IDepartment } from "./type"

export const useDepartmentQuery = () => {
    const response = async () => {
        const { data } = await departInstance.get<IDepartment>(``)
        return data
    }
    return useQuery(["depart"], response)
}