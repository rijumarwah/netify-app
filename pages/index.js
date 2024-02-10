import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>retro bin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="" />
        <p className="description">
          Riju's <code>code bin</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
