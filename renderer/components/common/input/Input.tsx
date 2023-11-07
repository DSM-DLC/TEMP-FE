import { ChangeEvent, HTMLAttributes } from "react"
import styled from "@emotion/styled"

export interface InputPropsType extends HTMLAttributes<HTMLInputElement> {
    //Input 요소
    type?: "text" | "password" | "number" | "email" | "tel" | "date"
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    name?: string
    placeholder?: string
    spellCheck?: boolean

    //Input 스타일 요소
    width?: string
    height?: string
    color?: string
    margin?: string
    border?: string
    padding?: string
}

export const Input = ({ ...props }: InputPropsType) => {
    return (
        <InputInner>
            <InputBox {...props} />
        </InputInner>
    )
}

const InputInner = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const InputBox = styled.input<InputPropsType>`
    width: ${props => props.width ?? "15vw"};
    height: ${props => props.height ?? "4vh"};
    margin: ${props => props.margin ?? "10px 0 30px 0"};
    padding: ${props => props.padding ?? "15px"};
    background: ${({ theme }) => theme.color.gray50};
    border: ${props => props.border ?? "1px solid black"};
    border-radius: 10px;
    color: ${({ theme }) => theme.color.black};
    vertical-align: middle;
    font-family: "Gmarket Sans";
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &::placeholder {
        font-size: 11px;
        color: ${({ theme }) => theme.color.gray500};
    }
`
