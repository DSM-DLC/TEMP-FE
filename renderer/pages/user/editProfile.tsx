import { Visibilty } from "@/assets/Visibilty"
import { Input } from "@/components/common/input/Input"
import { Nav } from "@/components/nav/nav"
import styled from "@emotion/styled"
import { useState } from "react"
import { toast, Toaster } from "react-hot-toast"

export const Profile = () => {


  return (
    <Container>
      <Nav account="Employee" />
      <TitleBoxContainer>
        <CreateTitleBox>프로필 수정</CreateTitleBox>
        <CreateBox>
          <CreateTextBoxGroup>
            <CreateTextBox>
              <ProfileIcon>대충 여기 사람 로고 들어감</ProfileIcon>
            </CreateTextBox>
            <CreateTextBox>
              <Input
                label="아이디"
                border="none"
                backgroundColor="#e0e0e0"
                width="250px"
                placeholder="번경할 아이디를 입력해주세요"
                margin="10px 0 10px 0"
              />
              <Input
                label="이름"
                border="none"
                backgroundColor="#e0e0e0"
                width="250px"
                placeholder="번경할 이름을 입력해주세요"
                margin="10px 0 10px 0"
              />
              <Input
                label="소속부서"
                border="none"
                backgroundColor="#e0e0e0"
                width="250px"
                placeholder="번경할 소속부서를 입력해주세요"
                margin="10px 0 10px 0"
              />
            </CreateTextBox>
            <CreateTextBox>
            <Input
                label="연락처"
                border="none"
                backgroundColor="#e0e0e0"
                width="250px"
                placeholder="번경할 연락처를 입력해주세요"
                margin="10px 0 10px 0"
              />
            </CreateTextBox>
          </CreateTextBoxGroup>
          <ActionBox>
            <UploadButton>수정완료</UploadButton>
            <UploadButton style={{backgroundColor:"#E84045"}}>취소</UploadButton>
          </ActionBox>
        </CreateBox >

      </TitleBoxContainer >
    </Container >
  )
}

export default Profile

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const TitleBoxContainer = styled.div``

const CreateTitleBox = styled.div`
    width: 450px;
    height: 200px;
    display: flex;
    align-items: center;
    padding-left: 170px;
    font-size: 50px;
`

const CreateBox = styled.div`
    width: 1000px;
    height: 450px;
    margin-left: 170px;
    padding-top: 80px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    box-shadow: 0px 0px 8px 0.1px rgba(0, 0, 0, 0.5);
`
const CreateTextBoxGroup = styled.div`
    display: flex;
`

const CreateTextBox = styled.div`
    width: auto;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
`

const InputWrapper = styled.div`
    position: relative;
`

const ShowPasswordButton = styled.button`
    position: absolute;
    border: none;
    background: none;
    right: 10px;
    top: 72px;
    transform: translateY(-50%);
    z-index: 10;
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
    margin-right: 80px;
    margin-bottom: 60px;
`

// const TextBox = styled.input`
//     width: 450px;
//     height: 35px;
//     margin-top: 20px;
//     padding-left: 10px;
//     justify-content: center;
//     align-items: center;
//     border-radius: 5px;
//     border: 0;
//     background-color: ${({ theme }) => theme.color.gray300};
// `

const ActionBox = styled.div`
    margin-top: 20px;
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
    font-size: 15px;
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

const ProfileIcon = styled.div`
  height: 250px;
  width: 200px;
  background-color: #d9d9d9;
  border-radius: 20px;
  position: relative;
  text-align: center;
`



