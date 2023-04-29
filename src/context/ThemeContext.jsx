import { createContext } from 'react'

export const themes = {
    dark: {
        mainColor: '#181818',
        supportiveColor: '#ffffff',
        additionalColor: '#1C1C1C',
        barProgressColor: '#2E2E2E',
        svgLightColor: '#D9D9D9',
        svgDarkColor: '#696969',
        volumeProgressColor: {
            background: '#797979',
            thumb: '#ffffff',
        },
    },
    light: {
        mainColor: '#ffffff',
        supportiveColor: '#000000',
        additionalColor: '#F6F5F3',
        barProgressColor: '#D9D9D9',
        svgLightColor: '#B1B1B1',
        svgDarkColor: '#B1B1B1',
        volumeProgressColor: {
            background: '#C4C4C4',
            thumb: '#AD61FF',
        },
    },
}

export const Context = createContext({
    themeType: 'light',
    toggleTheme: () => {},
})
