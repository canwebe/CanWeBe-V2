import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="keywords"
            content="Project,Rabbani,CanWeBe,CanWeBe!,canwebe,canwebe.netlify,netlify,golam_rabbani,golam,subrot,kaushik,web_project,startup"
          />
          <meta name="author" content="Golam Rabbani" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            property="og:title"
            content="CanWeBe!- A Software Developement Organization"
          />
          <meta
            property="og:description"
            content="It is a software development organization where we deliver instrumental and good quality software frequently."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.canwebe.tech/ogcanwebe.webp"
          />
          <meta property="og:site_name" content="CanWeBe!" />
          <meta property="og:url" content="https://www.canwebe.tech" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.canwebe.tech" />
          <meta
            property="twitter:title"
            content="CanWeBe!- A Software Developement Organization"
          />
          <meta
            property="twitter:description"
            content="It is a software development organization where we deliver instrumental and good quality software frequently."
          />
          <meta
            property="twitter:image"
            content="https://www.canwebe.tech/ogcanwebe.webp"
          />
          <meta
            name="google-site-verification"
            content="YnRLRY7HjWYXgRRS7bH4f7m4o_Nwa9b0FzERHTpSmm4"
          />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
