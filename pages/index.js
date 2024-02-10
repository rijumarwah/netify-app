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
        <p id="currentTime"></p>
        <script>
        function showTime() {
          document.getElementById('currentTime').innerHTML = new Date().toUTCString()}
        showTime();
        setInterval(function () {
          showTime()}, 1000);
        </script>
      </main>

      <Footer />
    </div>
  )
}
