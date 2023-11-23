import styled from "@emotion/styled"
import Image from "next/image"
import logo from "@/assets/logo.svg"
import circle from "@/assets/circle.svg"

export const LoginBox = ({ children }) => {
    return (
        <BoxContainer>
            <BoxWrapper>
                <LogoDiv>
                    <Image src={logo} />
                </LogoDiv>
                <WhiteDiv>{children}</WhiteDiv>
                <CircleImage src={circle.src} width="150px" height="150px" />
            </BoxWrapper>
        </BoxContainer>
    )
}

const BoxContainer = styled.div`
    min-height: 720px;
    height: 720px;
    min-width: 540px;
    width: 1280px;
    background: ${({ theme }) => theme.color.blue400};
    border-radius: 30px;
`

const BoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
`

const CircleImage = styled.img`
    width: 12.8vw;
    height: 9.2vh;
    display: block;
    position: absolute;
    z-index: 1;
`

const WhiteDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
    gap: 60px;
    background: ${({ theme }) => theme.color.white};
    border-radius: 0px 30px 30px 0px;
`
