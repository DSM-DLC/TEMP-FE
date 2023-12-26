import styled from "@emotion/styled"

interface RadioInputType {
    radioId: string
    isRadioSelected: boolean
    onClick?: () => void
}

export const Radio = ({ radioId, isRadioSelected, onClick }: RadioInputType) => {
    return (
        <RadioContainer>
            <label>{radioId}</label>
            <input
                type="radio"
                id={radioId}
                name="repository"
                hidden
                checked={isRadioSelected}
                onChange={onClick}
            />
            <label htmlFor={radioId}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="24" height="24" fill="transparent" />
                    {isRadioSelected && <circle cx="12" cy="12" r="5" fill="#0087FF" />}
                    <circle cx="12" cy="12" r="8.5" stroke="#0087FF" />
                </svg>
            </label>
        </RadioContainer>
    )
}

const RadioContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
