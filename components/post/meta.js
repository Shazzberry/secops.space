import React from 'react'

export default class Meta extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      highlight: false
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.views !== nextProps.views) {
      if (this.raf) return
      if (this.state.highlight) {
        // reset the animation
        this.setState({ highlight: false }, () => {
          this.raf = requestAnimationFrame(() => {
            this.raf = null
            this.setState({ highlight: true })
          })
        })
      } else {
        this.setState({ highlight: true })
      }
    }
  }

  render () {
    const { date } = this.props
    return (
      <div>
        { date }
        <style jsx>{`
          div {
            margin-bottom: 20px;
            color: #777;
          }

          .highlight {
            animation-name: highlight;
            animation-duration: 1s;
            animation-fill-mode: forwards;
          }

          @keyframes highlight {
            from {
              background-color: yellow;
            }
            to {
              background-color: #fff;
            }
          }
        `}</style>
      </div>
    )
  }
}
