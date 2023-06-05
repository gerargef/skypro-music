import { GlobalStyle } from './style/style'
import React, {
    //  useEffect,
    useState,
} from 'react'
import AppRouters from './AppRouters'
import { ThemeProvider } from 'styled-components'
import { Context, themes } from './context/ThemeContext'
import { Provider } from 'react-redux'
import { store } from './store/store'
// import { useRefreshTokenMutation } from './services/loginAndAuth'

function App() {
    const [currentTheme, setCurrentTheme] = useState('dark')
    const toggleTheme = () => {
        if (currentTheme === 'dark') {
            setCurrentTheme('light')
        } else setCurrentTheme('dark')
    }

    return (
        <>
            <Provider store={store}>
                <Context.Provider
                    value={{ themeType: currentTheme, toggleTheme }}
                >
                    <ThemeProvider theme={themes[currentTheme]}>
                        <GlobalStyle />
                        <AppRouters />
                    </ThemeProvider>
                </Context.Provider>
            </Provider>
        </>
    )
}

export default App
