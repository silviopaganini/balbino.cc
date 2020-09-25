import React from 'react'
import { ApolloProvider } from '@apollo/client'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from 'theme-ui'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import theme from './theme'

import smoothscroll from 'smoothscroll-polyfill'
smoothscroll.polyfill()

const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/ckfcsyz640l9w01w95zir2mur/master',
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
