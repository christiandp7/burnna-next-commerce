import React from 'react'
import {
	withStyles,
	Theme,
	createStyles,
	makeStyles,
} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
// import Paper from '@material-ui/core/Paper'

const StyledTableCell = withStyles((theme: Theme) =>
	createStyles({
		body: {
			fontSize: theme.typography.h6.fontSize,
			color: theme.palette.primary.contrastText,
			padding: `${theme.spacing(1)}px ${theme.spacing(1) - 4}px`,
			'&:first-child': {
				paddingLeft: 0,
			},
			'&:last-child': {
				paddingRight: 0,
			},
		},
	}),
)(TableCell)

const StyledTableRow = withStyles((theme: Theme) =>
	createStyles({
		root: {
			// borderBottom: '1px solid #000',
		},
	}),
)(TableRow)

function createData(
	name: string,
	xs: string,
	s: string,
	m: string,
	l: string,
	xl: string,
) {
	return { name, xs, s, m, l, xl }
}

const mrows = [
	createData('Underbust', '70-75', '76-81', '83-86', '88-93', '88-93'),
	createData('Bust', '81-86', '87-93', '93-98', '99-104', '99-104'),
	createData('Waist', '63-6', '67-70', '71-74', '75-78', '75-78'),
	createData('Hip', '89-92', '93-96', '97-100', '101-104', '101-104'),
	createData('Lower Waist', '79-82', '80-83', '87-90', '91-94', '91-94'),
]

export default function MeasurementsTable() {
	const classes = useStyles()

	return (
		<TableContainer>
			<Table className={classes.table} aria-label="Body size table">
				<TableBody>
					{mrows.map(row => (
						<StyledTableRow key={row.name}>
							<StyledTableCell component="th" scope="row">
								{row.name}
							</StyledTableCell>
							<StyledTableCell align="center">{row.xs}</StyledTableCell>
							<StyledTableCell align="center">{row.s}</StyledTableCell>
							<StyledTableCell align="center">{row.m}</StyledTableCell>
							<StyledTableCell align="center">{row.l}</StyledTableCell>
							<StyledTableCell align="center">{row.xl}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		table: {
			minWidth: 350,
			[theme.breakpoints.down('sm')]: {
				minWidth: 280,
			},
		},
	}),
)
