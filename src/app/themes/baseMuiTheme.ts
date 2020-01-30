import { createMuiTheme, Theme } from '@material-ui/core/styles'

const theme = createMuiTheme({})

const themeCustom: Theme = {
	...theme,
	overrides: {
		MuiAppBar: {
			root: {
				boxShadow: 'none',
				backgroundColor: 'transparent !important',
			},
		},
		MuiDrawer: {
			paper: {
				backgroundColor: '#F4F4F4',
				borderRight: 'none !important',
				paddingRight: '10px',
			},
		},
	},
}

export default themeCustom
