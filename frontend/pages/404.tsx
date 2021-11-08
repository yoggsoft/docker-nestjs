import HeaderFooterLayout from '../app/components/layouts/HeaderFooterLayout';
import Link from 'next/link';
import {
	Grid,
	Typography
} from '@mui/material';
import MuiLink from '@mui/material/Link';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
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
	}
});

export default function Custom404() {
	const classes = useStyles();
	return (
		<HeaderFooterLayout showFooter showHeader>
			<Grid
				textAlign='center'
				container
				justifyContent='center'
				direction='column'
				alignContent='center'
				sx={{ display: 'flex' }}
			>
				<Typography color='white'>
					<h1>
						<span>404</span> - <span>This page could not be found</span>
					</h1>
				</Typography>
				<Grid item className={classes.access}>
					{`Don't have an account?`}
					&nbsp;
					<MuiLink href='/appraisal/create' className={classes.link}>Ask access</MuiLink>
				</Grid>
			</Grid>
		</HeaderFooterLayout>
	)
}
