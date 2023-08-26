import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './normalize.css'
import mainStyles from './main.module.css'

const myFont = localFont({
  src: [
    {
      path: './fusion-fitness/fonts/RS-semibold.otf'
    },
    {
      path: './fusion-fitness/fonts/BAHNSCHRIFT.TTF'
    },
  ],
})

export const metadata = {
    title: 'FUSION',
    description: 'The main section of the portfolio website of Ivan Burenin',
}

export default function RootLayout({children}){
    return (
      <html style={{height: '100%'}}>
        <body style={{minHeight: '100%', display: 'flex', flexDirection: 'column'}}>
          <div className={mainStyles.wrapper}>
              <Header/>
              <main className={`${mainStyles.main} ${myFont.className}`}>
              {children}
              </main>
              <Footer/>
          </div>
        </body>
      </html>
    )
}
