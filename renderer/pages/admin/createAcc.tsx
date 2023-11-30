import { useAdminIssueMutation } from "@/apis/admin"
import { IIssueParam } from "@/apis/admin/type"
import { useDepartmentQuery } from "@/apis/department"
import { Visibilty } from "@/assets/Visibilty"
import { DropDown } from "@/components/common/input/DropDown"
import { Input } from "@/components/common/input/Input"
import { Nav } from "@/components/nav"
import styled from "@emotion/styled"
import { useState } from "react"

export const CreateAcc = () => {
    const { data: depart } = useDepartmentQuery()
    const { mutate: CreateAccoutMutation } = useAdminIssueMutation()

    const [showPassword, setShowPassword] = useState(false)
    const [values, setValues] = useState<IIssueParam>({
        name: "",
        department: "",
        contact: "",
        userId: "",
        password: "",
    })

    const TouchUploadClick = () => {
        if (
            values.name &&
            values.department &&
            values.contact &&
            values.userId &&
            values.password
        ) {
            CreateAccoutMutation(values)
        }
    }
    const ResetInputs = () => {
        setValues({
            name: "",
            department: "",
            contact: "",
            userId: "",
            password: "",
        })
    }

    return (
        <Container>
            <Nav account="Admin" />
            <SectionContainer>
                <CreateTitleBox>계정 발급</CreateTitleBox>
                <CreateBox>
                    <CreatTextBoxGroup>
                        <Input
                            label="이름"
                            name="naming"
                            border="none"
                            backgroundColor="#e0e0e0"
                            width="450px"
                            placeholder="이름을 입력해주세요"
                            value={values.name}
                            onChange={name => {
                                setValues({ ...values, name: name.target.value })
                            }}
                        />
                        <DropDown
                            value={values.department}
                            onClick={department => {
                                setValues({ ...values, department: department })
                            }}
                            list={depart}
                            objectKey="departmentName"
                            label="부서"
                            placeholder="부서를 선택해주세요"
                        />
                    </CreatTextBoxGroup>
                    <Input
                        label="연락처"
                        border="none"
                        backgroundColor="#e0e0e0"
                        width="100%"
                        placeholder="연락처를 입력해주세요"
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
                    <Input
                        label="아이디"
                        border="none"
                        backgroundColor="#e0e0e0"
                        width="100%"
                        placeholder="아이디를 입력해주세요"
                        value={values.userId}
                        onChange={Id => {
                            setValues({ ...values, userId: Id.target.value })
                        }}
                    />
                    <InputWrapper>
                        <Input
                            type={showPassword ? "text" : "password"}
                            label="비밀번호"
                            border="none"
                            backgroundColor="#e0e0e0"
                            width="100%"
                            placeholder="비밀번호를 입력해주세요"
                            margin="0"
                            value={values.password}
                            onChange={Pass => {
                                setValues({ ...values, password: Pass.target.value })
                            }}
                        />
                        <ShowPasswordButton onClick={() => setShowPassword(!showPassword)}>
                            <Visibilty show={showPassword} />
                        </ShowPasswordButton>
                    </InputWrapper>
                    <ActionBox>
                        <UploadButton onClick={TouchUploadClick}>업로드</UploadButton>
                        <CancelButton onClick={ResetInputs}>초기화</CancelButton>
                    </ActionBox>
                </CreateBox>
            </SectionContainer>
        </Container>
    )
}

export default CreateAcc

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const SectionContainer = styled.div`
    padding: 60px;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 1280px;
    align-items: flex-start;
    justify-content: space-evenly;
`

const CreateTitleBox = styled.div`
    display: flex;
    align-items: center;
    font-size: 50px;
`

const CreateBox = styled.div`
    width: 100%;
    padding: 60px;
    display: flex;
    flex-direction: column;
    gap: 60px;
    border-radius: 30px;
    box-shadow: 0px 0px 8px 0.1px rgba(0, 0, 0, 0.5);
`
const CreatTextBoxGroup = styled.div`
    display: flex;
    justify-content: space-between;
`

const InputWrapper = styled.div`
    width: 100%;
    position: relative;
`

const ShowPasswordButton = styled.button`
    position: absolute;
    border: none;
    background: none;
    right: 10px;
    top: 67px;
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
