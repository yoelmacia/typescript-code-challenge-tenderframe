import React, { FC } from 'react'

import { makeStyles, AppBar, Tabs, Tab } from '@material-ui/core'

import { themeValues } from 'app/themes/themeValues'

const useStyles = makeStyles({
	root: {
		height: themeValues().sizes.TabHeader.height,
		background: themeValues().gradients.background,
		position: 'relative',
		color: 'white',
	},
	tabs: {
		bottom: 0,
		position: 'absolute',
	},
	tab1: {
		backgroundColor: 'white',
		margin: '20px 10px 0px 20px',
	},
	tab: {
		margin: '20px 10px 0px 10px',
		backgroundColor: 'white',
	},
})

const Header: FC = () => {
	const classes = useStyles()

	const [value, setValue] = React.useState(0)

	const handleChange: any = (
		event: React.ChangeEvent<{}>,
		newValue: number
	) => {
		const url = window.location.href.split('/projects/')[0]
		const newURL = `${url}/projects/${newValue + 1}`
		setValue(newValue)
		window.history.pushState({}, 'Title', newURL)
	}

	const handleClick: any = () => {
		window.location.reload()
	}

	React.useEffect(() => {
		const url = window.location.href.split('/projects/')[1]
		const newURL = +url - 1
		setValue(newURL)
	}, [])

	return (
		<div className={classes.root}>
			<AppBar position="static" />
			<Tabs
				className={classes.tabs}
				value={value}
				onChange={handleChange}
				onClick={handleClick}
				indicatorColor="primary"
				textColor="primary"
				centered
			>
				<Tab className={classes.tab1} label="Tab 1" />
				<Tab className={classes.tab} label="Tab 2" />
				<Tab className={classes.tab} label="Tab 3" />
			</Tabs>
		</div>
	)
}

export default Header
