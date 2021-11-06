import Switch, { SwitchProps } from '@mui/material/Switch';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	root: {
		width: 50,
		height: 30,
		padding: 0,
		display: 'flex',
		'&:active': {
			'& .MuiSwitch-thumb': {
				width: 24,
			},
			'& .MuiSwitch-switchBase.Mui-checked': {
				transform: 'translateX(9px)',
			},
		},
		'& .MuiSwitch-switchBase': {
			padding: 4,
			'&.Mui-checked': {
				transform: 'translateX(20px)',
				color: '#fff',
				'& + .MuiSwitch-track': {
					opacity: 1,
					backgroundColor: 'rgba(255, 255, 255, 0.2)'
				},
			},
		},
		'& .MuiSwitch-thumb': {
			boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
			width: 22,
			height: 22,
			borderRadius: 11
		},
		'& .MuiSwitch-track': {
			borderRadius: 25,
			opacity: 1,
			backgroundColor: 'rgba(0,0,0,.25)',
			boxSizing: 'border-box',
		}
	}
});

interface ICustomSwitch extends SwitchProps {};

export default function CustomSwitch ({
checked,
onClick
}: ICustomSwitch) {
	const classes = useStyles();
	return (
		<Switch
			className={classes.root}
			checked={checked}
			onClick={onClick}
			inputProps={{ 'aria-label': 'ant design' }}
		/>
	);
}
