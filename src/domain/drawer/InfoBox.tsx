import React, { FC } from 'react'

import { makeStyles } from '@material-ui/core'

import Box from '@material-ui/core/Box'

export interface InfoBoxProps {
	invert?: boolean
	marginTop?: number
	marginBottom?: number
}

const useStyles = makeStyles(() => ({
	infoBox: {
		position: 'absolute',
		top: '480px',
		width: '270px',
		border: '1px solid black',
		height: '200px',
		marginLeft: '20px',
		marginRight: '20px',
	},
}))

const InfoBox: FC<InfoBoxProps> = () => {
	const classes = useStyles()

	return <Box className={classes.infoBox} />
}

export default InfoBox
