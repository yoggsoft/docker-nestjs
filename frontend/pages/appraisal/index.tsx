import type { NextPage } from 'next';
import HeaderFooterLayout from '../../app/components/layouts/HeaderFooterLayout';
import {
	Grid,
	Paper,
	Link
} from '@mui/material';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import AppraisalForm from '../../app/components/elements/AppraisalForm/AppraisalForm';

const useStyles = makeStyles({
	dialog: {
		padding: '30px 20px'
	},
	access: {
		display: 'flex',
		border: '1px solid #fff',
		height: 45,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '20px 0 0',
		borderRadius: 3,
		color: '#fff',
		fontSize: 14
	},
	welcome: {
		height: 28,
		fontSize: 18,
		fontWeight: 'normal',
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.56,
		letterSpacing: 'normal',
		textAlign: 'center',
		color: '#5b7289'
	},
	link: {
		fontWeight: 600,
		color: 'white',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
			color: 'white'
		}
	},
	logoContainer: {
		textAlign: 'center',
		marginBottom: 30
	},
	content: {
		// display: 'flex'
		// marginTop: 90,
		// maxWidth: 350
	}
})

const Appraisal: NextPage = () => {
	const classes = useStyles();
	return (
		<HeaderFooterLayout hideFooter hideHeader>
			<Grid container justifyContent='center' alignContent='center' sx={{ display: 'flex' }}>
				<Grid item sm={10} justifyContent='center' className={classes.content}>
					<Paper className={classes.dialog}>
						<AppraisalForm />
					</Paper>
				</Grid>
			</Grid>
		</HeaderFooterLayout>
	);
}

export default Appraisal
