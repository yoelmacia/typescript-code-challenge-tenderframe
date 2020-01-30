import React from 'react'
import ReactDOM from 'react-dom'

import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { CssBaseline } from '@material-ui/core'

import theme from 'app/themes/baseMuiTheme'

import * as serviceWorker from './serviceWorker'
import AppRouter from './app/routing/AppRouter'

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<AppRouter />
	</ThemeProvider>,
	document.getElementById('root')
)

serviceWorker.unregister()
