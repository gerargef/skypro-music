import React, { useEffect, useState } from 'react'
import * as S from '../style/style'
import { Link, useNavigate } from 'react-router-dom'
import { login, getToken } from '../API/API'
import { getCookie } from '../utils/utils'

function Login() {
    const [loginUser, setLoginUser] = useState({ email: '', password: '' })
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const loginFunction = async () => {
        if (getCookie('token')) {
            document.cookie = "token=''=;max-age=-1"
        }
        await login(loginUser)
        getToken(loginUser)
            .then((response) => {
                if (response.ok) {
                    document.cookie = `token = ${response.json().access}`
                    navigate('/')
                } else {
                    throw Error('Неверный логин или пароль')
                }
            })
            .catch(() => setError(true))
    }
    useEffect(() => {
        if (getCookie('token')) {
            navigate('/')
        }
    }, [navigate])
    return (
        <S.Wrapper>
            <S.Container>
                <S.Login>
                    <S.LoginModal>
                        <S.NavLogo>
                            <S.LogoImg src="/img/login-logo.png" alt="logo" />
                        </S.NavLogo>
                        {error ? (
                            <S.InputError>
                                Неверный логин или пароль
                            </S.InputError>
                        ) : null}
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
