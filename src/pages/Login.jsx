import React, { useState } from 'react'
import * as S from '../style/style'
import { Link, useNavigate } from 'react-router-dom'
import { login, getToken } from '../API/API'

function Login() {
    const [loginUser, setLoginUser] = useState({ email: '', password: '' })
    const navigate = useNavigate()
    const loginFunction = () => {
        login(loginUser)
        getToken(loginUser).then((data) => {
            document.cookie = `token = ${data.access}`
            navigate('/')
        })
    }
    return (
        <S.Wrapper>
            <S.Container>
                <S.Login>
                    <S.LoginModal>
                        <S.NavLogo>
                            <S.LogoImg src="/img/login-logo.png" alt="logo" />
                        </S.NavLogo>
                        <S.LoginInput
                            placeholder="Логин"
                            value={loginUser.email}
                            onChange={(e) =>
                                setLoginUser({
                                    ...loginUser,
                                    email: e.target.value,
                                })
                            }
                        />
                        <S.LoginInput
                            placeholder="Пароль"
                            type="password"
                            value={loginUser.password}
                            onChange={(e) =>
                                setLoginUser({
                                    ...loginUser,
                                    password: e.target.value,
                                })
                            }
                        />
                        <S.LoginButton onClick={loginFunction} $purple>
                            Войти
                        </S.LoginButton>
                        <Link to="/registration">
                            <S.LoginButton $purple={false}>
                                Зарегистрироваться
                            </S.LoginButton>
                        </Link>
                    </S.LoginModal>
                </S.Login>
            </S.Container>
        </S.Wrapper>
    )
}

export default Login
