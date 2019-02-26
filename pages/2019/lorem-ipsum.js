import Head from 'next/head'
import Post from '../../layouts/post'
import Meta from '../../components/post/meta'
import Quote from '../../components/post/quote'
import P from '../../components/post/paragraph'
import Title from '../../components/post/title'

export default () => (
  <Post>
    <Head><title>Lorem Ipsum</title></Head>
    <Title>Lorem Ipsum</Title>
    <Meta date="February 26, 2019" />

    <P>We live in a world of Lorem Ipsums.</P>

    <P>Lorem ipsum dolor sit amet, senserit quaerendum vis an, in est enim <b>facilisis assentior</b>. Duis propriae quo et, an nec eirmod labitur, est wisi altera temporibus te. Saepe nostro an vis, ludus animal id nec, id has fastidii nominavi intellegam. Pro ad nibh omnes praesent, iisque voluptua ei vel, in diam utamur eum. At per inani congue torquatos.</P>

    <P>iPutent veritus noluisse no duo, <em>sea id partem nonumes iudicabit</em>. Omnes expetendis at has. Ius sonet saperet eligendi et. Eum eu propriae tincidunt, no legere vocibus ancillae sit. Eos labores voluptua id, eam ut liber fastidii scripserit.</P>

    <Quote>
Ea augue mentitum contentiones his, no cum ignota perfecto concludaturque, id pro adipisci convenire. Lorem quaeque electram an mei, in mea modus invenire. Ea eum dicant lobortis, nam wisi ferri clita ea, sit ne vivendum legendos elaboraret. Cu quo volutpat consetetur. Ex epicurei senserit est, mei dolor appetere qualisque in. Etiam harum est te, ex sed ipsum summo vulputate, minim antiopam nam ex. Partem deterruisset sea te.</Quote>

    <P>That a was a quote ^ </P>

  </Post>
)
