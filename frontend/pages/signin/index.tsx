import type { NextPage } from 'next';
import HeaderFooterLayout from '../../app/components/layouts/HeaderFooterLayout';
import {
	Grid,
	Paper
} from '@mui/material';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';
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
});

const SigninPage: NextPage = () => {
	const classes = useStyles();
	return (
		<HeaderFooterLayout showFooter showHeader>
			<Grid container justifyContent='center' alignContent='center' sx={{ display: 'flex' }}>
				<Grid item sm={6} justifyContent='center' className={classes.content}>
					<Grid item className={classes.logoContainer}>
						<Image src='/img/white.svg' layout='fixed' width='86.1' height='100' alt='qover' priority />
					</Grid>
					<Paper className={classes.dialog}>
						<SigninForm />
					</Paper>
					<Grid item className={classes.access}>
						{`Don't have an account?`}
						&nbsp;
						<Link href='/' passHref> 
							<MuiLink className={classes.link}>
								Ask access
							</MuiLink>
						</Link>
					</Grid>
				</Grid>
			</Grid>
		</HeaderFooterLayout>
	);
}

export default SigninPage