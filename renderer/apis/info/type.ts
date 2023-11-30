export interface IInfoParam {
    page: number
    name?: string
    birthDate?: string
}

export interface IInfoList {
    contents: IInfo[]
    count: number
}

export interface IInfo {
    id: string
    name: string
    birthDate: string
    address: string
}

export interface IInfoDetail {  
    name: string
    birthDate: string
    address: string
    budgetBasis: string
    cost: number
    workHour: number
    fourInsurance: boolean
    jobType: string
    period: string
    issuanceDepartment: string
    picName: string
    picContact: string
}
