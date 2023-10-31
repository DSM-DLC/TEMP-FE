import { Nav } from "@/components/nav/nav"
import styled from "@emotion/styled"
import { useState } from "react"

export const CreateAcc = () => {
    return (
        <Container>
            <Nav account="Admin" />
            <CreateTitleBox>계정 발급</CreateTitleBox>
        </Container>
    )
}

export default CreateAcc

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const CreateTitleBox = styled.div`
    width: 250px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
    font-size: 40px;
`
