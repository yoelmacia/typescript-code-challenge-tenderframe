import { Theme } from 'app/types/Theme'

export const themeValues = (): Theme => {
	return {
		sizes: {
			Drawer: {
				width: 310,
			},
			PageContentHeader: {
				minHeight: 64,
			},
			TabHeader: {
				height: 150,
			},
		},
		spacing: factor => factor * 4,
		mainOverlap: 10,
		palette: {
			blue: {
				main: '#30a7c9',
				dark: '#007ea7',
				light: '#71c4dd',
			},
			gray: {
				main: '#f4f4f4',
				dark: '#fff',
				light: '#f4f4f4',
			},
		},
		colors: {
			background: { color: 'fff' },
			success: '#71D552',
			error: '#D83679',
			border: { color: 'fff' },
			icon: { color: 'fff' },
			intent: { color: 'fff' },
			text: { color: 'fff' },
		},
		gradients: {
			background: 'linear-gradient(#028ebc, #007ea7)',
		},
	}
}
