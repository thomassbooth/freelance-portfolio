import { ThemeProvider } from 'next-themes'
import Container from './components/Container'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Quicksand } from 'next/font/google'
import ThemeProviderO from './Providers/ThemeProviderO'
import Personals from './components/Personals'

const roboto = Quicksand({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Home - Thomas Booth',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          <div className = 'py-20 transition-colors text-pastel-brown-dark sm:px-6 md:px-20 2xl:px-32'>
            <ThemeProviderO>
              <Navbar />
              <Personals />
              <Container>
                {children}
              </Container>   
            </ThemeProviderO>       
          </div>
      </body>
    </html>
  )
}
