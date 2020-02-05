import React, { FC } from 'react'
import { Button, makeStyles } from '@material-ui/core'

export type StatusButtonProps = {
	text?: string
	disabled?: boolean
	onClick: () => void
}

const stringToColor = (): any => {
	const hex = Math.floor(Math.random() * 0xffffff)
	const color = `#${hex.toString(16)}`

	return color
}

const useStyles = makeStyles(() => ({
	statusButton: {
		border: '1px solid black',
		marginRight: '15px',
		backgroundColor: `${stringToColor()}`,
	},
}))

const StatusButton: FC<StatusButtonProps> = ({ text, disabled, onClick }) => {
	const classes = useStyles()

	return (
		<Button
			className={classes.statusButton}
			onClick={onClick}
			disabled={disabled}
			color="primary"
		>
			{text}
		</Button>
	)
}

export default StatusButton
