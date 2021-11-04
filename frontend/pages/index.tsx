import type { NextPage } from 'next';
import HeaderFooterLayout from '../app/components/layouts/HeaderFooterLayout';
import {
	Grid,
	Paper,
  Typography,
  Button
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	dialog: {
		padding: '30px 20px'
	},
	greeting: {
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
	logoContainer: {
		textAlign: 'center',
		marginBottom: 30
	},
	content: {
		maxWidth: 350
	},
  cta: {
    backgroundColor: '#317bda',
    textTransform: 'inherit',
    fontWeight: 600,
    minHeight: 48,
    marginTop: 20
  }
});

const HomePage: NextPage = () => {
	const classes = useStyles();
	return (
		<HeaderFooterLayout>
			<Grid container justifyContent='center' alignContent='center' sx={{ display: 'flex' }}>
				<Grid item sm={6} justifyContent='center' className={classes.content}>
					<Grid item className={classes.logoContainer}>
						<Image src='/img/white.svg' layout='fixed' width='86.1' height='100' alt='qover' priority />
					</Grid>
					<Paper className={classes.dialog}>
            <Typography className={classes.greeting}>Welcome at Qover</Typography>
            <Link href='/signin' passHref>
              <Button
              fullWidth
                variant='contained'
                className={classes.cta}
              >
                Sign in to your account
              </Button>
            </Link>
					</Paper>
				</Grid>
			</Grid>
		</HeaderFooterLayout>
	);
}

export default HomePage;
