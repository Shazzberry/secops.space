import Page from '../layouts/main'
import { news } from '../posts'
import Article from '../components/post/article'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
      <title>News</title>
    </Head>
    <div className="newses">
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

