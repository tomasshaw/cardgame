import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
	root: {
		//display: 'flex',
		//height: '100%',
		//width: '100%',
	},
	loginWrapper: {
		marginTop: theme.spacing(5),
	},
});

function Login(props) {
	const { classes } = props;
	const [name, setName] = useState('');

	const handleOnNameChange = e => {
		setName(e.target.value);
	};

	return (
		<>
			<div className={classes.root}>
				<div className={classes.loginWrapper}>
					<Typography variant="h3">Welcome to NOT Hearthstone</Typography>
					<TextField
						label="Choose Name"
						type="text"
						name="userName"
						value={name}
						onChange={handleOnNameChange}
					/>
				</div>
			</div>
		</>
	);
}

export default withStyles(styles)(Login);
