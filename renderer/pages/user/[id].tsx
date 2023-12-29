import { Input } from "@/components/common/input/Input"
import { Nav } from "@/components/nav"
import styled from "@emotion/styled"
import { useState } from "react"
import { useRouter } from "next/router"
import { Radio } from "@/components/common/input/Radio"
import { useInfoUpdateMutation } from "@/apis/info"

export const ProfileUpdate = () => {
    const [value, setValue] = useState({
        name: "",
        birthDate: "",
        address: "",
        budgetBasis: "",
        cost: 0,
        workHour: 0,
        fourInsurance: false,
        jobType: "",
        period: "",
        issuanceDepartment: "",
        picName: "",
        picContact: "",
    })

    const router = useRouter()
    const id = router.query["id"] as string
    const { mutate: updateMutate } = useInfoUpdateMutation()

    const handleUpload = () => {
        if (value) {
            updateMutate({ id, ...value })
        }
    }
    const handleInputChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <Container>
            <Nav account="Employee" />
            <TitleBoxContainer>
                <CreateTitleBox>인적사항 수정</CreateTitleBox>
                <CreateBox>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <Input
                                name="name"
                                label="이름"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="이름을 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.name}
                                onChange={handleInputChange}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="birthDate"
                                label="생년월일"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="생년월일을 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.birthDate}
                                onChange={handleInputChange}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="address"
                                label="주소"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="주소를 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.address}
                                onChange={handleInputChange}
                            />
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <Input
                                name="budgetBasis"
                                label="사업명"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="사업명을 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.budgetBasis}
                                onChange={handleInputChange}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="cost"
                                label="총인권비 (천단위 원)"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="총인권비를 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.cost}
                                onChange={handleInputChange}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="workHour"
                                label="근로시간"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="근로시간을 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.workHour}
                                onChange={handleInputChange}
                            />
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <NameBox>사대보험 가입유무</NameBox>
                            <RadioBoxs>
                                <Radio
                                    radioId="가입"
                                    isRadioSelected={value.fourInsurance}
                                    onClick={() => setValue({ ...value, fourInsurance: true })}
                                />
                                <Radio
                                    radioId="미가입"
                                    isRadioSelected={!value.fourInsurance}
                                    onClick={() => setValue({ ...value, fourInsurance: false })}
                                />
                            </RadioBoxs>
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="jobType"
                                label="주근무일"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="주근무일을 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.jobType}
                                onChange={handleInputChange}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="period"
                                label="재직기간"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="비밀번호를 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.period}
                                onChange={handleInputChange}
                            />
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <Input
                                name="issuanceDepartment"
                                label="발급부서"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="발급부서를 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.issuanceDepartment}
                                onChange={handleInputChange}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="picName"
                                label="담당자 이름"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="담당자 이름을 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.picName}
                                onChange={handleInputChange}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="picContact"
                                label="담당자 연락처"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="담당자 연락처를 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.picContact}
                                onChange={handleInputChange}
                            />
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <ActionBox>
                        <UploadButton onClick={handleUpload}>업로드</UploadButton>
                        <CancelButton onClick={() => router.back()}>취소</CancelButton>
                    </ActionBox>
                </CreateBox>
            </TitleBoxContainer>
        </Container>
    )
}

export default ProfileUpdate

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const TitleBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 1000px;
    align-items: center;
    justify-content: space-evenly;
`

const CreateTitleBox = styled.div`
    min-width: 1250px;
    display: flex;
    align-items: center;
    font-size: 50px;
`
const CreateBox = styled.div`
    min-width: 1250px;
    padding: 60px;
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
    width: 170px;
    height: 20px;
    padding-left: 5px;
    justify-content: center;
    align-items: flex-start;
    border-left-style: solid;
    border-left-width: 5px;
    border-color: #3d8bfd;
    font-size: 17px;
`

const RadioBoxs = styled.div`
    width: 320px;
    height: auto;
    display: flex;
    justify-content: left;
    gap: 30px;
    margin-top: 15px;
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
