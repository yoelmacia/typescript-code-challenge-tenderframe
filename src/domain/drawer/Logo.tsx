import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core'

export interface LogoProps {
	invert?: boolean
	marginTop?: number
	marginBottom?: number
}

const useStyles = makeStyles(() => ({
	logo: {
		width: '100%',
		padding: '10px',
	},
}))

const Logo: FC<LogoProps> = () => {
	const classes = useStyles()

	return (
		<Link to="/">
			<img
				src="/tender-frame-logo.png"
				className={classes.logo}
				alt="Logo"
			/>
		</Link>
	)
}

export default Logo
