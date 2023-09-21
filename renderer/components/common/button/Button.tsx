import React, { HtmlHTMLAttributes } from "react"
import styled from "@emotion/styled"

interface buttonType extends HtmlHTMLAttributes<HTMLButtonElement> {
    type?: "submit" | "reset" | "button"
    onClick?: () => void
    label?: string | number
    justifyContent?: string
    width?: number
    height?: number
    margin?: string
    border?: string
    backColor?: string
    color?: string
}

export const Button = ({ label, ...props }: buttonType) => {
    return (
        <ButtonInner>
            <ButtonBox {...props}>{label}</ButtonBox>
        </ButtonInner>
    )
}

const ButtonInner = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
`

const ButtonBox = styled.button<buttonType>`
    margin: ${props => props.margin ?? "2px 2px 2px 2px"};
    padding: 15px;
    border: ${props => props.border ?? "none"};
    width: ${props => props.width ?? "15vw"};
    height: ${props => props.height ?? "4vh"};
    margin: ${props => props.margin ?? "40px 0 0 0"};
    background: ${({ theme }) => theme.color.blue50};
    border-radius: 10px;
    color: ${({ theme }) => theme.color.blue500};
    font-family: Gmarket Sans;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
