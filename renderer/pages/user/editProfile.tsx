import { useUserProfileMutation } from "@/apis/user"
import { IUserProfile } from "@/apis/user/type"
import { Input } from "@/components/common/input/Input"
import { Nav } from "@/components/nav"
import styled from "@emotion/styled"
import router from "next/router"
import { useState } from "react"

export const Profile = () => {
    const [userProfile, setUserProfile] = useState<IUserProfile>({
        userId: "",
        name: "",
        department: "",
        contact: "",
    })

    const { mutate: userProfileMutate } = useUserProfileMutation()

    const onClickUserProfile = () => {
        userProfileMutate(userProfile)
        setUserProfile({ userId: "", name: "", department: "", contact: "" })
    }

    return (
        <Container>
            <Nav account="Employee" />
            <SectionContainer>
                <TitleBox>프로필 수정</TitleBox>
                <BoxContainer>
                    <BoxWrapper>
                        <InfoContainer>
                            <ProfileIcon></ProfileIcon>
                            <InfoWrapper>
                                <InfoBox>
                                    <NameBox>아이디</NameBox>
                                    <Input
                                        border="none"
                                        backgroundColor="#e0e0e0"
                                        width="250px"
                                        placeholder="번경할 아이디를 입력해주세요"
                                        value={userProfile.userId}
                                        onChange={e =>
                                            setUserProfile(state => ({
                                                ...state,
                                                [e.target.name]: e.target.value,
                                            }))
                                        }
                                    />
                                </InfoBox>
                                <InfoBox>
                                    <NameBox>이름</NameBox>
                                    <Input
                                        border="none"
                                        backgroundColor="#e0e0e0"
                                        width="250px"
                                        placeholder="번경할 아이디를 입력해주세요"
                                        value={userProfile.userId}
                                        onChange={e =>
                                            setUserProfile(state => ({
                                                ...state,
                                                [e.target.name]: e.target.value,
                                            }))
                                        }
                                    />
                                </InfoBox>
                                <InfoBox>
                                    <NameBox>소속부서</NameBox>
                                    <Input
                                        border="none"
                                        backgroundColor="#e0e0e0"
                                        width="250px"
                                        placeholder="번경할 아이디를 입력해주세요"
                                        value={userProfile.userId}
                                        onChange={e =>
                                            setUserProfile(state => ({
                                                ...state,
                                                [e.target.name]: e.target.value,
                                            }))
                                        }
                                    />
                                </InfoBox>
                                <InfoBox>
                                    <NameBox>연락처</NameBox>
                                    <Input
                                        border="none"
                                        backgroundColor="#e0e0e0"
                                        width="250px"
                                        placeholder="번경할 아이디를 입력해주세요"
                                        value={userProfile.userId}
                                        onChange={e =>
                                            setUserProfile(state => ({
                                                ...state,
                                                [e.target.name]: e.target.value,
                                            }))
                                        }
                                    />
                                </InfoBox>
                            </InfoWrapper>
                        </InfoContainer>
                        <ActionBox>
                            <UploadButton onClick={onClickUserProfile}>수정완료</UploadButton>
                            <CancelButton onClick={() => router.push("/user/profile")}>
                                취소
                            </CancelButton>
                        </ActionBox>
                    </BoxWrapper>
                </BoxContainer>
            </SectionContainer>
        </Container>
    )
}

export default Profile

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
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

const CancelButton = styled.button`
    width: 150px;
    height: 50px;
    font-size: 15px;
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.red};
`

const ProfileIcon = styled.div`
    height: 250px;
    width: 200px;
    background-color: #d9d9d9;
    border-radius: 20px;
    position: relative;
    text-align: center;
`

const InfoContainer = styled.div`
    width: 100%;
    height: 375px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

const SectionContainer = styled.div`
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 1000px;
    align-items: center;
    justify-content: space-between;
`
const TitleBox = styled.div`
    min-width: 1000px;
    display: flex;
    align-items: center;
    font-size: 50px;
`

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
const BoxContainer = styled.div`
    width: 1000px;
    max-width: 1000px;
    padding: 60px;
    display: flex;
    flex-direction: column;
    gap: 60px;
    border-radius: 30px;
    box-shadow: 0px 0px 8px 0.1px rgba(0, 0, 0, 0.5);
`

const BoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    gap: 30px;
`
const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    width: 600px;
    height: 375px;
    column-gap: 60px;
    align-content: center;
    flex-wrap: wrap;
    justify-content: flex-start;
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
