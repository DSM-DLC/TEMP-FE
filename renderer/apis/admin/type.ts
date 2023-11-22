export interface IAmdinLoginParam {
    adminId: string
    password: string
}

export interface IAdminProfile {
    adminId: string
}

export interface IIssueParam {
    userId: string
    password: string
    name: string
    contact: string
    department: string
}   

export interface IAdminPasswordParam {
    password: string
    newPassword: string
    newPasswordCheck: string
}