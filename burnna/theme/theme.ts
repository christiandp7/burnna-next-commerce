import { createTheme, ThemeOptions } from '@material-ui/core/styles'
// import { julesText, proximaNovaCondensed } from './fonts'

declare module '@material-ui/core/styles/createPalette' {
	interface Palette {
		neutral: Palette['primary']
		cream: Palette['primary']
	}
	interface PaletteOptions {
		neutral: PaletteOptions['primary']
		cream: PaletteOptions['primary']
	}
}

declare module '@material-ui/core/styles/createBreakpoints' {
	interface BreakpointOverrides {
		'2lg': true
	}
}

export default function themeSettigs(options: ThemeOptions) {
	return createTheme({
		palette: {
			primary: {
				main: '#0A0A0A',
				contrastText: '#fff',
			},
			secondary: {
				main: '#fff',
				contrastText: '#0A0A0A',
			},
			neutral: {
				light: '#CBCBCB',
				main: '#707070',
			},
			cream: {
				main: '#F5F2ED',
			},
		},

		typography: {
			fontFamily: [
				// '"Jules Text"',
				// '"Proxima Nova Condensed"',
				'"Karla"',
				'Sans',
				'Arial',
			].join(','),
			fontWeightRegular: 300,
			fontWeightMedium: 400,
			h1: {
				fontSize: '2.4rem',
			},
			h2: {
				fontSize: '2.2rem',
			},
			h3: {
				fontSize: '1.8rem',
			},
			h4: {
				fontSize: '1.4rem',
			},
			h5: {
				fontSize: '1.25rem',
			},
			h6: {
				fontSize: '1rem',
				fontFamily: '"Bodoni"',
				textTransform: 'uppercase',
			},
			subtitle1: {
				fontSize: '1rem', // Header links font-size
			},
			subtitle2: {
				fontSize: '0.875rem',
				fontFamily: '"Bodoni"',
				textTransform: 'uppercase',
			},
		},
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 960,
				lg: 1280,
				'2lg': 1536,
				xl: 1920,
			},
		},
		overrides: {
			MuiCssBaseline: {
				'@global': {
					// '@font-face': [proximaNovaCondensed],
					// '@font-face': [julesText],
					// 'html, body': {
					// 	fontSize: '14px',
					// },

					body: {
						backgroundColor: '#F5F2ED',
					},
				},
			},
			MuiLink: {
				root: {
					textUnderlineOffset: '1px',
				},
			},
			MuiButton: {
				root: {
					borderRadius: 0,
				},
			},
		},
		...options,
	})
}
