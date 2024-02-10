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
        <i><a href="//24timezones.com/world_directory/current_salt_lake_city_time.php" style="text-decoration: none" class="clock24" id="tz24-1562550567-c1220-eyJob3VydHlwZSI6MTIsInNob3dkYXRlIjoiMCIsInNob3dzZWNvbmRzIjoiMSIsInNob3d0aW1lem9uZSI6IjEiLCJ0eXBlIjoiZCIsImxhbmciOiJlbiJ9" title="Salt Lake City Time" target="_blank" rel="nofollow">TIME IN SALT LAKE CITY</a>
        </i><script type="text/javascript" src="//w.24timezones.com/l.js" async></script>
      </main>

      <Footer />
    </div>
  )
}
