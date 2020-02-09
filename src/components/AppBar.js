import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import navBarImage from '../images/navBarMobileImage.png';
//import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		//fontFamily: 'Baloo Bhaijaan',
		fontFamily: 'Carter One',
		//fontFamily: 'Sigmar One',
		fontSize: '40px',
		color: '#fff',
		//letterSpacing: '-.5px',
		textShadow: '0 2px 4px rgba(0,0,0,.5)',
	},
	navBar: {
		backgroundImage: `url(${navBarImage})`,
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar className={classes.navBar}>
					<Typography variant="h6" className={classes.title}>
						Not Hearthstone
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
