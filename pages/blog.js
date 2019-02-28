import Page from '../layouts/main'
import { posts } from '../posts'
import Article from '../components/post/article'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
      <title>Posts</title>
    </Head>
    <div className="posts">
      {
        posts.map(({ id, date, title }) => (
          <Article
            id={id}
            source="blog"
            date={date}
            title={title}
          />
        ))
      }
    </div>
  </Page>
)

