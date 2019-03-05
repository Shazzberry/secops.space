import { Component } from 'react'

import fetch from 'isomorphic-fetch'

import Page from '../../layouts/main'
import Code from '../../components/post/code'
import Head from 'next/head'
import dickbutt from '../../utils/dickbutt';
import haveibeenpwned from '../../utils/haveibeenpwned';

export default class extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sent: false,
      error: null,
      ispwned: null
    }
  }

  componentDidMount () {
    console.log(`
     ██████╗ ██████╗ ██████╗ ██████╗  ██████╗████████╗███████╗
    ██╔════╝██╔═══██╗██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔════╝
    ██║     ██║   ██║██████╔╝██████╔╝██║        ██║   █████╗  
    ██║     ██║   ██║██╔══██╗██╔═══╝ ██║        ██║   ██╔══╝  
    ╚██████╗╚██████╔╝██║  ██║██║     ╚██████╗   ██║   ██║     
     ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝      ╚═════╝   ╚═╝   ╚═╝     
                                                              
    `)
    console.log('You can register from here, if you\'re allergic to GUI:')
    console.info('register("yourEdgyTeamName", "yourLameNick", "yourRidiculousPasswd", "yourShamefulEmail")')
    window.register = this.senditlikeyoumeanit
  }

  haveibeenpwnedpasswd = (e) => {
    const passwd = e.target.value
    if (passwd.length > 0) {
      haveibeenpwned(passwd)
        .then(ispwned => {this.setState({ ispwned: ispwned })})
        .catch(err => {console.error(err)})
    }
  }

  rootthenoobs = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    const formData = new FormData(e.target)

    this.senditlikeyoumeanit(formData.get('team'), formData.get('nick'), formData.get('passwd'), formData.get('email'))
  }

  senditlikeyoumeanit = (team, nick, passwd, email) => {
    if (team.length > 64 || nick.length > 32 || passwd.length > 32 || email.length > 513) {
      this.setState({ sent: false, error: { code: 0, msg: "You really thought you could go over the characters' limits?" } })
      console.log(dickbutt)
      console.error("You really thought you could go over the characters' limits?")
      return
    }
    let data = {
      team: team,
      nick: nick,
      passwd: passwd,
      email: email,
      isOKToBeHacked: true
    }
    let options = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      referrer: 'no-referrer',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('https://corpctf.secops.space/register', options)
      .then(r => {
        if (r.status === 200) {
          this.setState({ sent: true })
          console.log('DoS started from you IP. Thank you for being part of our botnet.')
        } else {
          this.setState({ sent: false, error: { code: r.status, msg: r.text() } })
          console.log(dickbutt)
          console.error(r.text())
        }
      })
      .catch(err => {
        this.setState({ sent: false, error: { code: 0, msg: err.toString() } })
        console.log(dickbutt)
        console.error(err)
      })
  }

  render () {
    return (
    <Page>
      <Head>
        <title>CORPCTF Registration</title>
      </Head>
      <div className='registration'>
        <h1>CORPCTF Registration</h1>

        { this.state.error !== null ?
          <div id='error'>
            <h2>You fucked up something (since we won't ever admit it was on our side, it must be you)</h2>
            <pre><Code>{dickbutt}</Code></pre>
            <p>{this.state.error.msg}</p>
          </div> :
          null
        }

        { !this.state.sent ?
          <div id='abouttobepwned'>
            <p>We're so good at social engineering that we made you believe you're registering for a CTF, while you're actually just giving us your credentials. So please, go ahead.</p>
            <form id='dataLeak' onSubmit={this.rootthenoobs}>
              <fieldset><input required maxLength="64" name='team' type='text' placeholder='team name' /></fieldset>
              <fieldset><input required maxLength="32" name='nick' type='username' placeholder='IRC nick' /></fieldset>
              <fieldset><input required maxLength="32" name='passwd' type='password' onBlur={this.haveibeenpwnedpasswd} placeholder='passwd' /></fieldset>
              <fieldset><input required maxLength="513" name='email' type='email' placeholder='your@email.lol' /></fieldset>
              { this.state.ispwned !== null ?
                <div id='pwnage'>
                  { !!this.state.ispwned ? 'your passwd has been leaked before, continue the good work' : 'your password don\'t seem to have appeared in a breach before, are you sure you want to use it?'}
                </div> :
                null
              }
              <fieldset><input type='submit' value='what can possibily do a button in a form? (hint: it submits it)' /></fieldset>
            </form>
          </div> :
          null
        }

        { this.state.sent ?
          <div id='pwned'>
            <h2>Congratulations, you've been pwned!</h2>
            <p>And we got your registration. Probably.</p>
          </div> :
          null
        }

      </div>
      <style jsx>{`
        #pwned, #error, #abouttobepwned {
          max-width: 600px;
          margin: auto;
        }
        #error {
          color: Crimson;
          padding-bottom: 32px;
          margin-bottom: 32px;
          border-bottom: dotted 2px Gray;
        }
        #error pre {
          font-size: 8px;
        }
        h1 {
          margin-bottom: 24px;
        }
        h2 {
          margin-bottom: 16px;
        }
        p {
          font-size: 18px;
          line-height: 24px;
        }
        #dataLeak {
          margin-top: 64px;
          font-size: 18px;
          line-height: 24px;
        }
        #dataLeak fieldset {
          border: none;
          text-align: center;
        }
        #dataLeak input {
          display: inline-block;
          padding: 8px 16px;
          border: none;
          background: transparent;
          border-bottom: 2px solid gray;
          color: gray;
          font-size: 18px;
          line-height: 24px;
        }
        #dataLeak input[type='submit'] {
          border: 2px solid gray;
          cursor: pointer;
          margin-top: 24px;
        }
        #pwnage {
          text-align: center;
          max-width: 600px;
          margin: 32px auto;
        }
      `}</style>
    </Page>
    )
  }
}

