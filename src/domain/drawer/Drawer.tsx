import React, { FC } from 'react'
import MuiDrawer, {
	DrawerProps as MuiDrawerProps,
} from '@material-ui/core/Drawer'

export type DrawerProps = MuiDrawerProps

const Drawer: FC<DrawerProps> = props => {
	return <MuiDrawer variant="permanent" {...props} />
}

export default Drawer
