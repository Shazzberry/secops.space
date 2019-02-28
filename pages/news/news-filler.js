import Head from 'next/head'
import Post from '../../layouts/post'
import Meta from '../../components/post/meta'
import Quote from '../../components/post/quote'
import P from '../../components/post/paragraph'
import Title from '../../components/post/title'

export default () => (
  <Post>
    <Head><title>News Filler</title></Head>
    <Title>News Filler!</Title>
    <Meta date="February 28, 2019" />

    <P>For the love of christ change this fraq, this was just to ensure the directories were created and to show the way of linking in JSON</P>

  </Post>
)
