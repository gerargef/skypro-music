import { GlobalStyle } from './style/style'
import React, { useState } from 'react'
import AppRouters from './AppRouters'
import { ThemeProvider } from 'styled-components'
import { Context, themes } from './context/ThemeContext'

function App() {
    const [currentTheme, setCurrentTheme] = useState('dark')
    const toggleTheme = () => {
        if (currentTheme === 'dark') {
            setCurrentTheme('light')
        } else setCurrentTheme('dark')
    }

    return (
        <>
            <Context.Provider value={{ themeType: currentTheme, toggleTheme }}>
                <ThemeProvider theme={themes[currentTheme]}>
                    <GlobalStyle />
                    <AppRouters />
                </ThemeProvider>
            </Context.Provider>
        </>
    )
}

export default App
