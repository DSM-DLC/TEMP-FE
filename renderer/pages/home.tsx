import React from "react"
import Link from "next/link"
import Image from "next/image"
import backGround from "@/assets/background.png"
import { Box } from "@/components/common/box/LoginBox"
import { Button } from "@/components/common/button/Button"
import styled from "@emotion/styled"

function Home() {
    return (
        <React.Fragment>
            <BackGroundImage style={{ backgroundImage: `url(${backGround.src})` }}>
                <Box>
                    <span>로그인 유형을 선택하세요</span>
                    <Link href="/user/login">
                        <Button label="직원으로 로그인하기" />
                    </Link>
                    <Link href="/admin/login">
                        <Button label="어드민으로 로그인하기" />
                    </Link>
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
