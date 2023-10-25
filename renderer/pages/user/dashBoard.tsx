import React, { useEffect } from "react"
import styled from "@emotion/styled"
import { Nav } from "@/components/nav/Nav"
import { Input } from "@/components/common/input/Input"
import { Search } from "@/assets/Search"
import { useDepartment } from "@/apis/department"

const lists = [
    {
        id: "123123",
        department_name: "wewe",
    },
    {
        id: "123123",
        department_name: "wewe",
    },
    {
        id: "123123",
        department_name: "wewe",
    },
    {
        id: "123123",
        department_name: "wewe",
    },
]

export const DashBoard = () => {
    // const { data: list } = useDepartment()

    useEffect(() => {
        console.log(lists)
    }, [])

    return (
        <React.Fragment>
            <DashBoardInner>
                <DashBoardWrapper>
                    <Nav account="Employee" />
                    <SectionInner>
                        <SectionWrapper>
                            <InputBoxInner>
                                <InputBoxWrapper>
                                    <Input placeholder="이름을 입력해주세요" />
                                    <Input type="date" />
                                    <Search onClick={() => console.log("hi")} />
                                </InputBoxWrapper>
                            </InputBoxInner>
                            <ResultWrapper>
                                {lists &&
                                    lists?.map(e => (
                                        <div key={e.id}>
                                            <span>{e.department_name}</span>
                                        </div>
                                    ))}
                            </ResultWrapper>
                        </SectionWrapper>
                    </SectionInner>
                </DashBoardWrapper>
            </DashBoardInner>
        </React.Fragment>
    )
}

export default DashBoard

const DashBoardInner = styled.div`
    width: 100vh;
    height: auto;
`

const DashBoardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`

const SectionInner = styled.div`
    width: 85vw;
    padding: 32vw 
`

const SectionWrapper = styled.div``

const InputBoxInner = styled.div`
    display: flex;
`

const InputBoxWrapper = styled.div``

const ResultWrapper = styled.div``
