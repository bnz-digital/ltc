import '@babel/polyfill'

import * as React from 'react'
import { render } from 'react-dom'

import SiteWrapper from './components/SiteWrapper'
import { unregister } from './serviceWorker'
import GlobalStyle from './styles'

import './@bnz/serrano-web-fonts/serrano.css'

render(
  <>
    <SiteWrapper />
    <GlobalStyle />
  </>,
  document.getElementById('root')
)

unregister()
