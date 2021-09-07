import React from 'react'
import {
	withStyles,
	Theme,
	createStyles,
	makeStyles,
} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
// import Paper from '@material-ui/core/Paper'

const StyledTableCell = withStyles((theme: Theme) =>
	createStyles({
		head: {
			fontSize: theme.typography.h5.fontSize,
			fontWeight: theme.typography.fontWeightRegular,
			textTransform: 'uppercase',
			'&:nth-child(n+2):not(:last-child)': {
				borderRight: '1px solid rgba(224, 224, 224, 1);',
			},
			'&:first-child': {
				paddingLeft: 0,
			},
		},
		body: {
			fontSize: theme.typography.h5.fontSize,
			textTransform: 'uppercase',
			'&:nth-child(n+2):not(:last-child)': {
				borderRight: '1px solid rgba(224, 224, 224, 1);',
			},
			'&:first-child': {
				paddingLeft: 0,
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

function createData(name: string, xs: string, s: string, m: string, l: string) {
	return { name, xs, s, m, l }
}

const rows = [
	createData('USA', '2', '4-6', '6-8', '8-10'),
	createData('Europe', '32', '34-36', '36-38', '38-40'),
]

const mrows = [
	createData('Underbust', '70-75', '76-81', '83-86', '88-93'),
	createData('Bust', '81-86', '87-93', '93-98', '99-104'),
	createData('Waist', '63-6', '67-70', '71-74', '75-78'),
	createData('Hip', '89-92', '93-96', '97-100', '101-104'),
	createData('Lower Waist', '79-82', '80-83', '87-90', '91-94'),
]

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		table: {
			minWidth: 400,
			// marginTop: theme.spacing(4),
		},
		bodyHeading: {
			paddingBottom: theme.spacing(1),
			'& > h4': {
				fontWeight: theme.typography.fontWeightBold,
			},
		},
		measurementsHeading: {
			paddingTop: theme.spacing(5),
			paddingBottom: theme.spacing(1),
			'& > h4': {
				fontWeight: theme.typography.fontWeightBold,
			},
		},
	}),
)

export default function BodySizeTable() {
	const classes = useStyles()

	return (
		<TableContainer>
			<div className={classes.bodyHeading}>
				<Typography variant="h4" component="h4">
					Body size
				</Typography>
			</div>
			<Table className={classes.table} aria-label="Body size table">
				<TableHead>
					<TableRow>
						<StyledTableCell>BURNNA</StyledTableCell>
						<StyledTableCell align="center">XS</StyledTableCell>
						<StyledTableCell align="center">S</StyledTableCell>
						<StyledTableCell align="center">M</StyledTableCell>
						<StyledTableCell align="center">L</StyledTableCell>
					</TableRow>
				</TableHead>
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
						</StyledTableRow>
					))}
					<div className={classes.measurementsHeading}>
						<Typography variant="h4" component="h4">
							Measurements
						</Typography>
					</div>
					{mrows.map(row => (
						<StyledTableRow key={row.name}>
							<StyledTableCell component="th" scope="row">
								{row.name}
							</StyledTableCell>
							<StyledTableCell align="center">{row.xs}</StyledTableCell>
							<StyledTableCell align="center">{row.s}</StyledTableCell>
							<StyledTableCell align="center">{row.m}</StyledTableCell>
							<StyledTableCell align="center">{row.l}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
