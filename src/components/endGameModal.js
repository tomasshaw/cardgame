import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogContentText,
	Button,
	Typography,
	Divider,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	dialogTitle: {
		textAlign: 'center',
		//flexGrow: 1,
	},
	dialogMain: {
		//width: 300,
		//height: 200,
	},
	newGameButton: {
		margin: theme.spacing(3),
	},
	dialogContent: {
		width: theme.spacing(50),
		textAlign: 'center',
	},
}));

export default function EndGameModal({ endedObject }) {
	const classes = useStyles();
	const { ended, playerWon } = endedObject;
	const [open, setOpen] = useState(false);
	const [reroute, setReroute] = useState(false);

	useEffect(() => {
		ended && setOpen(true);
	}, [ended]);

	const handleModalClose = () => {
		setOpen(false);
	};

	const handleModalButtonClick = e => {
		e.preventDefault();
		setReroute(true);
	};

	if (reroute) {
		localStorage.removeItem('user');
		return <Redirect to={{ pathname: '/login' }} />;
	}

	return (
		<Dialog
			open={open}
			className={classes.dialogMain}
			onClose={handleModalClose}
		>
			<DialogTitle disableTypography className={classes.dialogTitle}>
				<Typography variant="h4">
					{playerWon ? 'You won!' : 'You lost!'}
				</Typography>
			</DialogTitle>
			<Divider />
			<DialogContent className={classes.dialogContent}>
				<Button
					variant="contained"
					color="secondary"
					onClick={handleModalButtonClick}
					className={classes.newGameButton}
				>
					Play Again?
				</Button>
			</DialogContent>
		</Dialog>
	);
}
