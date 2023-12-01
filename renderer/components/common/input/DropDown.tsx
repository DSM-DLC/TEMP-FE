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
    label?: string
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
    const [inputValue, setInputValue] = useState<string>("")
    const [filteredOptions, setFilteredOptions] = useState<T[]>(props.list || [])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        setInputValue(inputValue)

        const filteredList =
            props.list?.filter(item =>
                props.objectKey
                    ? String(item[props.objectKey]).includes(inputValue)
                    : String(item).includes(inputValue),
            ) || []

        setFilteredOptions(filteredList)
    }

    const onClick = (e: T) => {
        setValue(e)
        setInputValue("")
        setDropDown(!dropDown)
    }

    return (
        <ReactOutSideClickHandler
            display="inline-block"
            onOutsideClick={() => {
                setDropDown(false)
            }}
        >
            {props.label && <LabelBox>{props.label}</LabelBox>}
            <DropDownInner
                height={props.fullHeight}
                width={props.width}
                onClick={e => e.preventDefault()}
            >
                <DropDownWrapper
                    dropDownHeight={props.dropDownHeight}
                    onClick={() => setDropDown(true)}
                >
                    {dropDown ? (
                        <DropDownInput
                            value={inputValue}
                            onChange={onChange}
                            placeholder="검색을 해주세요"
                        />
                    ) : (
                        <PlaceHolderValueInner
                            onClick={() => setDropDown(true)}
                            isOpen={value && value[props.objectKey as string]}
                        >
                            {value ? value[props.objectKey as string] : props.placeholder}
                        </PlaceHolderValueInner>
                    )}
                    <Arrow direction={dropDown ? "bottom" : "top"} />
                </DropDownWrapper>
                {dropDown &&
                    (inputValue.length !== 0 ? (
                        <OptionWrapper>
                            {filteredOptions.map((e, index) => (
                                <Option onClick={() => onClick(e)} key={index}>
                                    {props.objectKey ? e[props.objectKey] : e}
                                </Option>
                            ))}
                        </OptionWrapper>
                    ) : (
                        <OptionWrapper>
                            {props?.list?.map(e => {
                                return (
                                    <Option onClick={() => onClick(e)}>
                                        {props.list ? e[props.objectKey as string] : e}
                                    </Option>
                                )
                            })}
                        </OptionWrapper>
                    ))}
            </DropDownInner>
        </ReactOutSideClickHandler>
    )
}

const DropDownInner = styled.div<{ width: string; height: string }>`
    width: ${props => props.width ?? "450px"};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: auto;
    position: relative;
    margin: 20px 0 0 0;
`

const DropDownWrapper = styled.div<{ dropDownHeight: string }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #e0e0e0;
    border-radius: 5px;
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

const LabelBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 30px;
    padding-left: 5px;
    justify-content: center;
    align-items: flex-start;
    border-left-style: solid;
    border-left-width: 5px;
    border-color: #3d8bfd;
    font-size: 20px;
`

const OptionWrapper = styled.div`
    width: 100%;
    max-height: 12vh;
    overflow-y: auto;
    display: flex;
    top: 5vh;
    z-index: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1px;
    position: absolute;
    border-radius: 10px;
    background: ${({ theme }) => theme.color.white};
    animation: ${slideDown} 0.05s ease-in-out;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const PlaceHolderValueInner = styled.div<{ isOpen: string }>`
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${props => (props.isOpen ? props.theme.color.black : props.theme.color.gray500)};
`

const Option = styled.div`
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    height: 4vh;
    padding: 15px;
    background: ${({ theme }) => theme.color.gray50};
`

const DropDownInput = styled.input`
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${props => props.theme.color.black};
    background: none;
    border: none;
`
