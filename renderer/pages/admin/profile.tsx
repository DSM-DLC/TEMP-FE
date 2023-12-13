import { Human } from "@/assets/Human"
import { Nav } from "@/components/nav/nav"
import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { useState } from "react"
import { Input } from "@/components/common/input/Input"
import { useAdminPasswordMutation } from "@/apis/admin"
import { useAdminProfileQuery } from "@/apis/admin"

export const Profile = () => {
    const router = useRouter()
    const [showModal, setShowModal] = useState(false)

    const { data: adminInfo } = useAdminProfileQuery()

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const handlePasswordChange = () => {
        closeModal()
    }

    return (
        <Container>
            <Nav account="Admin" />
            <TitleBoxContainer>
                <CreateTitleBox>관리자 프로필</CreateTitleBox>
                <CreateBox>
                    <CreateTextBoxGroup>
                        <InfoContainer>
                            <CreateTextBox>
                                <ProfileIcon>
                                    <Human />
                                </ProfileIcon>
                            </CreateTextBox>
                            <CreateTextBox>
                                <InfoBox>
                                    <NameBox>아이디</NameBox>
                                    <Value>{adminInfo?.adminId}</Value>
                                </InfoBox>
                                <InfoBox>
                                    <PasswordBox>비밀번호</PasswordBox>
                                    <UploadButton onClick={openModal}>비밀번호 변경</UploadButton>
                                    {showModal && (
                                        <ChangePasswordModal
                                            closeModal={closeModal}
                                            handlePasswordChange={handlePasswordChange}
                                        />
                                    )}
                                </InfoBox>
                            </CreateTextBox>
                        </InfoContainer>
                    </CreateTextBoxGroup>
                </CreateBox>
            </TitleBoxContainer>
        </Container>
    )
}

const ChangePasswordModal = ({ closeModal, handlePasswordChange }) => {
    const { mutate: passwordMutate } = useAdminPasswordMutation()
    const [baseValues, setBaseValues] = useState({
        pass: "",
        showPassword: false,
    })

    const [changeValues, setChangeValues] = useState({
        pass: "",
        showPassword: false,
    })

    const [checkValues, setCheckValues] = useState({
        pass: "",
        showPassword: false,
    })

    const onChangePassword = () => {
        passwordMutate(
            {
                password: baseValues.pass,
                newPassword: changeValues.pass,
                newPasswordCheck: changeValues.pass,
            },
            {
                onSuccess: () => {
                    closeModal()
                    handlePasswordChange()
                },
            },
        )
    }

    return (
        <Modal>
            <ModalPage>
                <ModalTitleBox>
                    <TitleNameBox>비밀번호를 변경해주세요</TitleNameBox>
                    <SubTitleBox>기존 비밀번호와 변경할 비밀번호를 입력하세요.</SubTitleBox>
                </ModalTitleBox>
                <NewPassBox>
                    <Input
                        type={baseValues.showPassword ? "text" : "password"}
                        label="기존 비밀번호"
                        border="none"
                        backgroundColor="#e0e0e0"
                        width="540px"
                        placeholder="기존 비밀번호를 입력하세요."
                        margin="20px 0 0 0"
                        value={baseValues.pass}
                        onChange={Pass => {
                            setBaseValues({ ...baseValues, pass: Pass.target.value })
                        }}
                    />
                </NewPassBox>
                <NewPassBox>
                    <Input
                        type={changeValues.showPassword ? "text" : "password"}
                        label="변경할 비밀번호"
                        border="none"
                        backgroundColor="#e0e0e0"
                        width="540px"
                        placeholder="변경할 비밀번호를 입력하세요."
                        margin="20px 0 0 0"
                        value={changeValues.pass}
                        onChange={Pass => {
                            setChangeValues({ ...changeValues, pass: Pass.target.value })
                        }}
                    />
                </NewPassBox>
                <NewPassBox>
                    <Input
                        type={checkValues.showPassword ? "text" : "password"}
                        label="비밀번호 확인"
                        border="none"
                        backgroundColor="#e0e0e0"
                        width="540px"
                        placeholder="다시 한번 입력해세요."
                        margin="20px 0 0 0"
                        value={checkValues.pass}
                        onChange={Pass => {
                            setCheckValues({ ...checkValues, pass: Pass.target.value })
                        }}
                    />
                </NewPassBox>
                <BtnBox>
                    <CheckButton onClick={onChangePassword}>확인</CheckButton>
                    <CancelButton onClick={closeModal}>취소</CancelButton>
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

const TitleBoxContainer = styled.div`
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 1000px;
    align-items: center;
    justify-content: space-evenly;
`

const CreateTitleBox = styled.div`
    min-width: 1000px;
    display: flex;
    align-items: center;
    font-size: 50px;
`

const CreateBox = styled.div`
    width: 1000px;
    max-width: 1000px;
    padding: 60px;
    display: flex;
    flex-direction: column;
    gap: 60px;
    border-radius: 30px;
    box-shadow: 0px 0px 8px 0.1px rgba(0, 0, 0, 0.5);
`
const CreateTextBoxGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    gap: 30px;
`

const CreateTextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: 317px;
    justify-content: space-evenly;
    align-items: flex-start;
`

const NameBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 30px;
    justify-content: center;
    align-items: flex-start;
    border-left-style: solid;
    border-color: #3d8bfd;
    padding-left: 5px;
    font-size: 20px;
`

const PasswordBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 30px;
    justify-content: center;
    align-items: flex-start;
    border-left-style: solid;
    border-color: #3d8bfd;
    font-size: 20px;
    padding-left: 5px;
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

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 60px;
`

const Value = styled.span`
    font-size: 18px;
`

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
