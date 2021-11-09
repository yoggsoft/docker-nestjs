import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import HeaderFooterLayout from '../../app/components/layouts/HeaderFooterLayout';
import {
	Grid,
	Stack,
	Typography,
} from '@mui/material';
import Image from 'next/image';
import CustomSwitch from '../../app/components/elements/CustomSwitch';
import { makeStyles } from '@mui/styles';
import PlanCard from '../../app/components/elements/PlanCard/PlanCard';

const useStyles = makeStyles({
	title: {
		margin: '40px auto 0',
		fontSize: 26,
		fontWeight: 'bold',
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 'normal',
		letterSpacing: 'normal',
		textAlign: 'center',
		color: 'white'
	},
	switchContainer: {
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center',
		margin: '40px auto'
	},
	comparisonContainer: {
		height: 16,
		lineHeight: '16px',
		display: 'flex',
		marginBottom: 30
	},
	comparisonLink: {
		display: 'flex',
		marginBottom: 30,
		marginRight: 10,
		fontSize: 14,
		textDecoration: 'none',
		fontWeight: 'bold',
		color: '#31cfda',
		'&:hover': {
			textDecoration: 'underline'
		}
	}
});

const plan_duration_options: Array<string> = [
	'monthly',
	'yearly'
];

const Offer: NextPage = ({ planInfo }: any) => {
	const classes = useStyles();

	// Toggles billing frequency
	const [showYearly, setShowYearly] = useState(true);
	const handleSwitch = () => setShowYearly(!showYearly);

	// Toggles payment billing
	const [activePlanDurationOption, setActivePlanDurationOption] = useState(plan_duration_options[1])
	const handlePlanDurationChange = () => setActivePlanDurationOption(plan_duration_options[showYearly ? 1: 0 ]);
	useEffect (() => {
		handlePlanDurationChange()
	}, [showYearly]);

	// Toggles between Selecting Global and Universe plans
	const [selectedPlanOption, setSelectedPlanOption] = useState('')
	const handleSelectedDuration = (planOption: string) => setSelectedPlanOption(planOption);

	return (
		<HeaderFooterLayout
			bgColor='rgba(72, 72, 72, 0.05)'
			backgroundProps={{
				style: {
					backgroundImage: `url('../../img/background-travel.svg')`,
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat'
				}
			}}
		>
			<Grid container justifyContent='center' direction='column' alignContent='center' sx={{ display: 'flex' }}>
				<Grid item>
					<Typography className={classes.title} variant='h2'>Select a plan</Typography>
				</Grid>
				<Grid item className={classes.switchContainer}>
					<Stack direction='row' spacing={1} alignItems='center'>
						<Typography color='white'>PAY MONTHLY</Typography>
						<CustomSwitch checked={showYearly} onClick={handleSwitch} />
						<Typography color='white'>PAY YEARLY</Typography>
					</Stack>
				</Grid>
				<Grid container justifyContent='center'>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<PlanCard
							active={selectedPlanOption === 'global'}
							onClick={() => handleSelectedDuration('global')}
							plan={planInfo.global}
							duration={activePlanDurationOption}
						/>
						<PlanCard
							active={selectedPlanOption === 'universe'}
							onClick={() => handleSelectedDuration('universe')}
							plan={planInfo.universe}
							duration={activePlanDurationOption}
						/>
					</div>
				</Grid>
				<Grid container justifyContent='center'>
					<div className={classes.comparisonContainer}>
						<a href='#' className={classes.comparisonLink}>
							Show me the full comparison table
						</a>
						<Image src={'/img/icon-comparison.svg'} height='17' width='15' alt='comparison' />
					</div>
				</Grid>
			</Grid>
		</HeaderFooterLayout>
	);
}

Offer.getInitialProps = (context) => {
	const {
		purchasePrice,
		car 
	} = context.query;

	const yearlyPriceByCar: {[key: string]: number} = {
		'audi': 250,
		'bwm': 150,
		'porsche': 500
	};
	
	const yearlyUniversePercentagePriceByCar: {[key: string]: number} = {
		'audi': 0.03,
		'bwm': 0.04,
		'porsche': 0.07
	};

	const numberPurchasePrice = parseInt(purchasePrice as string);

	const global_cost_yearly = yearlyPriceByCar[car as string];
	const global_cost_monthly = global_cost_yearly / 12;

	const universe_cost_yearly = global_cost_yearly + (numberPurchasePrice * yearlyUniversePercentagePriceByCar[car as string])
	const universe_cost_monthly = universe_cost_yearly / 12;

  return {
		planInfo: {
			global: {
				label: 'Global',
				cost: {
					monthly: global_cost_monthly,
					yearly: global_cost_yearly
				},
				max_duration_travel: 90,
				max_medical_expense_reimbursement: 1000000,
				max_personal_assistance_abroad: 5000,
				max_travel_assistance_abroad: 1000,
				coverage_duration: 1
			},
			universe: {
				label: 'Universe',
				cost: {
					monthly: universe_cost_monthly,
					yearly: universe_cost_yearly
				},
				max_duration_travel: 180,
				max_medical_expense_reimbursement: 3000000,
				max_personal_assistance_abroad: 10000,
				max_travel_assistance_abroad: 2500,
				coverage_duration: 1
			}
		}
	};
};

export default Offer
