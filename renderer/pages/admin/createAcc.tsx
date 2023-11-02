import { Input } from "@/components/common/input/Input"
import { Nav } from "@/components/nav/nav"
import styled from "@emotion/styled"
import { useState } from "react"

export const CreateAcc = () => {
    const [Naming, setNaming] = useState("")
    const [depart, setdepart] = useState("")
    const [Contact, setContact] = useState("")
    const [id, setid] = useState("")
    const [pass, setpass] = useState("")
    return (
        <Container>
            <Nav account="Admin" />
            <TitleBoxContainer>
                <CreateTitleBox>계정 발급</CreateTitleBox>
                <CreateBox>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <Input
                                label="이름"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="450px"
                                placeholder="이름을 입력해주세요"
                                margin="20px 0 0 0"
                                value={Naming}
                                onChange={Naming => {
                                    setNaming(Naming.target.value)
                                }}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                label="부서"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="450px"
                                placeholder="부서를 입력해주세요"
                                margin="20px 0 0 0"
                                value={depart}
                                onChange={e => {
                                    setdepart(e.target.value)
                                }}
                            />
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <CreatTextBox>
                        <Input
                            label="연락처"
                            border="none"
                            backgroundColor="#e0e0e0"
                            width="1050px"
                            placeholder="연락처를 입력해주세요"
                            margin="20px 0 0 0"
                            value={Contact}
                            onChange={e => {
                                setContact(e.target.value)
                            }}
                        />
                    </CreatTextBox>
                    <CreatTextBox>
                        <Input
                            label="아이디"
                            border="none"
                            backgroundColor="#e0e0e0"
                            width="1050px"
                            placeholder="아이디를 입력해주세요"
                            margin="20px 0 0 0"
                            value={id}
                            onChange={e => {
                                setid(e.target.value)
                            }}
                        />
                    </CreatTextBox>
                    <CreatTextBox>
                        <Input
                            label="비밀번호"
                            border="none"
                            backgroundColor="#e0e0e0"
                            width="1050px"
                            placeholder="비밀번호를 입력해주세요"
                            margin="20px 0 0 0"
                            value={pass}
                            onChange={e => {
                                setpass(e.target.value)
                            }}
                        />
                    </CreatTextBox>
                    <ActionBox>
                        <UploadButton>업로드</UploadButton>
                        <CancelButton>취소</CancelButton>
                    </ActionBox>
                </CreateBox>
            </TitleBoxContainer>
        </Container>
    )
}

export default CreateAcc

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const TitleBoxContainer = styled.div``

const CreateTitleBox = styled.div`
    width: 400px;
    height: 200px;
    display: flex;
    align-items: center;
    padding-left: 170px;
    font-size: 50px;
`

const CreateBox = styled.div`
    width: 1250px;
    height: 750px;
    margin-left: 170px;
    padding-top: 80px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    box-shadow: 0px 0px 8px 0.1px rgba(0, 0, 0, 0.5);
`
const CreatTextBoxGroup = styled.div`
    display: flex;
    justify-content: space-between;
`

const CreatTextBox = styled.div`
    width: auto;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`

const NameBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 30px;
    padding-left: 5px;
    justify-content: center;
    align-items: flex-start;
    border-left-style: solid;
    border-left-width: 5px;
    border-color: #3d8bfd;
    font-size: 20px;
`
const TextBox = styled.input`
    width: 450px;
    height: 35px;
    margin-top: 20px;
    padding-left: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 0;
    background-color: ${({ theme }) => theme.color.gray300};
`

const ActionBox = styled.div`
    width: auto;
    height: auto;
    flex-direction: row;
    display: flex;
    justify-content: right;
    gap: 40px;
`

const UploadButton = styled.button`
    width: 150px;
    height: 50px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blue400};
`

const CancelButton = styled.button`
    width: 150px;
    height: 50px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.gray400};
`
