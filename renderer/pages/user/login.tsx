import React from "react"
import backGround from "@/assets/background.png"
import { LoginBox } from "@/components/common/box/LoginBox"
import styled from "@emotion/styled"
import { Input } from "@/components/common/input/Input"
import { Button } from "@/components/common/button/Button"
import { Arrow } from "@/assets/Arrow"
import router from "next/router"
import { useState } from "react"
import { useSigninMutation } from "@/apis/user"
import { UserParamType } from "@/apis/type"

export const Home = () => {
    const [loginData, setLoginData] = useState<UserParamType>({
        user_id: "",
        password: "",
    })

    const { mutate: loginMutate } = useSigninMutation()

    const onClickLogin = () => {
        loginMutate(loginData)
        setLoginData({ user_id: "", password: "" })
    }

    return (
        <React.Fragment>
            <BackGroundImage style={{ backgroundImage: `url(${backGround.src})` }}>
                <LoginBox>
                    <BoxHeader>
                        <Arrow onClick={() => router.push("/home")} />
                    </BoxHeader>
                    <LabelWrapper>
                        <span>직원 로그인 페이지</span>
                        <span>Please Sign in</span>
                    </LabelWrapper>
                    <Input
                        type="text"
                        placeholder="아이디를 입력해주세요"
                        name="user_id"
                        value={loginData.user_id}
                        onChange={e =>
                            setLoginData(state => ({ ...state, [e.target.name]: e.target.value }))
                        }
                    />
                    <Input
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        name="password"
                        value={loginData.password}
                        onChange={e =>
                            setLoginData(state => ({ ...state, [e.target.name]: e.target.value }))
                        }
                    />
                    <Button
                        label="Sign in"
                        margin="10px 0 60px 0"
                        onClick={() => router.push("/user/dashBoard")}
                    />
                </LoginBox>
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
