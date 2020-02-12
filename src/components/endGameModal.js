import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogContentText,
	Button,
} from '@material-ui/core';

export default function EndGameModal({ endedObject }) {
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
		<Dialog open={open} onClose={handleModalClose}>
			<DialogTitle>Game Ended</DialogTitle>
			<DialogContent>
				<DialogContentText>
					{playerWon ? 'You won!' : 'You lost!'}
				</DialogContentText>
				<Button onClick={handleModalButtonClick}>Play Again?</Button>
			</DialogContent>
		</Dialog>
	);
}
