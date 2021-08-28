import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import { withStyles } from '@material-ui/core/styles'

const SGTabs = withStyles(theme => ({
	root: {
		// borderBottom: '1px solid #e8e8e8',
	},
	indicator: {
		// backgroundColor: '#1890ff',
	},
	flexContainer: {
		justifyContent: 'space-around',
	},
}))(Tabs)

export default SGTabs
