import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';

const styles = theme => ({
	root: {
		maxWidth: '500px',
		margin: 'auto',
		//display: 'flex',
		//height: '100%',
		//width: '100%',
	},
	loginWrapper: {
		marginTop: theme.spacing(8),
		display: 'inline-grid',
	},
	typo: {
		textShadow: '0 2px 4px rgba(0,0,0,.5)',
		fontFamily: 'Carter One',
		margin: '5px',
	},
	input: {
		margin: '10px',
	},
});

function Login(props) {
	const { classes } = props;
	const [name, setName] = useState('');
	const [error, setError] = useState(false);
	const [gameCreated, setGameCreated] = useState(false);

	const validateOnSubmit = () => {
		if (name.length == 0 || !name || !name.trim() || name.length > 20) {
			setError(true);
			return false;
		}
		return true;
	};
	const handleOnSubmit = e => {
		e.preventDefault();
		if (!validateOnSubmit()) return;
		localStorage.setItem('user', name);
		setGameCreated(true);
	};
	const handleOnNameChange = e => {
		setName(e.target.value);
		error && setError(false);
	};

	if (gameCreated) {
		return <Redirect to={{ pathname: '/game' }} />;
	}

	return (
		<>
			<div className={classes.root}>
				<form onSubmit={handleOnSubmit} autoComplete="off">
					<div className={classes.loginWrapper}>
						<Typography variant="h4" className={classes.typo}>
							NEW GAME
						</Typography>
						{/*<Typography variant="h6">Welcome to</Typography>
					<Typography variant="h3">NOT Hearthstone</Typography> */}
						<TextField
							error={error}
							label="Choose Name"
							type="text"
							name="userName"
							value={name}
							onChange={handleOnNameChange}
							variant="filled"
							className={classes.input}
						/>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							className={classes.input}
						>
							New Game
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}

export default withStyles(styles)(Login);
