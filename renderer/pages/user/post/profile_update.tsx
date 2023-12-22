import { Input } from "@/components/common/input/Input"
import { Nav } from "@/components/nav"
import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export const ProfileUpdate = () => {
    const [value, setValue] = useState({
        name: "",
        birth: "",
        address: "",
        budget: "",
        humanrights: "",
        worktime: "",
        insurance: "",
        job: "",
        period: "",
        depart: "",
        managername: "",
        contact: "",
    })
    const [isFormComplete, setIsFormComplete] = useState(false)

    const router = useRouter()
    useEffect(() => {
        const checkFormCompletion = () => {
            const isComplete = Object.values(value).every(v => v !== "")
            setIsFormComplete(isComplete)
        }

        checkFormCompletion()
    }, [value])

    const handleUpload = () => {
        if (isFormComplete) {
            router.push("/user/workforce_profile")
        } else {
            alert("모든 항목을 입력해주세요.")
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
                                name="birth"
                                label="생년월일"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="생년월일을 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.birth}
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
                                name="budget"
                                label="예산근거"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="예산근거를 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.budget}
                                onChange={handleInputChange}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="humanrights"
                                label="총인권비"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="총인권비를 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.humanrights}
                                onChange={handleInputChange}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="worktime"
                                label="근로시간"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="근로시간을 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.worktime}
                                onChange={handleInputChange}
                            />
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <RadioBoxs>
                                <RadioBox>
                                    <Input
                                        name="insurance"
                                        label="가입"
                                        type="radio"
                                        value="yes"
                                        checked={value.insurance === "yes"}
                                        onChange={handleInputChange}
                                        width="20px"
                                        margin="0 0 0 0"
                                    />
                                </RadioBox>
                                <RadioBox>
                                    <Input
                                        name="insurance"
                                        type="radio"
                                        value="no"
                                        checked={value.insurance === "no"}
                                        onChange={handleInputChange}
                                        label="미가입"
                                        width="20px"
                                        margin="0 0 0 0"
                                    />
                                </RadioBox>
                            </RadioBoxs>
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="job"
                                label="직종"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="직종을 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.job}
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
                                name="depart"
                                label="발급부서"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="발급부서를 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.depart}
                                onChange={handleInputChange}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="managername"
                                label="담당자 이름"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="담당자 이름을 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.managername}
                                onChange={handleInputChange}
                            />
                        </CreatTextBox>
                        <CreatTextBox>
                            <Input
                                name="contact"
                                label="담당자 연락처"
                                border="none"
                                backgroundColor="#e0e0e0"
                                width="320px"
                                placeholder="담당자 연락처를 입력해주세요"
                                margin="20px 0 0 0"
                                value={value.contact}
                                onChange={handleInputChange}
                            />
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <ActionBox>
                        <UploadButton onClick={handleUpload}>업로드</UploadButton>
                        <CancelButton>취소</CancelButton>
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

const TitleBoxContainer = styled.div``

const CreateTitleBox = styled.div`
    width: 530px;
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
const RadioBoxs = styled.div`
    width: 320px;
    height: auto;
    display: flex;
    justify-content: left;
`
const RadioBox = styled.div`
    width: auto;
    height: auto;
    flex-direction: column;
    font-size: 10px;
    padding: 10px;
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
