import { Nav } from "@/components/nav/nav"
import styled from "@emotion/styled"
import { useState } from "react"

export const CreateAcc = () => {
    return (
        <Container>
            <Nav account="Admin" />
            <TitleBoxContainer>
                <CreateTitleBox>계정 발급</CreateTitleBox>
                <CreateBox>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <NameBox>이름</NameBox>
                            <TextBox placeholder="이름을 입력해주세요"></TextBox>
                        </CreatTextBox>
                        <CreatTextBox>
                            <NameBox>부서</NameBox>
                            <TextBox placeholder="부서를 선택해주세요"></TextBox>
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <CreatTextBox>
                        <NameBox>연락처</NameBox>
                        <TextBox placeholder="연락처를 입력해주세요"></TextBox>
                    </CreatTextBox>
                    <CreatTextBox>
                        <NameBox>아이디</NameBox>
                        <TextBox placeholder="아이디를 입력해주세요"></TextBox>
                    </CreatTextBox>
                    <CreatTextBox>
                        <NameBox>비밀번호</NameBox>
                        <TextBox placeholder="비밀번호를 입력해주세요"></TextBox>
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
`

const CreatTextBox = styled.div`
    width: auto;
    height: auto;
    justify-content: center;
    align-items: center;
    padding-right: 100px;
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
    background-color: #b5b5b5;
`

const ActionBox = styled.div`
    width: auto;
    height: auto;
    flex-direction: row;
    display: flex;
    justify-content: right;
`

const UploadButton = styled.button`
    width: 150px;
    height: 50px;
    font-size: 20px;
    border-radius: 5px;
    background-color: blue;
`

const CancelButton = styled.button`
    width: 150px;
    height: 50px;
    font-size: 20px;
    border-radius: 5px;
    background-color: gray;
`
