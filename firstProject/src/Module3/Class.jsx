import React, { Component } from 'react'

import Header from './Header'
import Nav from './Nav'
import Aside from './Aside'
import Main from './Main'
import Footer from '../Footer'

export default class Class extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Aside />
          <Main />
        </div>

        <Footer />
      </div>
    )
  }
}

