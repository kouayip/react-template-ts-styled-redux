import * as React from 'react'
import { Global } from '@emotion/react'
import { Route, Switch } from 'react-router-dom'
import { Root, Header, Footer } from './components'
import HomePage from './pages/home'
import NotFoundPage from './pages/notFound'
import GlobalStyles from './styles'

const Routes: React.FC = () => {
  return (
    <Root>
      <Global styles={GlobalStyles} />
      <Header title="Tremius" />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={() => <h1>Home us page</h1>} />
        <Route path="/contact-us" component={() => <h1>Contact us page</h1>} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </Root>
  )
}

export default Routes
