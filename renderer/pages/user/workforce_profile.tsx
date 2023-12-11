import { Input } from "@/components/common/input/Input"
import { Nav } from "@/components/nav"
import styled from "@emotion/styled"

export const WorkforceProfile = () => {
    return (
        <Container>
            <Nav account="Employee" />
            <TitleBoxContainer>
                <CreateTitleBox>기간제 인력 정보</CreateTitleBox>
                <CreateBox>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <NameBox>이름</NameBox>
                            <TextBox>김민수</TextBox>
                        </CreatTextBox>
                        <CreatTextBox>
                            <NameBox>생년월일</NameBox>
                            <TextBox>김민수</TextBox>
                        </CreatTextBox>
                        <CreatTextBox>
                            <NameBox>주소</NameBox>
                            <TextBox>김민수</TextBox>
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <NameBox>예산근거</NameBox>
                            <TextBox>김민수</TextBox>
                        </CreatTextBox>
                        <CreatTextBox>
                            <NameBox>총인권비</NameBox>
                            <TextBox>김민수</TextBox>
                        </CreatTextBox>
                        <CreatTextBox>
                            <NameBox>근로시간</NameBox>
                            <TextBox>김민수</TextBox>
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <NameBox>사대보험 가입유무</NameBox>
                            <RadioBoxs>
                                <RadioBox>
                                    <Input
                                        label="가입"
                                        type="radio"
                                        name="radioGroup"
                                        value="option1"
                                        width="20px"
                                        margin="0 0 0 0"
                                    />
                                </RadioBox>
                                <RadioBox>
                                    <Input
                                        label="미가입"
                                        type="radio"
                                        name="radioGroup"
                                        value="option2"
                                        width="20px"
                                        margin="0 0 0 0"
                                    />
                                </RadioBox>
                            </RadioBoxs>
                        </CreatTextBox>
                        <CreatTextBox>
                            <NameBox>직종</NameBox>
                            <TextBox>김민수</TextBox>
                        </CreatTextBox>
                        <CreatTextBox>
                            <NameBox>재직기간</NameBox>
                            <TextBox>김민수</TextBox>
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <CreatTextBoxGroup>
                        <CreatTextBox>
                            <NameBox>발급부서</NameBox>
                            <TextBox>김민수</TextBox>
                        </CreatTextBox>
                        <CreatTextBox>
                            <NameBox>담당자 이름</NameBox>
                            <TextBox>김민수</TextBox>
                        </CreatTextBox>
                        <CreatTextBox>
                            <NameBox>담당자 연락처</NameBox>
                            <TextBox>김민수</TextBox>
                        </CreatTextBox>
                    </CreatTextBoxGroup>
                    <CreatTextBox>
                        <NameBox>문서 저장하기</NameBox>
                        <SaveButton>다운로드</SaveButton>
                    </CreatTextBox>
                    <ActionBox>
                        <UpdateButton>수정하기</UpdateButton>
                        <DeleteButton>삭제하기</DeleteButton>
                    </ActionBox>
                </CreateBox>
            </TitleBoxContainer>
        </Container>
    )
}

export default WorkforceProfile

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const TitleBoxContainer = styled.div``

const CreateTitleBox = styled.div`
    width: 535px;
    height: 180px;
    display: flex;
    align-items: center;
    padding-left: 170px;
    font-size: 50px;
`
const CreateBox = styled.div`
    width: 1250px;
    height: 825px;
    margin-left: 170px;
    padding-top: 50px;
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
    margin-bottom: 40px;
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
const TextBox = styled.div`
    width: 320px;
    height: 41px;
    font-family: "Gmarket Sans";
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    margin: 20px 0 12px 0;
    margin-top: 20px;
    padding-left: 10px;
    justify-content: columns;
    align-items: center;
    display: flex;
    border-radius: 10px;
    border: 0;
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.gray400};
    vertical-align: middle;
    line-height: normal;
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
const UpdateButton = styled.button`
    width: 150px;
    height: 50px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blue400};
`
const SaveButton = styled.button`
    width: 150px;
    height: 50px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blue400};
    margin: 20px 0 12px 0;
    margin-top: 20px;
    padding-left: 10px;
`
const DeleteButton = styled.button`
    width: 150px;
    height: 50px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.red};
`
