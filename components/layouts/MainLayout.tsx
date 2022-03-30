import { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'

export const MainLayout: FC = ({children}) => {
  return (
    <>
        <Head>

        </Head>
        <Navbar />
        <main style={{padding: '20px 50px'}}>
            {children}
        </main>
    </>
  )
}