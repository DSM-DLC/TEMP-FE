export interface IUserLoginParam {
    userId: string
    password: string
}

export interface IUserProfile {
    userId: string
    name: string
    department: string
    contact: string
}

export interface IUserPasswordParam {
    password: string
    newPassword: string
    newPasswordCheck: string
}
