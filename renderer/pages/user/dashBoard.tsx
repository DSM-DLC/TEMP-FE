import { ChangeEvent, useEffect, useState } from "react"
import styled from "@emotion/styled"
import { Nav } from "@/components/nav"
import { Input } from "@/components/common/input/Input"
import { Search } from "@/assets/Search"
import { Paginations } from "@/components/pagination"
import { dayFormat } from "@/libs/utils/dayFormat"
import { useInfoListMutation } from "@/apis/info"
import { useRouter } from "next/router"

export const DashBoard = () => {
    const router = useRouter()

    const [page, setPage] = useState<number>(1)
    const [name, setName] = useState<string>("")
    const [birthDate, setBirthDate] = useState<string>("")
    const handleChange = (_event: ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

    const { data: info, mutate: pageInfoMutation } = useInfoListMutation()

    const onClickSearch = () => {
        pageInfoMutation({ page: page - 1, birthDate, name })
    }

    useEffect(() => {
        pageInfoMutation({ page: page - 1, birthDate, name })
    }, [page])

    return (
        <DashBoardInner>
            <DashBoardWrapper>
                <Nav account="Employee" />
                <SectionInner>
                    <SectionWrapper>
                        <title>기간제 인력 정보</title>
                        <InputBoxInner>
                            <InputBoxWrapper>
                                <Input
                                    placeholder="이름을 입력해주세요"
                                    margin="0"
                                    value={name}
                                    onChange={e => {
                                        setName(e.target.value)
                                    }}
                                />
                                <Input
                                    type="date"
                                    margin="0"
                                    value={birthDate}
                                    onChange={e => {
                                        setBirthDate(e.target.value)
                                    }}
                                />
                                <Search onClick={onClickSearch} />
                            </InputBoxWrapper>
                        </InputBoxInner>
                        <ResultWrapper>
                            <ResultCard>
                                <Name>이름</Name>
                                <Date>생년월일</Date>
                                <Add>주소</Add>
                            </ResultCard>
                            {info &&
                                info.contents?.map(e => (
                                    <ResultCard
                                        key={e.id}
                                        onClick={() => router.push("/user/workforce_profile")}
                                    >
                                        <Name>{e.name}</Name>
                                        <Date>{dayFormat(e.birthDate)}</Date>
                                        <Add>{e.address}</Add>
                                    </ResultCard>
                                ))}
                        </ResultWrapper>
                        <Paginations
                            count={info?.count ? Math.ceil(info?.count / 10) : 1}
                            page={page}
                            handleChange={handleChange}
                        />
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
    width: 100%;
    min-width: 1280px;
    height: 100vh;
    padding: 60px;
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
    width: 100%;
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
    width: 100%;
`

const Date = styled.span`
    font-size: 20px;
    width: 180px;
`

const Name = styled.span`
    font-size: 20px;
    width: 80px;
`

const Add = styled.span`
    font-size: 20px;
    width: 430px;
`

const ResultCard = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 280px;
    border-bottom: 1px solid black;
`
