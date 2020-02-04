import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core'

import { Theme } from '@material-ui/core/styles'
import { themeValues } from 'app/themes/themeValues'
import Drawer from './Drawer'
import Logo from './Logo'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		background: themeValues().palette.gray.main,
		[theme.breakpoints.up('md')]: {
			width: themeValues().sizes.Drawer.width,
			flexShrink: 0,
		},
	},
	drawerDesktop: {
		'& > .MuiPaper-root': {
			position: 'relative',
			height: '100%',
			minHeight: '100vh',
		},
	},
}))

const DrawerNavigation: FC = () => {
	const classes = useStyles()

	return (
		<nav className={classes.root}>
			<Logo />
			<Drawer
				className={classes.drawerDesktop}
				variant="permanent"
				PaperProps={{
					style: { width: themeValues().sizes.Drawer.width },
				}}
			/>
		</nav>
	)
}

export default DrawerNavigation
