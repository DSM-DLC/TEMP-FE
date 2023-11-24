import { Nav } from "@/components/nav/Nav"
import styled from "@emotion/styled"

export const Profile = () => {
    return (
        <Container>
            <Nav account="Admin" />
            <TitleBoxContainer>
                <CreateTitleBox>관리자 프로필</CreateTitleBox>
                <CreateBox>
                    <CreateTextBoxGroup>
                        <CreateTextBox>
                            <ProfileIcon>대충 여기 사람 로고 들어감</ProfileIcon>
                        </CreateTextBox>
                        <CreateTextBox>
                            <NameBox>아이디</NameBox>
                        </CreateTextBox>
                        <UploadButton>프로필 수정하기</UploadButton>
                    </CreateTextBoxGroup>
                </CreateBox>
            </TitleBoxContainer>
        </Container>
    )
}

export default Profile

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
    margin-right: 150px;
    margin-bottom: 70px;
`

const UploadButton = styled.button`
    width: 150px;
    height: 50px;
    font-size: 15px;
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blue400};
    margin-top: 250px;
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
