import { Footer, Navbar } from '@/sections'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
