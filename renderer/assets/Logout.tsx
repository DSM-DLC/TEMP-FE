import styled from "@emotion/styled"

interface LogoutPropsType {
    onClick?: () => void
}

export const Logout = ({ onClick }: LogoutPropsType) => {
    return (
        <Div onClick={onClick}>
            <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_2481_277)">
                    <path
                        d="M13.3333 56C11.8667 56 10.6107 55.4773 9.56534 54.432C8.52 53.3867 7.99823 52.1316 8 50.6667V13.3333C8 11.8667 8.52267 10.6107 9.568 9.56534C10.6133 8.52 11.8684 7.99823 13.3333 8H32V13.3333H13.3333V50.6667H32V56H13.3333ZM42.6667 45.3333L39 41.4667L45.8 34.6667H24V29.3333H45.8L39 22.5333L42.6667 18.6667L56 32L42.6667 45.3333Z"
                        fill="white"
                    />
                    <path
                        d="M13.3333 56C11.8667 56 10.6107 55.4773 9.56534 54.432C8.52 53.3867 7.99823 52.1316 8 50.6667V13.3333C8 11.8667 8.52267 10.6107 9.568 9.56534C10.6133 8.52 11.8684 7.99823 13.3333 8H32V13.3333H13.3333V50.6667H32V56H13.3333ZM42.6667 45.3333L39 41.4667L45.8 34.6667H24V29.3333H45.8L39 22.5333L42.6667 18.6667L56 32L42.6667 45.3333Z"
                        fill="white"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_2481_277">
                        <rect width="64" height="64" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <Text>Logout</Text>
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Text = styled.p`
    font-size: 22px;
    color: ${({ theme }) => theme.color.white};
`
