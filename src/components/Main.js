import PropTypes from 'prop-types'
import React, { useState } from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'

const Main = props => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    setName('')
    setEmail('')
    setMessage('')
  }

  const close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="intro"
        className={`${props.article === 'intro' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Intro</h2>
        <span className="image main">
          <img src={pic01} alt="" />
        </span>
        <h3>Who is this guy?</h3>
        <p>
          I'm a full stack developer with over 2 years of experience working
          with a wide range of cutting edge technologies in the event and
          e-commerce space. I thoroughly enjoy building solid and scalable
          websites in the most efficient way possible. Equipped with a keen eye
          for detail to diligently follow mock-ups and designs. I strive to keep
          growing as a person and as a developer. Check out some of my work{' '}
          <a target="_blank" href="https://github.com/bengquist">
            here
          </a>
        </p>
        {close}
      </article>

      <article
        id="work"
        className={`${props.article === 'work' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Work</h2>

        <a target="_blank" href="https://fan.guru" className="image main">
          <img src={pic02} alt="" />
        </a>

        <p>
          Fan Guru is an event app aimed towards bringing all conventions into
          one space.
        </p>

        <p style={{ margin: 0 }}>Technologies Used:</p>
        <ul>
          <li>React</li>
          <li>MobX</li>
          <li>Styled Components</li>
          <li>Jest</li>
          <li>React Testing Library</li>
        </ul>

        {close}
      </article>

      <article
        id="contact"
        className={`${props.article === 'contact' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={e => setName(e.value)}
            />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={message}
              onChange={e => setMessage(e.value)}
            ></textarea>
          </div>
          <ul className="actions">
            <li>
              <input
                onClick={onSubmit}
                type="submit"
                value="Send Message"
                className="special"
              />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>
        <ul className="icons">
          <li>
            <a
              target="_blank"
              href="https://github.com/bengquist"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/blake-engquist/"
              className="icon fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
        </ul>
        {close}
      </article>
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
