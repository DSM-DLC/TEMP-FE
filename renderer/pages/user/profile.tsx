import { useUserProfileQuery } from "@/apis/user"
import { Human } from "@/assets/Human"
import { Nav } from "@/components/nav"
import styled from "@emotion/styled"
import router from "next/router"

export const Profile = () => {
    const { data } = useUserProfileQuery()

    return (
        <ProfileInner>
            <Container>
                <Nav account="Employee" />
                <SectionContainer>
                    <TitleBox>프로필</TitleBox>
                    <BoxContainer>
                        <BoxWrapper>
                            <InfoContainer>
                                <ProfileIcon>
                                    <Human />
                                </ProfileIcon>
                                <InfoWrapper>
                                    <InfoBox>
                                        <NameBox>아이디</NameBox>
                                        <Value>{data?.userId}</Value>
                                    </InfoBox>
                                    <InfoBox>
                                        <NameBox>이름</NameBox>
                                        <Value>{data?.name}</Value>
                                    </InfoBox>
                                    <InfoBox>
                                        <NameBox>부서</NameBox>
                                        <Value>{data?.department}</Value>
                                    </InfoBox>
                                    <InfoBox>
                                        <NameBox>연락처</NameBox>
                                        <Value>{data?.contact}</Value>
                                    </InfoBox>
                                </InfoWrapper>
                            </InfoContainer>
                            <UpdateButton onClick={() => router.push("/user/editProfile")}>
                                프로필 수정하기
                            </UpdateButton>
                        </BoxWrapper>
                    </BoxContainer>
                </SectionContainer>
            </Container>
        </ProfileInner>
    )
}

export default Profile

const ProfileInner = styled.div`
    width: 100vw;
    height: auto;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`

const SectionContainer = styled.div`
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 1000px;
    align-items: center;
    justify-content: flex-start;
    gap: 100px;
`

const TitleBox = styled.div`
    min-width: 1000px;
    display: flex;
    align-items: center;
    font-size: 50px;
`

const Value = styled.span`
    font-size: 18px;
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
    width: 500px;
    height: 317px;
    column-gap: 60px;
    align-content: center;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const InfoContainer = styled.div`
    width: 100%;
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

const UpdateButton = styled.button`
    width: 150px;
    height: 50px;
    font-size: 15px;
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blue400};
`

const ProfileIcon = styled.div`
    height: 250px;
    width: 200px;
    background-color: #d9d9d9;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`
