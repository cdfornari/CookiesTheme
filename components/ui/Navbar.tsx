import { AppBar, IconButton, Link as MaterialLink, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import { MenuSharp } from '@mui/icons-material'

export const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={0}>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
            >
                <MenuSharp />
            </IconButton>
            <Link href='/' passHref>
                <MaterialLink>
                    <Typography variant='h6' color='white'>CookiesMaster</Typography>
                </MaterialLink>
            </Link>
            <div style={{flex: 1}}></div>
            <Link href='/theme-changer' passHref>
                <MaterialLink>
                    <Typography variant='h6' color='white'>Theme Changer</Typography>
                </MaterialLink>
            </Link>
        </Toolbar>
    </AppBar>
  )
}