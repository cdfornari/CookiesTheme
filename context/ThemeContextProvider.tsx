import { FC, useEffect, useState } from 'react';
import { Theme, ThemeProvider } from '@mui/material';
import { ThemeContext } from './ThemeContext';
import Cookies from 'js-cookie';
import { lightTheme } from '../themes/light-theme';
import { darkTheme } from '../themes/dark-theme';
import { customTheme } from '../themes/custom-theme';
import { ThemeString } from '../types/theme';

export type ThemeState = Theme;

interface Props {
    initialTheme: ThemeString
}

export const ThemeContextProvider: FC<Props> = ({children, initialTheme}) => {
    const [theme, setTheme] = useState<ThemeState>(
        initialTheme === 'light' ? lightTheme  
        : initialTheme  === 'dark' ? darkTheme 
        : customTheme
    );
    const changeTheme = (theme: ThemeString) => {
        setTheme(
            theme === 'light' ? lightTheme  
            : theme === 'dark' ? darkTheme 
            : customTheme
        );
        Cookies.set('theme', theme);
    }
    return (
        <ThemeContext.Provider value={{theme,changeTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}