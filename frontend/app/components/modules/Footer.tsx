import { FC } from 'react';
import {
	Typography,
	ButtonBase,
	Container
} from '@mui/material';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    minHeight: 49,
		backgroundColor: 'transparent',
		borderTop: 'solid 1px rgba(255, 255, 255, 0.2)'
  },
	container: {
		display: 'flex',
		height: 49,
		justifyContent: 'center'
	},
	typography: {
		height: 17,
		fontSize: 12,
		lineHeight: 1.42,
		letterSpacing: 'normal',
		color: '#fff'
	}
});

export default function Footer () {
	const classes = useStyles();
	return (
		<Container
			className={classes.root}
			component='footer'
			maxWidth={false}
		>
			<Container maxWidth='sm' className={classes.container}>
				<Link href='/' passHref>
						<ButtonBase>
							<Typography variant='h6' component='div' className={classes.typography}>
							{'© Qover 2021'} 
							</Typography>
						</ButtonBase>
					</Link>
			</Container>
		</Container>
	);
}
