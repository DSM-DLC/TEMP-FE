import styled from "@emotion/styled"
import Image from "next/image"
import logo from "@/assets/logo.svg"
import Link from "next/link"
import { useRouter } from "next/router"
import { Button } from "@/components/common/button/Button"
import { AdminNavMenu, EmployeeNavMenu } from "@/constant/Nav"
import { useUserProfileQuery } from "@/apis/user"
import { useAdminProfileQuery } from "@/apis/admin"
import { IAdminProfile } from "@/apis/admin/type"
import { IUserProfile } from "@/apis/user/type"
import { Logout } from "@/assets/Logout"
import { customCookie } from "@/libs/cookie/cookie"
import { useLogoutMutation } from "@/apis/auth"

interface accountType {
    account: "Admin" | "Employee"
}

const accountBool = {
    Admin: true,
    Employee: false,
}

export const Nav = ({ account }: accountType) => {
    const router = useRouter()

    const { mutate: LogoutMutation } = useLogoutMutation()
    const { data: profileInfo } = accountBool[account]
        ? useAdminProfileQuery()
        : useUserProfileQuery()

    const displayName = accountBool[account]
        ? (profileInfo as IAdminProfile)?.adminId
        : (profileInfo as IUserProfile)?.name

    const displayRole = accountBool[account] ? "관리자" : (profileInfo as IUserProfile)?.department

    const refreshToken = customCookie.get.refresh_token()

    const onLogout = () => {
        LogoutMutation(refreshToken)
    }

    return (
        <NavWrapper>
            <NavInner>
                <InfoWrapper>
                    <LogoInner>
                        <Image src={logo.src} width="32px" height="32px" />
                        <Span1>TEMP</Span1>
                    </LogoInner>
                    <InfoInner>
                        <Span2>{displayName}</Span2>
                        <Span2>{displayRole}</Span2>
                    </InfoInner>
                </InfoWrapper>
                <LinkContainer>
                    <LinkWrapper>
                        {accountBool[account]
                            ? AdminNavMenu.map(e => {
                                  return (
                                      <LinkTabWrapper>
                                          <LinkTab
                                              style={{
                                                  backgroundColor:
                                                      router.pathname == `/admin/${e.url}`
                                                          ? "white"
                                                          : "transparent",
                                              }}
                                          />
                                          <Link href={`/admin/${e.url}`}>
                                              <Button
                                                  width="100%"
                                                  label={`${e.tab}`}
                                                  justifyContent="flex-start"
                                                  padding="0 0 0 55px "
                                                  border="none"
                                                  margin="none"
                                                  textAlign="left"
                                                  borderRadius="0"
                                                  fontSize="17px"
                                              />
                                          </Link>
                                      </LinkTabWrapper>
                                  )
                              })
                            : EmployeeNavMenu.map(e => {
                                  return (
                                      <LinkTabWrapper>
                                          <LinkTab
                                              style={{
                                                  backgroundColor:
                                                      router.pathname === `/user/${e.url}`
                                                          ? "white"
                                                          : "transparent",
                                              }}
                                          />
                                          <Link href={`/user/${e.url}`}>
                                              <Button
                                                  width="100%"
                                                  label={`${e.tab}`}
                                                  justifyContent="flex-start"
                                                  padding="0 0 0 55px "
                                                  border="none"
                                                  margin="none"
                                                  textAlign="left"
                                                  borderRadius="0"
                                                  fontSize="17px"
                                              />
                                          </Link>
                                      </LinkTabWrapper>
                                  )
                              })}
                    </LinkWrapper>
                    <Logout onClick={onLogout} />
                </LinkContainer>
            </NavInner>
        </NavWrapper>
    )
}

const NavWrapper = styled.div`
    width: 270px;
    min-width: 270px;
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
    padding: 60px;
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
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const LinkTab = styled.div`
    width: 5px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 0px 10px 10px 0px;
`

const LinkTabWrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70%;
`
