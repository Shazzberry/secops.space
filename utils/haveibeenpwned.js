import fetch from 'isomorphic-fetch'

import SHA1 from './sha1'

export default function haveibeenpwned (passwd) {
    const hash = SHA1(passwd)
    return new Promise((resolve, reject) => {
        fetch(`https://api.pwnedpasswords.com/range/${hash.substring(0,5)}`)
            .then(r => r.text())
            .then(r => {
                let pwnedhashes = r.split('\r\n').map(line => line.split(':')[0])
                let ispwned = pwnedhashes.filter(pwnedhash => hash.substring(0,5) + pwnedhash.toLowerCase() === hash).length > 0 ? true : false
                resolve(ispwned)
            })
            .catch(err => {reject(err)})
    })
  
}