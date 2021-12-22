import '../styles/globals.css';
import '../styles/Bg.css';
import '../styles/SigninForm.css';
import '../styles/dropdownHeader.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import Provider from '../Context/Provider';
import Header from '../Components/Header';


function MyApp({ Component, pageProps }) {
  return (
  <Provider>
    <Header />
    <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
