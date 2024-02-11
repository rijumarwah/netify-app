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
        <Header title="retro's code bin" />
        <p className="description">
          <code>a publically available collection of files</code>
        </p>

        <section class="grid">
          <a href="https://docs.replit.com/category/deployments" class='card'>
            <h2>Deploy &rarr;</h2>
            <p>
              After you are happy with this app, deploy it on Replit!
            </p>
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}
