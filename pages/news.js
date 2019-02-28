import Page from '../layouts/main'
import Link from 'next/link'
import { news } from '../posts'
import Article from '../components/post/article'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
      <title>News</title>
    </Head>
    <div className="posts">
      {
        news.map(({ id, date, title }) => (
          <Article
            id={id}
            source="news"
            date={date}
            title={title}
          />
        ))
      }
    </div>
  </Page>
)

