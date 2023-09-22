import styled from "@emotion/styled"
import Image from "next/image"
import logo from "@/assets/logo.svg"
import Link from "next/link"
import { useRouter } from "next/router"
import { Button } from "@/components/common/button/Button"

interface accountType {
    account: "Admin" | "Employee"
}

const accountBool = {
    Admin: true,
    Employee: false,
}

export const Nav = ({ account }: accountType) => {
    const router = useRouter()
    return (
        <NavWrapper>
            <NavInner>
                <InfoWrapper>
                    <LogoInner>
                        <Image src={logo.src} width="32px" height="32px" />
                        <Span1>TEMP</Span1>
                    </LogoInner>
                    <InfoInner>
                        <Span2>박서영</Span2>
                        <Span2>산악협력부</Span2>
                    </InfoInner>
                </InfoWrapper>
                <LinkWrapper>
                    {accountBool[account] ? (
                        <LinkInner>
                            <LinkTabWrapper>
                                <LinkTab
                                    style={{
                                        backgroundColor:
                                            router.pathname === "/admin/manage"
                                                ? "white"
                                                : "transparent",
                                    }}
                                />
                                <Link href="/admin/manage">
                                    <Button
                                        width="calc(15vw - 5px)"
                                        label="Manage"
                                        justifyContent="flex-start"
                                        padding="0 0 0 calc(3vw - 5px) "
                                        border="none"
                                        margin="none"
                                        textAlign="left"
                                        borderRadius="0"
                                        fontSize="17px"
                                    />
                                </Link>
                            </LinkTabWrapper>
                            <LinkTabWrapper>
                                <LinkTab
                                    style={{
                                        backgroundColor:
                                            router.pathname === "/admin/createAcc"
                                                ? "white"
                                                : "transparent",
                                    }}
                                />
                                <Link href="/admin/createAcc">
                                    <Button
                                        width="calc(15vw - 5px)"
                                        label="CreateAcc"
                                        justifyContent="flex-start"
                                        padding="0 0 0 calc(3vw - 5px) "
                                        border="none"
                                        margin="none"
                                        textAlign="left"
                                        borderRadius="0"
                                        fontSize="17px"
                                    />
                                </Link>
                            </LinkTabWrapper>
                        </LinkInner>
                    ) : (
                        <LinkInner>
                            <Link href="/user/dashboard">
                                <Button
                                    label="DashBoard"
                                    margin="none"
                                    border="none"
                                    borderRadius="0"
                                    fontSize="17px"
                                />
                            </Link>
                            <Link href="/user/profile">
                                <Button
                                    label="Profile"
                                    margin="none"
                                    border="none"
                                    borderRadius="0"
                                    fontSize="17px"
                                />
                            </Link>
                        </LinkInner>
                    )}
                </LinkWrapper>
            </NavInner>
        </NavWrapper>
    )
}

const NavWrapper = styled.div`
    width: 15vw;
    height: 100vh;
    background: ${({ theme }) => theme.color.blue400};
`

const NavInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 23%;
    padding: 3vw;
    justify-content: space-between;
    align-content: flex-start;
`

const Span1 = styled.span`
    color: ${({ theme }) => theme.color.white};
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const Span2 = styled.span`
    color: ${({ theme }) => theme.color.white};
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const LogoInner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
`

const InfoInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border-left: 1px solid white;
    padding-left: 10px;
    gap: 5px;
`

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const LinkInner = styled.div``

const LinkTab = styled.div`
    width: 5px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 0px 10px 10px 0px;
`

const LinkTabWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
