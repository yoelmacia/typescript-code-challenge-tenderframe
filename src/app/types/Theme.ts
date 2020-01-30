export interface Theme {
	colors: Colors
	palette: Palette
	spacing: (factor: number) => number
	sizes: Sizes
	mainOverlap: number
	gradients: Gradients
}

interface Sizes {
	Drawer: SizeItem
	TabHeader: SizeItem
	PageContentHeader: SizeItem
}

interface Gradients {
	background?: string
}

interface SizeItem {
	width?: number
	height?: number
	minHeight?: number
	animationTime?: string
	borderRadius?: number
	fontSize?: string | number
}

interface Colors {
	background: object
	success: string
	error: string
	border: object
	icon: object
	intent: object
	text: object
}

interface Palette {
	blue: PaletteItem
	gray: PaletteItem
}

interface PaletteItem {
	main: string
	dark: string
	light: string
}
