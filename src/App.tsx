import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from '@emotion/react'
import { Store } from 'redux'
import { History } from 'history'
import { Provider } from 'react-redux'
import LayoutContainer from './containers/LayoutContainer'
import { ApplicationActions } from './store/actions'
import { ApplicationState } from './store'
import Routes from './routes'

import * as themes from './styles/theme'

interface AppProps {
  store: Store<ApplicationState, ApplicationActions>
  history: History
}

const App: React.FC<AppProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history} noInitialPop>
        <LayoutContainer>
          {({ theme }) => (
            <ThemeProvider theme={themes[theme]}>
              <Routes />
            </ThemeProvider>
          )}
        </LayoutContainer>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
