import React, { useEffect } from "react"
import Link from "next/link"
import backGround from "@/assets/background.png"
import { LoginBox } from "@/components/common/box/LoginBox"
import { Button } from "@/components/common/button/Button"
import styled from "@emotion/styled"

function Home() {
    return (
        <React.Fragment>
            <BackGroundImage style={{ backgroundImage: `url(${backGround.src})` }}>
                <LoginBox>
                    <span>로그인 유형을 선택하세요</span>
                    <Link href="/user/login">
                        <Button label="직원으로 로그인하기" />
                    </Link>
                    <Link href="/admin/login">
                        <Button label="어드민으로 로그인하기" />
                    </Link>
                </LoginBox>
            </BackGroundImage>
        </React.Fragment>
    )
}

export default Home

const BackGroundImage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
