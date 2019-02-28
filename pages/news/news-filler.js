import Head from 'next/head'
import Post from '../../layouts/post'
import Meta from '../../components/post/meta'
import Quote from '../../components/post/quote'
import P from '../../components/post/paragraph'
import Title from '../../components/post/title'

export default () => (
  <Post>
    <Head><title>Corporate CTF Soft Open</title></Head>
    <Title>Corporate CTF Soft Open, Hosted by L0k1 and Suser</Title>
    <Meta date="February 28, 2019" />

    <P>Corporate CTF Soft Open Hosted By L0k1 and Suser</P>
    <P>Ladies and gentlemen, boys and ghouls! Let me introduce myself: I am The Standard User and I am here with a unique opportunity. I have engaged a world-renowned system administrator to overhaul my company's infrastructure; he assures me that our implementation is impenetrable. But I paid a fortune for this and I want proof. Also it will amuse me to watch you flail around in my endless labyrinth of security controls. I'm offering legal immunity for any team of would-be Ne'er-do-wells that gains unauthorized* access to my systems.</P> 

    <P>So with the beautiful flavor text out of the way here is what we have to offer. This project has been in the works for well over a year now. We've been experimenting with different tools and platforms to create a safe, interesting environment for players to test their skills and learn the arts of pivoting and privilege escalation. Most CTFs are either a set of discrete challenges, or a single VM that you boot and root. We have added to the realism and complexity here. You will be expected to understand both Windows and Linux exploitation. We will allow one team of attackers at a time, with up to 6 players per team. Points will be given based on the time it takes to secure and submit each of the three flags to CTF admins. As this is a soft open, we appreciate any and all feedback and will adjust accordingly. Fun and learning are our primary objectives and that is how we will guide the evolution of this CTF. I wish you the best of luck.</P>

    <P>To register email your team name and player's contact emails to suser@protonmail.com.  We will meet on IRC to go over rules and details.</P>

    <P>*its part of the flavor text relax its a CTF</P>
    
    <P>Happy hacking,</P>
    <P>Suser</P>

  </Post>
)
