import React, { HtmlHTMLAttributes } from "react"
import styled from "@emotion/styled"

interface buttonType extends HtmlHTMLAttributes<HTMLButtonElement> {
    type?: "submit" | "reset" | "button"
    onClick?: () => void
    label?: string | number
    justifyContent?: string
    width?: string
    height?: string
    margin?: string
    border?: string
    borderRadius?: string
    backColor?: string
    fontSize?: string
    padding?: string
    textAlign?: string
}

export const Button = ({ label, justifyContent, ...props }: buttonType) => {
    return (
        <ButtonInner justifyContent={justifyContent}>
            <ButtonBox {...props}>{label}</ButtonBox>
        </ButtonInner>
    )
}

const ButtonInner = styled.div<{ justifyContent?: string }>`
    width: auto;
    height: auto;
    display: flex;
    justify-content: "center";
`

const ButtonBox = styled.button<buttonType>`
    vertical-align: middle;
    padding: ${props => props.padding ?? "15px"};
    margin: ${props => props.margin ?? "40px 0 0 0"};
    border: ${props => props.border ?? "none"};
    width: ${props => props.width ?? "15vw"};
    height: ${props => props.height ?? "4vh"};
    background: ${({ theme }) => theme.color.blue400};
    border-radius: ${props => props.borderRadius ?? "10px"};
    color: ${({ theme }) => theme.color.white};
    font-family: Gmarket Sans;
    font-size: ${props => props.fontSize ?? "11px"};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: ${props => props.textAlign ?? "center"};
`
