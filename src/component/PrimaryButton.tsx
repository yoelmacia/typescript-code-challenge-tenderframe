import React, { FC } from 'react'
import { Button } from '@material-ui/core'

export type PrimaryButtonProps = {}

const PrimaryButton: FC<PrimaryButtonProps> = () => {
	return (
		<Button
			onClick={() => {}}
			disabled={false}
			variant="contained"
			color="primary"
		>
			Click me
		</Button>
	)
}

export default PrimaryButton
