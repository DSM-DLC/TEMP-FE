import styled from "@emotion/styled"

interface DirectionType {
    direction?: "left" | "top" | "right" | "bottom"
    onClick?: () => void
}

const rotateDeg = {
    left: "0deg",
    top: "90deg",
    right: "180deg",
    bottom: "270deg",
}

export const Arrow = ({ direction, onClick }: DirectionType) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.414"
            height="32.828"
            viewBox="0 0 17.414 32.828"
            direction={direction}
            onClick={onClick}
        >
            <path
                id="패스_4"
                data-name="패스 4"
                d="M484,1,469,16l15,15"
                transform="translate(-468 0.414)"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
        </Svg>
    )
}

const Svg = styled.svg<{ direction?: string }>`
    transition: 0.5s;
    transform: rotate(${({ direction }) => rotateDeg[direction]});
`
