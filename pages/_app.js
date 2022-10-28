import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div style={{display:"flex", flexDirection:"column", height:"100vh"}}><div style={{flex:"1"}}><Navbar/></div><div><Component {...pageProps} /></div><Footer/></div>
}

export default MyApp
