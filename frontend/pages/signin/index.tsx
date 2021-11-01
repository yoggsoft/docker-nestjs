import type { NextPage } from 'next';
import HeaderFooterLayout from '../../app/components/layouts/HeaderFooterLayout';
import {
	Grid,
	Paper,
	Link
} from '@mui/material';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import SigninForm from '../../app/components/elements/SigninForm/SigninForm';

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
		maxWidth: 350
	}
})

const SigninPage: NextPage = () => {
	const classes = useStyles();
	return (
		<HeaderFooterLayout>
			<Grid container justifyContent='center' alignContent='center' sx={{ display: 'flex' }}>
				<Grid item sm={6} justifyContent='center' className={classes.content}>
					<Grid item className={classes.logoContainer}>
						<Image src='/img/white.svg' layout='fixed' width='86.1' height='100' />
					</Grid>
					<Paper className={classes.dialog}>
						<SigninForm />
					</Paper>
					<Grid item className={classes.access}>
						{`Don't have an account?`} &nbsp; <Link href='#' className={classes.link}>Ask access</Link>
					</Grid>
				</Grid>
			</Grid>
		</HeaderFooterLayout>
	);
}

export default SigninPage