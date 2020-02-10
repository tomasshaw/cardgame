import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import navBarImage from '../images/navBarMobileImage.png';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
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
		width: '60%',
		margin: 'auto',
		fontFamily: 'Carter One',
		fontSize: '40px',
		color: '#fff',
		textShadow: '0 2px 4px rgba(0,0,0,.5)',
	},
	navBar: {
		backgroundImage: `url(${navBarImage})`,
	},
	filler: {
		width: '20%',
	},
	button: {
		width: '20%',
		color: '#fff',
		textShadow: '0 2px 4px rgba(0,0,0,.5)',
	},
}));

export default function ButtonAppBar(props) {
	const classes = useStyles();
	const [reroute, setReroute] = useState(false);

	//Perdon por esto, se puede hacer de mil maneras mas prolijas.
	useEffect(() => {
		if (reroute) {
			setReroute(false);
		}
	}, [reroute]);

	const handleOnSubmit = e => {
		setReroute(true);
	};

	if (reroute) {
		localStorage.removeItem('user');
		return (
			<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
		);
	}
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar className={classes.navBar}>
					<div className={classes.filler} />
					<Typography variant="h6" className={classes.title}>
						Not Hearthstone
					</Typography>
					<Button
						color="inherit"
						className={classes.button}
						onClick={handleOnSubmit}
					>
						New game
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
