import React from "react"
import Link from "next/link"
import backGround from "@/assets/background.png"
import { Box } from "@/components/common/box/Box"
import styled from "@emotion/styled"
import { Input } from "@/components/common/input/Input"
import { Button } from "@/components/common/button/Button"
import { Arrow } from "@/assets/Arrow"
import router from "next/router"

function Home() {
    return (
        <React.Fragment>
            <BackGroundImage style={{ backgroundImage: `url(${backGround.src})` }}>
                <Box>
                    <BoxHeader>
                        <Arrow onClick={() => router.push("/home")} />
                    </BoxHeader>
                    <div>
                        <LabelWrapper>
                            <span>어드민 로그인 페이지</span>
                            <span>Please Sign in</span>
                        </LabelWrapper>
                        <div>
                            <Input type="text" placeholder="아이디를 입력해주세요" />
                            <Input type="password" placeholder="비밀번호를 입력해주세요" />
                            <Button label="Sign in" margin="10px 0 60px 0" />
                        </div>
                    </div>
                </Box>
            </BackGroundImage>
        </React.Fragment>
    )
}

//getSersideRendering Function

export default Home

const BackGroundImage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BoxHeader = styled.div`
    width: 100%;
    align-items: center;
    padding-left: 75px;
    margin-bottom: 127px;
`

const LabelWrapper = styled.div`
    margin: 10px 0 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`
