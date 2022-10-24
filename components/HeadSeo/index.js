import Head from 'next/head'

export default function HeadSeo({ title, url, desc }) {
  return (
    <Head>
      <meta name="description" content={desc} />
      <title>{`${title} | CanWeBe`}</title>
      <link rel="canonical" href={'https://canwebe.tech' + url} />
    </Head>
  )
}
