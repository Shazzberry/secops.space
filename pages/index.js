import Page from '../layouts/main'
import Link from 'next/link'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
      <title>Secops.Space</title>
    </Head>

    <div className="home">
      <div className="main">
        <h1>Secops.Space</h1>
        <nav>
          <Link prefetch href="/blog"><a>Blog</a></Link>
        </nav>
      </div>
    </div>

    <style jsx>{`
      .home {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
      }

      .main {
        flex: none;
        text-align: center;
      }

      h1 {
        font-size: 14px;
        font-weight: normal;
      }

      nav {
        margin-top: 20px;
      }

      a {
        display: inline-block;
        margin: 0 15px;
        text-decoration: none;
      }
    `}</style>
  </Page>
)
