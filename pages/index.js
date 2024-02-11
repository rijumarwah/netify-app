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
          <code>a publically available collection of <br></br>questionable files</code>
        </p>

        <section class="grid">
          <a href="https://docs.replit.com/category/deployments" class='card'>
            <h2>Browse &rarr;</h2>
            <p>
              All files
            </p>
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}
