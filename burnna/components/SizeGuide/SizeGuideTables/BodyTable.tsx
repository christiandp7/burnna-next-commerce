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

const rows = [
	createData('USA', '4', '6', '8', '10', '12'),
	createData('France', '36', '38', '40', '42', '44'),
	createData('UK', '8', '10', '12', '14', '16'),
]

export default function BodySizeTable() {
	const classes = useStyles()

	return (
		<TableContainer>
			<Table className={classes.table} aria-label="Body size table">
				<TableBody>
					{rows.map(row => (
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
