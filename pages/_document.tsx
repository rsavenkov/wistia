import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff0000"/>
            <meta name="apple-mobile-web-app-title" content="МирВрача"/>
            <meta name="application-name" content="МирВрача"/>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="theme-color" content="#ffffff"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="yandex-verification" content="f4371ffd87573c11"/>
        </Head>
        <body>
        { process.env.NODE_ENV !== 'development' && <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M8K7ZG" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript> }
        <Main />
        <NextScript />
        <script src="https://fast.wistia.com/assets/external/E-v1.js" async/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
