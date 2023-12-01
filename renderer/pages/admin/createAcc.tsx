import { useDepartmentQuery } from "@/apis/department"
import { Visibilty } from "@/assets/Visibilty"
import { DropDown } from "@/components/common/input/DropDown"
import { Input } from "@/components/common/input/Input"
import { Nav } from "@/components/nav/nav"
import { customCookie } from "@/libs/cookie/cookie"
import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { toast, Toaster } from "react-hot-toast"

export const CreateAcc = () => {
    const { data: depart } = useDepartmentQuery()

    useEffect(() => {
        const a = customCookie.get.access_token()
        console.log(a)
        console.log(depart)
    }, [depart])

    const [values, setValues] = useState({
        naming: "",
        depart: "",
        contact: "",
        id: "",
        pass: "",
        showPassword: false,
    })

    const TouchUploadClick = () => {
        toast.success("계정이 발급되었습니다.")
    }
    const ResetInputs = () => {
        setValues({
            naming: "",
            depart: "",
            contact: "",
            id: "",
            pass: "",
            showPassword: false,
        })
    }

    return (
        <Container>
            <Toaster position="top-right" reverseOrder={false} />
            <Nav account="Admin" />
            <TitleBoxContainer>
                <CreateTitleBox>계정 발급</CreateTitleBox>
                <CreateBox>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <Input
                                label="이름"
                                name="naming"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="450px"
                                placeholder="이름을 입력해주세요"
                                margin="20px 0 0 0"
                                value={values.naming}
                                onChange={Naming => {
                                    setValues({ ...values, naming: Naming.target.value })
                                }}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <DropDown
                                list={depart}
                                objectKey="departmentName"
                                label="부서"
                                placeholder="부서를 선택해주세요"
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
                            value={values.contact}
                            onChange={Contact => {
                                const value = Contact.target.value.replace(/[^\d]/g, "")
                                let formattedValue = ""

                                if (value.length <= 3) {
                                    formattedValue = value
                                } else if (value.length <= 7) {
                                    formattedValue = `${value.slice(0, 3)}-${value.slice(3)}`
                                } else {
                                    formattedValue = `${value.slice(0, 3)}-${value.slice(
                                        3,
                                        7,
                                    )}-${value.slice(7, 11)}`
                                }

                                setValues({ ...values, contact: formattedValue })
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
                            value={values.id}
                            onChange={Id => {
                                setValues({ ...values, id: Id.target.value })
                            }}
                        />
                    </CreatTextBox>
                    <CreatTextBox>
                        <InputWrapper>
                            <Input
                                type={values.showPassword ? "text" : "password"}
                                label="비밀번호"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="1050px"
                                placeholder="비밀번호를 입력해주세요"
                                margin="20px 0 0 0"
                                value={values.pass}
                                onChange={Pass => {
                                    setValues({ ...values, pass: Pass.target.value })
                                }}
                            />
                            <ShowPasswordButton
                                onClick={() =>
                                    setValues({ ...values, showPassword: !values.showPassword })
                                }
                            >
                                <Visibilty show={values.showPassword} />
                            </ShowPasswordButton>
                        </InputWrapper>
                    </CreatTextBox>
                    <ActionBox>
                        <UploadButton onClick={TouchUploadClick}>업로드</UploadButton>
                        <CancelButton onClick={ResetInputs}>초기화</CancelButton>
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
