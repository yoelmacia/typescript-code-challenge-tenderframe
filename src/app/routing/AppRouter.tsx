import React, { ReactElement } from 'react'
import { Switch, BrowserRouter } from 'react-router-dom'
import { routes } from 'app/routing/routes'
import TemplateWelcome from '../../template/TemplateWelcome'
import WelcomePage from '../../domain/welcome/WelcomePage'
import ProjectPage from '../../domain/welcome/ProjectPage'

const AppRouter = (): ReactElement => {
	return (
		<BrowserRouter>
			<Switch>
				<TemplateWelcome
					exact
					path={routes.home}
					component={WelcomePage}
				/>
				<TemplateWelcome
					exact
					path={routes.projects}
					component={ProjectPage}
				/>
			</Switch>
		</BrowserRouter>
	)
}

export default AppRouter
