import React, { useEffect } from "react"
import styled from "@emotion/styled"
import { Nav } from "@/components/nav/nav"
import { Input } from "@/components/common/input/Input"
import { Search } from "@/assets/Search"
import { useDepartment } from "@/apis/department"

const lists = [
    {
        id: "1231wefwefwg23",
        name: "박서영",
        birthDate: "2154-12-31",
        address: "대전광역시 유성구 가정북로 76",
    },
    {
        id: "1231wefwefwg23",
        name: "박서영",
        birthDate: "2154-12-31",
        address: "대전광역시 유성구 가정북로 76",
    },
    {
        id: "1231wefwefwg23",
        name: "박서영",
        birthDate: "2154-12-31",
        address: "대전광역시 유성구 가정북로 76",
    },
    {
        id: "1231wefwefwg23",
        name: "박서영",
        birthDate: "2154-12-31",
        address: "대전광역시 유성구 가정북로 76",
    },
]

export const DashBoard = () => {
    useEffect(() => {
        console.log(lists)
    }, [])

    return (
        <DashBoardInner>
            <DashBoardWrapper>
                <Nav account="Employee" />
                <SectionInner>
                    <SectionWrapper>
                        <title>기간제 인력 정보</title>
                        <InputBoxInner>
                            <InputBoxWrapper>
                                <Input placeholder="이름을 입력해주세요" margin="0" />
                                <Input type="date" margin="0" />
                                <Search onClick={() => console.log("hi")} />
                            </InputBoxWrapper>
                        </InputBoxInner>
                        <ResultWrapper>
                            <ResultCard>
                                <Name>이름</Name>
                                <Date>생년월일</Date>
                                <Add>주소</Add>
                            </ResultCard>
                            {lists &&
                                lists?.map((e, index) => (
                                    <ResultCard key={index}>
                                        <Name>{e.name}</Name>
                                        <Date>{e.birthDate}</Date>
                                        <Add>부산광역시 강서구 녹산산단382로14번가길 10~29번지</Add>
                                    </ResultCard>
                                ))}
                        </ResultWrapper>
                    </SectionWrapper>
                </SectionInner>
            </DashBoardWrapper>
        </DashBoardInner>
    )
}

export default DashBoard

const DashBoardInner = styled.div`
    width: 100vw;
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
    height: 100vh;
`

const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 60px;
    align-items: center;
    width: 100%;
    height: 100%;
`

const InputBoxInner = styled.div`
    width: calc(85vw - 60px);
    height: 100px;
    border-radius: 25px;
    background: ${({ theme }) => theme.color.blue50};
`

const InputBoxWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const ResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 660px;
`

const Date = styled.span`
    font-size: 20px;
    width: 200px;
`

const Name = styled.span`
    font-size: 20px;
    width: 80px;
`

const Add = styled.span`
    font-size: 20px;
    width: auto;
`

const ResultCard = styled.div`
    width: calc(85vw - 60px);
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: calc(19vw - 20px);
    border-bottom: 1px solid black;
`
