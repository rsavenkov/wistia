import React from "react";
import {AppProps} from "next/app"

// Common styles
import "../styles/general.scss"

// Components styles
import "../styles/components/Materials.scss"
import "../styles/components/MaterialCard.scss"

// Pages styles
import "../styles/pages/Home.scss"

function App({ Component, pageProps }: AppProps) {
  return (
        <Component {...pageProps} />
  )
}

export default App
