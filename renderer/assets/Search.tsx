interface SearchPropsType {
    onClick?: () => void
}

export const Search = ({ onClick }: SearchPropsType) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
        >
            <path
                d="M25.732 13.382C25.7288 15.8271 25.0008 18.2164 23.6401 20.2479C22.2793 22.2794 20.3469 23.8619 18.0869 24.7954C15.827 25.7288 13.3411 25.9714 10.9433 25.4924C8.5456 25.0133 6.34369 23.8342 4.61592 22.1041C2.88814 20.3739 1.71206 18.1704 1.23633 15.772C0.760589 13.3736 1.00655 10.888 1.94313 8.62936C2.8797 6.37071 4.46483 4.44042 6.4982 3.08245C8.53156 1.72449 10.9219 0.999804 13.367 1C14.9919 1.00105 16.6007 1.32216 18.1016 1.94499C19.6024 2.56783 20.9658 3.48019 22.114 4.62998C23.2622 5.77977 24.1727 7.14446 24.7935 8.64614C25.4143 10.1478 25.7332 11.7571 25.732 13.382Z"
                stroke="black"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M31.0009 30.9993L22.1489 22.1973"
                stroke="black"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}
