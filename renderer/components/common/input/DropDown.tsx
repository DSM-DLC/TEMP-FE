import { useEffect, useState } from "react"
import { Arrow } from "@/assets/Arrow"
import styled from "@emotion/styled"
import ReactOutSideClickHandler from "react-outside-click-handler"
import { keyframes } from "@emotion/react"

interface DropDownElementType {
    width?: string
    fullHeight?: string
    dropDownHeight?: string
    margin?: string
}

interface DropDownPropsType<T> extends DropDownElementType {
    list?: T[]
    objectKey?: string
    placeholder?: string
}

export const DropDown = <T extends string | number | object>({
    ...props
}: DropDownPropsType<T>) => {
    const [dropDown, setDropDown] = useState<boolean>(false)
    const [value, setValue] = useState<T>()

    const onClick = (e: T) => {
        setValue(e)
        setDropDown(!dropDown)
    }

    return (
        <ReactOutSideClickHandler
            display="inline-block"
            onOutsideClick={e => {
                setDropDown(false)
            }}
        >
            <DropDownInner
                height={props.fullHeight}
                width={props.width}
                onClick={e => e.preventDefault()}
            >
                <DropDownWrapper
                    dropDownHeight={props.dropDownHeight}
                    onClick={() => setDropDown(!dropDown)}
                >
                    <PlaceHolderValueInner isOpen={value && value[props.objectKey as string]}>
                        {value ? value[props.objectKey as string] : props.placeholder}
                    </PlaceHolderValueInner>
                    <Arrow direction={dropDown ? "top" : "bottom"} />
                </DropDownWrapper>
                {dropDown && (
                    <OptionWrapper>
                        {props.list.map(e => {
                            return (
                                <Option onClick={() => onClick(e)}>
                                    {props.list ? e[props.objectKey as string] : e}
                                </Option>
                            )
                        })}
                    </OptionWrapper>
                )}
            </DropDownInner>
        </ReactOutSideClickHandler>
    )
}

const DropDownInner = styled.div<{ width: string; height: string }>`
    width: ${props => props.width ?? "15vw"};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: auto;
    position: relative; /* 상대 위치 지정 */
`

const DropDownWrapper = styled.div<{ dropDownHeight: string }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: "40px 0 0 0";
    background: ${({ theme }) => theme.color.gray50};
    border-radius: 10px;
    border: 1px solid black;
    padding: 15px;
    width: 100%;
    height: ${props => props.dropDownHeight ?? "4vh"};
`

const slideDown = keyframes`
  from {
    max-height: 0;
  }
  to {
    max-height: 8vh;
  }
`
const OptionWrapper = styled.div`
    width: 100%;
    max-height: 8vh;
    overflow-y: auto;
    display: flex;
    top: 5vh;
    z-index: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1px;
    position: absolute;
    background: ${({ theme }) => theme.color.white};
    animation: ${slideDown} 0.05s ease-in-out; /* Apply the keyframes animation */
`

const PlaceHolderValueInner = styled.div<{ isOpen: string }>`
    font-family: Gmarket Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${props => (props.isOpen ? props.theme.color.black : props.theme.color.gray500)};
`

const Option = styled.div`
    width: 100%;
    height: 4vh;
    padding: 15px;
    border: 1px solid black;
    border-radius: 10px;
    font-family: Gmarket Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: ${({ theme }) => theme.color.gray50};
`
