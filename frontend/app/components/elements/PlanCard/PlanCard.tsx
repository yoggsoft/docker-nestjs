import classnames from 'classnames';
import {
	Paper,
	Typography,
	Divider,
	Button
} from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import { sanitizeCurrency } from '../../../utils/utils';
import { makeStyles } from '@mui/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const useStyles = makeStyles({
	loader: {
		animation: '$spin 1s linear infinite',
	},
	'@keyframes spin': {
		to: {
			'-webkit-transform': 'rotate(360deg)'
		}
	},
	cardTitle: {
		fontSize: 18,
		padding: 15,
		fontWeight: 'bold',
		lineHeight: 'normal',
		letterSpacing: 'normal',
		textAlign: 'center'
	},
	priceCard: {
		width: 350,
		margin: '0 15px 30px 0',
		borderRadius: 3,
		boxShadow: '0 2px 4px 0 rgba(72, 72, 72, 0.5)',
		backgroundColor: 'white',
		color: '#484848',
		'&.active': {
			color: 'white',
			backgroundColor: '#31cfda'	
		}
	},
	priceTagRow: {
		flexDirection: 'column'
	},
	priceTagDescription: {
		textTransform: 'uppercase'
	},
	priceTag: {
		height: 44,
		margin: '2px auto',
		fontSize: 38,
		fontWeight: 'bold',
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 'normal',
		letterSpacing: 'normal',
		textAlign: 'center'
	},
	row: {
		padding: 15,
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		justifyContent: 'center'
	},
	rowContent: {
		fontSize: 12
	},
	ctaContainer: {
		padding: 10
	},
	cta: {
		height: 50,
		fontSize: 16,
		fontWeight: 700,
		textTransform: 'none',
		color: 'white',
		backgroundColor: '#31cfda',
		'&:hover': {
			backgroundColor: '#31cfda'
		},
		'&.active': {
			backgroundColor: 'white',
			color: '#31cfda',
			'&:hover': {
				backgroundColor: 'white'
			}
		}
	}
})

interface PlanCardProps {
	plan: any
	duration: string
	onClick: any
	active?: boolean
}

export default function PlanCard ({
	plan,
	duration,
	active,
	onClick
}: PlanCardProps) {
	const classes = useStyles();
	const paperClasses = classnames(
		classes.priceCard,
		{
			['active']: active
		}
	);
	const ctaClasses = classnames(
		classes.cta,
		{
			['active']: active
		}
	);

	return (
		<Paper className={paperClasses}>
			<div className={classes.row}>
				<Typography className={classes.cardTitle}>
					{plan.label}
				</Typography>
			</div>
			<Divider />
			<div className={classnames(classes.row, classes.priceTagRow)}>
				<Typography className={classes.priceTag} align='center' noWrap>
					<strong>
						{sanitizeCurrency(plan.cost[duration])}
					</strong>
				</Typography>
				<Typography className={classes.priceTagDescription}>
					{duration} incl. taxes
				</Typography>
			</div>
			<Divider />
			<div className={classes.row}>
				<Typography className={classes.rowContent}>
					<strong>Maximum duration travel</strong>
					&nbsp;of&nbsp;
					<strong>{plan.max_duration_travel}</strong> days
				</Typography>
			</div>
			<Divider />
			<div className={classes.row}>
				<Typography className={classes.rowContent}>
					<strong>Medical expenses reimbursement</strong>
					&nbsp;up to&nbsp;
					<strong>
						{sanitizeCurrency(plan.max_medical_expense_reimbursement, { mantissa: 0 })}
					</strong>
				</Typography>
			</div>
			<Divider />
			<div className={classes.row}>
				<Typography className={classes.rowContent}> 
					<strong>Personal assistance abroad</strong>
					&nbsp;up to&nbsp;
					<strong>
						{sanitizeCurrency(plan.max_personal_assistance_abroad, { mantissa: 0 })}
					</strong>
				</Typography>
			</div>
			<Divider />
			<div className={classes.row}>
				<Typography className={classes.rowContent}>
					<strong>Travel assistance abroad</strong>
					&nbsp;up to&nbsp;
					<strong>
						{sanitizeCurrency(plan.max_travel_assistance_abroad, { mantissa: 0 })}
					</strong>
					<br />
					per insured per travel
				</Typography>
			</div>
			<Divider />
			<div className={classes.row}>
				<Typography className={classes.rowContent}>
					<strong>Coverage duration: {plan.coverage_duration} year</strong>
				</Typography>
			</div>
			<Divider />
			<div className={classes.ctaContainer}>
				<Button
					disableRipple
					variant='contained'
					fullWidth
					size='large'
					className={ctaClasses}
					startIcon={active && <CheckCircleIcon />}
					onClick={onClick}
				>
					{
						active
							? 'Chosen Plan'
							: 'Select Plan'
					}
				</Button>
			</div>
		</Paper>
	);
}
