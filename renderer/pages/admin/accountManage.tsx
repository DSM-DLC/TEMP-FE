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

export const AccoundManage = () => {
  useEffect(() => {
    console.log(lists)
  }, [])

  return (
    <DashBoardInner>
      <DashBoardWrapper>
        <Nav account="Employee" />

        <Sidebar>
          {Array.from({ length: 10 }, (_, index) => (
            <SidebarItem key={index}>{`Item ${index + 1}`}</SidebarItem>
          ))}
        </Sidebar>

        <SectionInner>
          <SectionWrapper>
            <title>계정관리</title>

            <InputBoxInner>
              <InputBoxWrapper>
                <Input placeholder="이름을 입력해주세요" margin="0" />
                <Input placeholder="부서를 입력해주세요" margin="0" />
                <Search onClick={() => console.log("hi")} />
              </InputBoxWrapper>
            </InputBoxInner>
            
            <CreateBox>
              <ResultWrapper>
                <ResultCard>
                  <Id>아이디</Id>
                  <Dep>부서</Dep>
                  <Call>연락처</Call>
                </ResultCard>
                {/* 부서에는 값을 몰라서 임시로 이름 넣어둠 */}
                {lists &&
                  lists?.map((e, index) => (
                    <ResultCard key={index}>
                      <Id>{e.id}</Id>
                      <Dep>{e.name}</Dep>
                      <Call>010-1234-1234</Call>
                    </ResultCard>
                  ))}
              </ResultWrapper>
            </CreateBox>
          </SectionWrapper>
        </SectionInner>
      </DashBoardWrapper>
    </DashBoardInner>
  )
}

export default AccoundManage

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
    gap: 30px;
    align-items: center;
    width: 100%;
    height: 100%;
`

const InputBoxInner = styled.div`
    width: 1000px;
    height: 100px;
    border-radius: 25px;
    background: ${({ theme }) => theme.color.blue50};
    margin-left: 100px;
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

const Id = styled.span`
    font-size: 20px;
    width: 200px;
`

const Dep = styled.span`
    font-size: 20px;
    width: 80px;
`

const Call = styled.span`
    font-size: 20px;
    width: auto;
`

const ResultCard = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: calc(19vw - 20px);
    border-bottom: 1px solid black;
`

const CreateBox = styled.div`
    margin-left: 100px;
    width: 1000px;
    height: 720px;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    box-shadow: 1pc black;
`
// 사이드바
const Sidebar = styled.div`
  position: fixed;
  width: 100px; 
  height: 900px;
  overflow: auto;
  background-color: white;
  margin-left: 18vw;
  margin-top: 14vw;
  align-items: center;
`;

const SidebarItem = styled.div`
  height: 60px;
  border-bottom: 1px solid black;
`;