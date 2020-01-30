import React, { FC, FunctionComponent } from 'react'
import { RouteProps, Route } from 'react-router-dom'
import { Paper, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { themeValues } from '../app/themes/themeValues'
import DrawerNavigation from '../domain/drawer/DrawerNavigation'
import Header from '../domain/header/Header'

export interface TemplateWelcomeProps extends RouteProps {
	component: FunctionComponent
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'flex',
		minHeight: '100vh',
	},
	contentContainer: {
		background: theme.palette.primary.main,
		width: `calc(100% - ${themeValues().sizes.Drawer.width}px)`,
		zIndex: 1200,
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
	pageContainer: {
		background: theme.palette.common.white,
		minHeight: `calc(100vh - ${themeValues().sizes.TabHeader.height}px)`,
		borderRadius: 0,
		width: `calc(100% + ${themeValues().mainOverlap}px)`,
		borderTopLeftRadius: 4,
		marginLeft: -themeValues().mainOverlap,
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			borderTopLeftRadius: 0,
			marginLeft: 0,
		},
	},
	pageContent: {
		width: '100%',
	},
}))

const TemplateWelcome: FC<TemplateWelcomeProps> = ({
	component: Component,
	...rest
}) => {
	const classes = useStyles()

	return (
		<Route
			{...rest}
			render={() => (
				<div className={classes.root}>
					<DrawerNavigation />
					<div className={classes.contentContainer}>
						<Header />

						<Paper elevation={3} className={classes.pageContainer}>
							<div className={classes.pageContent}>
								<Component />
							</div>
						</Paper>
					</div>
				</div>
			)}
		/>
	)
}

export default TemplateWelcome
