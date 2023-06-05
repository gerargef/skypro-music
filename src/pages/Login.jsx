import React, { useEffect, useState } from 'react'
import * as S from '../style/style'
import { Link, useNavigate } from 'react-router-dom'
import {
    useGetTokenMutation,
    useLoginMutation,
    useRefreshTokenMutation,
} from '../services/loginAndAuth'
import { setLogin } from '../store/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from '../store/selectors/selectors'
import { refreshAccessToken } from '../store/slices/tokenSlice'

function Login() {
    const [loginUser, setLoginUser] = useState({ email: '', password: '' })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [login, { isLoading: isLoadingLogin, isError: isLoginError }] =
        useLoginMutation()
    const [getToken, { isLoading: isLoadingToken, isError: isTokenError }] =
        useGetTokenMutation()
    const [refreshToken] = useRefreshTokenMutation()
    const { isAuthenticated } = useSelector(userSelector)

    const refreshTokenFunction = async () => {
        await refreshToken({
            refresh: localStorage.getItem('refresh'),
        })
            .then((response) => {
                dispatch(refreshAccessToken(response.data.access))
                dispatch(
                    setLogin({
                        id: localStorage.getItem('userID'),
                    })
                )
                navigate('/')
            })
            .catch(() => {
                localStorage.clear()
            })
    }

    useEffect(() => {
        if (localStorage.getItem('refresh')) {
            refreshTokenFunction()
        }
    }, [])

    const loginFunction = async () => {
        const responseLogin = await login(loginUser)
        const loginData = responseLogin.data
        localStorage.setItem('userID', loginData.id)

        const responseToken = await getToken(loginUser)
        const tokenData = responseToken.data
        localStorage.setItem('refresh', tokenData.refresh)

        dispatch(setLogin({ ...loginData, token: tokenData }))

        navigate('/')
    }

    useEffect(() => {
        if (isAuthenticated) {
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
                        {isLoginError || isTokenError ? (
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
                        <S.LoginButton
                            onClick={loginFunction}
                            $purple
                            disabled={isLoadingLogin || isLoadingToken}
                        >
                            Войти
                        </S.LoginButton>
                        <Link to="/registration">
                            <S.LoginButton
                                $purple={false}
                                disabled={isLoadingLogin || isLoadingToken}
                            >
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
