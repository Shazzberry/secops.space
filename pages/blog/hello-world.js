import Head from 'next/head'
import Post from '../../layouts/post'
import Meta from '../../components/post/meta'
import Quote from '../../components/post/quote'
import P from '../../components/post/paragraph'
import Title from '../../components/post/title'

export default () => (
  <Post>
    <Head><title>Hello, World!</title></Head>
    <Title>Hello, World!</Title>
    <Meta date="February 28, 2019" />

    <P>We struck out on our own.</P>

    <P>It was inevitable, in retrospect. That we would separate from our old home, build a new place, find a new identity. The old country, 0x00sec, was good to us, and the IRC was there from the very beginning, even before there was a website, a forum, or most of us who called the place home. For years, pry0cc and I worked to curate and build a community around education, bringing in fresh blood, and promoting information security awareness in a way that related to the wider public rather than promoting the image of the "hacker renegade".</P>

    <P>In so many ways, it was successful and continues to be. Over time, however, we noticed that there was a competition for time and attention--and the competition came from within. We always said that the forum was the heart of 0x00sec, but that wasn't necessarily true. It was always equal parts forum and IRC. We tried to position this in several different ways: forum for long-form, IRC for synchronous discussion. Forum for "questions" or "support", IRC for banter. Regardless of how we positioned it, there was always a strong separation between the two and that many people strongly associated with one or the other. Eventually it came to be that many who frequented the IRC considered that the "real" 0x00sec, while it was the same for those who kept almost exclusively to the forum. We had become two different communities under the same domain.</P>

    <P>Pry0cc and I struggled to reconcile this, and there were many long hours discussing the phenomenon of social evaporation. We wanted to make sure the community was populated by quality people who felt valued, who contributed great things and were able to take value from the community in return. We eventually arrived at the conclusion that the populations who frequented the IRC and the forum differed fundamentally in that they simply valued different modes of learning and communication, and there was nothing wrong with that. The IRC crowd was more driven and excited by a large group, rapid streams of conversation, and a little more "hands-on" work that was more ad-hoc in nature.</P>

    <P>This brings us to the end of January, 2019. After frustrations mounted with attempting to manage the IRC and the forum together, pry0cc and I took a short break for a few days, had one final discussion about the fate and future of 0x00sec, and did what we knew had to be done. We made the split. Or, in truth, we just acknowledged the split that had already existed for quite some time. Gratefully, pry0cc handed the reins to nugget and me, and set about continuing his work with 0x00sec. Nugget and I acquired a new domain name, built new infrastructure, and moved us over while attempting to continue business (mostly) as usual.</P>

    <P> For now, not much is different. The old 0x00sec Code of Conduct is gone, and a new, much more libertarian one will replace it. Old folks have returned; new faces have appeared. We have plans for the future but for now are being careful to take things slow. We are an IRC community and that will remain the core of how we organize. Hopefully, eventually, new communities will spawn from us, as we did from 0x00sec.</P>

    <P>We are on our own. At least for now.</P>

  </Post>
)
