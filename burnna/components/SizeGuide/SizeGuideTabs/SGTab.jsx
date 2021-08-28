import React from 'react'
import Tab from '@material-ui/core/Tab'
import { withStyles } from '@material-ui/core/styles'

const SGTab = withStyles(theme => ({
	root: {
		// textTransform: 'none',
		minWidth: 60,
		fontFamily: theme.typography.h6.fontFamily,
		fontSize: theme.typography.body1.fontSize,
		fontWeight: theme.typography.fontWeightBold,
		letterSpacing: '1px',
		// marginRight: theme.spacing(3),
		'&:hover': {
			// color: '#40a9ff',
			// opacity: 1,
		},
		'&$selected': {
			// color: '#1890ff',
			// fontWeight: theme.typography.fontWeightMedium,
		},
		'&:focus': {
			// color: '#40a9ff',
		},
	},
	selected: {},
}))(props => <Tab disableRipple {...props} />)

export default SGTab
