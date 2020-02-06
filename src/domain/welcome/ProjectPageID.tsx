/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react'
import { makeStyles, Theme, Paper } from '@material-ui/core'

import ShareData from '../../component/ShareData'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(4),
	},
}))

const ProjectPageID: FC = ({ children }) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Paper className={classes.root}>
				<ShareData
					name
					industry
					titleEmployees
					employees
					status
					buttons
				/>
			</Paper>
			{children}
		</div>
	)
}

export default ProjectPageID
