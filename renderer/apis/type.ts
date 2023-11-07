export interface UserParamType {
    user_id: string
    password: string
}

export interface UserReponseType {
    access_token: string
    refresh_token: string
    access_expires: string
    refresh_expires: string
    role: string
}

export interface DepartmentType {
    id: string
    departmentName: string
}
