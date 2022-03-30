import { FC, useContext, useState } from 'react'
import { GetServerSideProps } from 'next'
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import Cookies from 'js-cookie';
import axios from 'axios'
import { MainLayout } from '../components/layouts/MainLayout'
import { ThemeContext } from '../context/ThemeContext';
import { ThemeString } from '../types/theme';

interface Props {
    themeCookie: string;
}

const ThemeChangerPage: FC<Props> = ({themeCookie}) => {
    const {changeTheme} = useContext(ThemeContext)
    const [themeInput, setThemeInput] = useState(themeCookie);
    const onThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeTheme(event.target.value as ThemeString);
        setThemeInput(event.target.value);
    }
    const onClick = async () => {
        const {data} = await axios.get('/api/hello');
        alert(JSON.stringify(data));
    }
    return (
        <MainLayout>
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Theme</FormLabel>
                        <RadioGroup value={themeInput} onChange={onThemeChange}>
                            <FormControlLabel value="light" control={<Radio />} label="Light" />
                            <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                            <FormControlLabel value="custom" control={<Radio />} label="Custom" />
                        </RadioGroup>
                    </FormControl>
                    <Button onClick={onClick}>
                        Request
                    </Button>
                </CardContent>
            </Card>
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const cookies = ctx.req.cookies;
    const themeCookie = cookies.theme || 'light';
    return {
        props: {
            themeCookie
        }
    }
}

export default ThemeChangerPage