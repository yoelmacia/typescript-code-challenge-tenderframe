import React, { FC } from 'react'

import { makeStyles } from '@material-ui/core'

export interface InfoBoxProps {
	invert?: boolean
	marginTop?: number
	marginBottom?: number
}

const useStyles = makeStyles(() => ({
	infoBox: {
		width: '90%',
		border: '1px solid black',
		height: '200px',
		margin: 'auto',
		position: 'relative',
		bottom: '290px',
	},
}))

const InfoBox: FC<InfoBoxProps> = () => {
	const classes = useStyles()

	return <div className={classes.infoBox} />
}

export default InfoBox
