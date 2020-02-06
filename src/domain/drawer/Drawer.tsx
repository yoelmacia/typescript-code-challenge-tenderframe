import React, { FC } from 'react'
import { DrawerProps as MuiDrawerProps } from '@material-ui/core/Drawer'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Chip from '@material-ui/core/Chip'

import ShareData from '../../component/ShareData'

export type DrawerProps = MuiDrawerProps

const Drawer: FC<DrawerProps> = () => {
	return (
		<List>
			{['Title'].map(text => (
				<ListItem button key={text}>
					<ListItemText primary={<ShareData name />} />
					<Chip size="small" label={<ShareData status />} />
				</ListItem>
			))}
		</List>
	)
}

export default Drawer
