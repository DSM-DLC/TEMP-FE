import { Human } from "@/assets/Human"
import { Nav } from "@/components/nav/nav"
import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { useState } from "react"
import { Input } from "@/components/common/input/Input"
import { useAdminPasswordMutation } from "@/apis/admin"

export const Profile = () => {
    const router = useRouter()
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const handlePasswordChange = () => {
        // 비밀번호 변경 로직...
        closeModal()
    }

    return (
        <Container>
            <Nav account="Admin" />
            <TitleBoxContainer>
                <CreateTitleBox>관리자 프로필</CreateTitleBox>
                <CreateBox>
                    <CreateTextBoxGroup>
                        <CreateTextBox>
                            <ProfileIcon>
                                <Human />
                            </ProfileIcon>
                        </CreateTextBox>
                        <CreateTextBox>
                            <NameBox>아이디</NameBox>
                            <PasswordBox>비밀번호</PasswordBox>
                            <button onClick={openModal}>비밀번호 변경</button>
                            {showModal && (
                                <ChangePasswordModal
                                    closeModal={closeModal}
                                    handlePasswordChange={handlePasswordChange}
                                />
                            )}
                        </CreateTextBox>

                        <UploadButton onClick={() => router.push("/admin/editProfile")}>
                            프로필 수정하기
                        </UploadButton>
                    </CreateTextBoxGroup>
                </CreateBox>
            </TitleBoxContainer>
        </Container>
    )
}

const ChangePasswordModal = ({ closeModal, handlePasswordChange }) => {
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [values, setValues] = useState({
        id: "",
        pass: "",
        showPassword: false,
    })

    return (
        <Modal>
            <ModalPage>
                <ModalTitleBox>
                    <TitleNameBox>비밀번호를 변경해주세요</TitleNameBox>
                    <SubTitleBox>기존 비밀번호와 변경할 비밀번호를 입력하세요.</SubTitleBox>
                </ModalTitleBox>
                <NewPassBox>
                    <Input
                        type={values.showPassword ? "text" : "password"}
                        label="기존 비밀번호"
                        border="none"
                        backgroundColor="#e0e0e0"
                        width="540px"
                        placeholder="기존 비밀번호를 입력하세요."
                        margin="20px 0 0 0"
                        value={values.pass}
                        onChange={Pass => {
                            setValues({ ...values, pass: Pass.target.value })
                        }}
                    />
                </NewPassBox>
                <NewPassBox>
                    <Input
                        type={values.showPassword ? "text" : "password"}
                        label="변경할 비밀번호"
                        border="none"
                        backgroundColor="#e0e0e0"
                        width="540px"
                        placeholder="변경할 비밀번호를 입력하세요."
                        margin="20px 0 0 0"
                        value={values.pass}
                        onChange={Pass => {
                            setValues({ ...values, pass: Pass.target.value })
                        }}
                    />
                </NewPassBox>
                <NewPassBox>
                    <Input
                        type={values.showPassword ? "text" : "password"}
                        label="비밀번호 확인"
                        border="none"
                        backgroundColor="#e0e0e0"
                        width="540px"
                        placeholder="다시 한번 입력해세요."
                        margin="20px 0 0 0"
                        value={values.pass}
                        onChange={Pass => {
                            setValues({ ...values, pass: Pass.target.value })
                        }}
                    />
                </NewPassBox>
                <BtnBox>
                    <CheckButton>확인</CheckButton>
                    <CancelButton>취소</CancelButton>
                </BtnBox>
            </ModalPage>
        </Modal>
    )
}

export default Profile

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
`

const PasswordBox = styled.div`
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
    margin-top: 60px;
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

const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1000;
`

const ModalPage = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 600px;
    min-height: 600px;
    width: 600px;
    height: 600px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 10px;
    padding: 30px;
`
const ModalTitleBox = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 40px;
`

const TitleNameBox = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    padding-bottom: 10px;
    color: ${({ theme }) => theme.color.black};
`

const SubTitleBox = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: ${({ theme }) => theme.color.gray500};
`

const NewPassBox = styled.div`
    width: auto;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`

const CheckButton = styled.button`
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

const BtnBox = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 30px;
`
