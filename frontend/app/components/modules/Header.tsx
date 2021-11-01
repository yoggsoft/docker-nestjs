import {
	AppBar,
	ButtonBase,
	Container,
	Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import Link from 'next/link';

const useStyles = makeStyles({
	appbar: {
		height: 30,
		backgroundColor: 'rgba(255, 255, 255, 0.12)'
	},
	container: {
		display: 'flex',
		height: 30
	},
	typography: {
		fontSize: 10,
		fontWeight: 500,
		letterSpacing: 0.75,
		color: '#fff'
	}
});

export default function Header () {
	const classes = useStyles();
	return (
		<AppBar position='static' className={classes.appbar} elevation={0}>
			<Container maxWidth='md' className={classes.container}>
				<Link href='/' passHref>
					<ButtonBase>
						<ChevronLeft fontSize='small' />
						<Typography variant='h6' component='div' className={classes.typography}>
								QOVER.ME
						</Typography>
					</ButtonBase>
				</Link>
			</Container>
		</AppBar>
	);
}
