import React, { FC } from 'react'
import { makeStyles, Theme, Typography, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(4),
	},
}))

const WelcomePage: FC = ({ children }) => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Paper className={classes.root}>
				<Typography component="p">
					Please study the README.md for the assignment!
				</Typography>
			</Paper>
			{children}
		</div>
	)
}

export default WelcomePage
