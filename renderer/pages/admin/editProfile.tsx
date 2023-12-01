import { Human } from "@/assets/Human"
import { Input } from "@/components/common/input/Input"
import { Nav } from "@/components/nav/nav"
import styled from "@emotion/styled"

export const EditProfile = () => {
    return (
        <Container>
            <Nav account="Admin" />
            <TitleBoxContainer>
                <CreateTitleBox>관리자 프로필 수정</CreateTitleBox>
                <CreateBox>
                    <CreateTextBoxGroup>
                        <CreateTextBox>
                            <ProfileIcon>
                                <Human />
                            </ProfileIcon>
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
                                label="비밀번호"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="250px"
                                placeholder="번경할 비밀번호를 입력해주세요"
                                margin="10px 0 10px 0"
                            />
                        </CreateTextBox>
                    </CreateTextBoxGroup>
                    <ActionBox>
                        <UploadButton>수정완료</UploadButton>
                        <UploadButton
                            style={{ backgroundColor: "#E84045" }}
                            onClick={() => history.back()}
                        >
                            취소
                        </UploadButton>
                    </ActionBox>
                </CreateBox>
            </TitleBoxContainer>
        </Container>
    )
}

export default EditProfile

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const TitleBoxContainer = styled.div``

const CreateTitleBox = styled.div`
    width: auto;
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

const ProfileIcon = styled.div`
    display: flex;
    height: 250px;
    width: 200px;
    background-color: #d9d9d9;
    border-radius: 20px;
    position: relative;
    align-items: center;
    justify-content: center;
`
