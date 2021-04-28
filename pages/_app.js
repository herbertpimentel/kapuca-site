
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    color: #969698;
    background-color: #1f2024;
  }`


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />  
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
