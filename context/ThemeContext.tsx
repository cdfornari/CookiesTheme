import { Theme } from '@mui/material';
import { createContext } from 'react';
import { ThemeString } from '../types/theme';

interface ContextProps {
    theme: Theme;
    changeTheme: (theme: ThemeString) => void;
}

export const ThemeContext = createContext({} as ContextProps);