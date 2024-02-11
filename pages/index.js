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
            <h2>Browse &rarr;</h2>
            <p>
              Complete list of files
            </p>
          </a>

          <a href="https://replit.com/learn" class='card'>
            <h2>Links &rarr;</h2>
            <p>Other available info</p>
          </a>
        </section>
      </main>


    </div>
  )
}
